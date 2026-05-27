import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type SalePayload = {
  txSignature?: string;
  escrowAddress?: string;
  mintAddress?: string;
  nftName?: string;
  imageUrl?: string;
  price?: string | number;
  sellerAddress?: string;
  buyerAddress?: string;
  collectionSlug?: string;
  collectionName?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function shortWallet(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SalePayload;

    if (!isNonEmptyString(body.mintAddress)) {
      return NextResponse.json({ error: "mintAddress is required" }, { status: 400 });
    }

    if (!isNonEmptyString(body.sellerAddress)) {
      return NextResponse.json({ error: "sellerAddress is required" }, { status: 400 });
    }

    if (!isNonEmptyString(body.buyerAddress)) {
      return NextResponse.json({ error: "buyerAddress is required" }, { status: 400 });
    }

    const price = Number(body.price);
    if (!Number.isFinite(price) || price <= 0) {
      return NextResponse.json({ error: "price must be greater than zero" }, { status: 400 });
    }

    const sellerAddress = body.sellerAddress.trim();
    const buyerAddress = body.buyerAddress.trim();
    const mintAddress = body.mintAddress.trim();
    const txSignature = body.txSignature?.trim() || undefined;
    const escrowAddress = body.escrowAddress?.trim() || undefined;
    const saleKey =
      txSignature || `${escrowAddress || "escrow"}:${mintAddress}:${buyerAddress}`;

    await prisma.sellerProfile.upsert({
      where: { walletAddress: sellerAddress },
      update: {},
      create: {
        walletAddress: sellerAddress,
        displayName: shortWallet(sellerAddress),
      },
    });

    let collectionId: string | undefined;

    if (isNonEmptyString(body.collectionSlug) || isNonEmptyString(body.collectionName)) {
      const name = body.collectionName?.trim() || "NFTMINT Collection";
      const slug = body.collectionSlug?.trim() || slugify(name);

      const collection = (await prisma.nftCollection.upsert({
        where: { slug },
        update: {
          name,
          floorPrice: price,
          itemCount: { increment: 0 },
        },
        create: {
          slug,
          name,
          floorPrice: price,
          itemCount: 0,
          isFeatured: false,
        },
      })) as { id?: string };

      collectionId = collection.id;
    }

    const sale = await prisma.marketplaceSale.upsert({
      where: { saleKey },
      update: {},
      create: {
        saleKey,
        txSignature,
        escrowAddress,
        mintAddress,
        nftName: body.nftName?.trim() || "Unnamed NFT",
        imageUrl: body.imageUrl?.trim() || undefined,
        price,
        sellerAddress,
        buyerAddress,
        collectionId,
      },
    });

    return NextResponse.json({ sale });
  } catch (error) {
    console.error("Marketplace sale record error:", error);
    return NextResponse.json(
      { error: "Failed to record marketplace sale" },
      { status: 500 }
    );
  }
}
