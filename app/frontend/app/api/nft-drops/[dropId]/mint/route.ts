import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type DbRecord = Record<string, unknown>;

type RouteContext = {
  params: Promise<{ dropId: string }>;
};

type ReservePayload = {
  walletAddress?: string;
};

type CompletePayload = {
  mintRecordId?: string;
  mintAddress?: string;
  metadataUri?: string;
  txSignature?: string;
  failed?: boolean;
};

function toNumber(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value);
  if (value && typeof value === "object" && "toString" in value) {
    return Number(String(value));
  }
  return 0;
}

function toStringValue(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function serializeDrop(row: unknown) {
  const drop = row as DbRecord;

  return {
    id: toStringValue(drop.id),
    slug: toStringValue(drop.slug),
    name: toStringValue(drop.name, "Unnamed Drop"),
    creator: toStringValue(drop.creator, "Unknown Creator"),
    description: toStringValue(drop.description),
    imageUrl: toStringValue(drop.imageUrl),
    hypeLabel: toStringValue(drop.hypeLabel),
    mintPrice: toNumber(drop.mintPrice),
    totalSupply: Number(drop.totalSupply ?? 100),
    mintedCount: Number(drop.mintedCount ?? 0),
    blockchain: toStringValue(drop.blockchain, "Solana"),
    symbol: toStringValue(drop.symbol, "NNFT"),
    metadataUri: toStringValue(drop.metadataUri),
    attributes: Array.isArray(drop.attributes) ? drop.attributes : [],
    status: toStringValue(drop.status, "UPCOMING"),
    startsAt: drop.startsAt instanceof Date ? drop.startsAt.toISOString() : null,
    endsAt: drop.endsAt instanceof Date ? drop.endsAt.toISOString() : null,
  };
}

function isLiveDrop(drop: DbRecord, now: Date) {
  const status = toStringValue(drop.status);
  const startsAt = drop.startsAt instanceof Date ? drop.startsAt : null;
  const endsAt = drop.endsAt instanceof Date ? drop.endsAt : null;

  return (
    status === "LIVE" &&
    (!startsAt || startsAt <= now) &&
    (!endsAt || endsAt > now)
  );
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { dropId } = await context.params;
    const body = (await request.json()) as ReservePayload;
    const walletAddress = body.walletAddress?.trim();

    if (!walletAddress) {
      return NextResponse.json({ error: "walletAddress is required" }, { status: 400 });
    }

    const drop = (await prisma.nftDrop.findUnique({
      where: { id: dropId },
    })) as DbRecord | null;

    if (!drop) {
      return NextResponse.json({ error: "Drop not found" }, { status: 404 });
    }

    if (!isLiveDrop(drop, new Date())) {
      return NextResponse.json({ error: "Drop is not live" }, { status: 409 });
    }

    const mintedCount = Number(drop.mintedCount ?? 0);
    const totalSupply = Number(drop.totalSupply ?? 100);

    if (mintedCount >= totalSupply) {
      return NextResponse.json({ error: "Drop is sold out" }, { status: 409 });
    }

    const mintNumber = mintedCount + 1;
    const [updatedDrop, mintRecord] = await prisma.$transaction([
      prisma.nftDrop.update({
        where: { id: dropId },
        data: {
          mintedCount: { increment: 1 },
          status: mintNumber >= totalSupply ? "ENDED" : "LIVE",
        },
      }),
      prisma.nftDropMint.create({
        data: {
          dropId,
          walletAddress,
          mintNumber,
          status: "PENDING",
        },
      }),
    ]);

    return NextResponse.json({
      drop: serializeDrop(updatedDrop),
      mintRecord,
      mintNumber,
    });
  } catch (error) {
    console.error("NFT drop mint reserve error:", error);
    return NextResponse.json(
      { error: "Failed to reserve drop mint" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { dropId } = await context.params;
    const body = (await request.json()) as CompletePayload;
    const mintRecordId = body.mintRecordId?.trim();

    if (!mintRecordId) {
      return NextResponse.json({ error: "mintRecordId is required" }, { status: 400 });
    }

    if (body.failed) {
      const [mintRecord, drop] = await prisma.$transaction([
        prisma.nftDropMint.update({
          where: { id: mintRecordId },
          data: { status: "FAILED" },
        }),
        prisma.nftDrop.update({
          where: { id: dropId },
          data: {
            mintedCount: { decrement: 1 },
            status: "LIVE",
          },
        }),
      ]);

      return NextResponse.json({ mintRecord, drop: serializeDrop(drop) });
    }

    if (!body.mintAddress?.trim()) {
      return NextResponse.json({ error: "mintAddress is required" }, { status: 400 });
    }

    const mintRecord = await prisma.nftDropMint.update({
      where: { id: mintRecordId },
      data: {
        mintAddress: body.mintAddress.trim(),
        metadataUri: body.metadataUri?.trim() || undefined,
        txSignature: body.txSignature?.trim() || undefined,
        status: "COMPLETED",
      },
    });

    return NextResponse.json({ mintRecord });
  } catch (error) {
    console.error("NFT drop mint complete error:", error);
    return NextResponse.json(
      { error: "Failed to update drop mint" },
      { status: 500 }
    );
  }
}
