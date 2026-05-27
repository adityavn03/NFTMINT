import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const DROP_TOTAL_SUPPLY = 100;
const DROP_DURATION_MS = 5 * 60 * 1000;

type DbRecord = Record<string, unknown>;

const seedDrops = [
  {
    slug: "cyber-samurai",
    name: "Cyber Samurai",
    creator: "neon-dojo",
    description: "A limited Cyber Samurai mint forged for early market collectors.",
    imageUrl: "https://picsum.photos/seed/cyber-samurai/900/700",
    mintPrice: 1.2,
    hypeLabel: "Live minting collection",
    symbol: "CYB",
    attributes: [
      { trait_type: "Drop", value: "Live" },
      { trait_type: "Supply", value: "100" },
    ],
  },
  {
    slug: "orbit-keys",
    name: "Orbit Keys",
    creator: "starforge",
    description: "Access keys for a rotating space-themed mint event.",
    imageUrl: "https://picsum.photos/seed/orbit-keys/900/700",
    mintPrice: 0.85,
    hypeLabel: "Trending mint event",
    symbol: "ORB",
    attributes: [
      { trait_type: "Drop", value: "Trending" },
      { trait_type: "Supply", value: "100" },
    ],
  },
  {
    slug: "ghost-grid",
    name: "Ghost Grid",
    creator: "parallel-labs",
    description: "Countdown-based launch for ghosted grid collectibles.",
    imageUrl: "https://picsum.photos/seed/ghost-grid/900/700",
    mintPrice: 1.65,
    hypeLabel: "Countdown-based launch",
    symbol: "GHO",
    attributes: [
      { trait_type: "Drop", value: "Upcoming" },
      { trait_type: "Supply", value: "100" },
    ],
  },
  {
    slug: "ember-vault",
    name: "Ember Vault",
    creator: "forge-house",
    description: "Limited-time vault mint with a fast closing window.",
    imageUrl: "https://picsum.photos/seed/ember-vault/900/700",
    mintPrice: 2.1,
    hypeLabel: "Limited-time drop",
    symbol: "EMB",
    attributes: [
      { trait_type: "Drop", value: "Limited" },
      { trait_type: "Supply", value: "100" },
    ],
  },
  {
    slug: "nova-bloom",
    name: "Nova Bloom",
    creator: "garden-protocol",
    description: "A bright rotating mint for the next live slot.",
    imageUrl: "https://picsum.photos/seed/nova-bloom/900/700",
    mintPrice: 0.72,
    hypeLabel: "Limited supply mint",
    symbol: "NOVA",
    attributes: [
      { trait_type: "Drop", value: "Limited" },
      { trait_type: "Supply", value: "100" },
    ],
  },
  {
    slug: "mecha-runners",
    name: "Mecha Runners",
    creator: "speed-labs",
    description: "Fast-moving mecha collectibles for rotating drop slots.",
    imageUrl: "https://picsum.photos/seed/mecha-runners/900/700",
    mintPrice: 1.45,
    hypeLabel: "Trending mint event",
    symbol: "MECH",
    attributes: [
      { trait_type: "Drop", value: "Trending" },
      { trait_type: "Supply", value: "100" },
    ],
  },
];

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
    mintPrice: toNumber(drop.mintPrice),
    floorPrice: toNumber(drop.floorPrice),
    totalSupply: Number(drop.totalSupply ?? DROP_TOTAL_SUPPLY),
    mintedCount: Number(drop.mintedCount ?? 0),
    blockchain: toStringValue(drop.blockchain, "Solana"),
    symbol: toStringValue(drop.symbol, "NNFT"),
    metadataUri: toStringValue(drop.metadataUri),
    attributes: Array.isArray(drop.attributes) ? drop.attributes : [],
    status: toStringValue(drop.status, "UPCOMING"),
    startsAt: drop.startsAt instanceof Date ? drop.startsAt.toISOString() : null,
    endsAt: drop.endsAt instanceof Date ? drop.endsAt.toISOString() : null,
    hypeLabel: toStringValue(drop.hypeLabel, ""),
  };
}

async function ensureSeedDrops() {
  const now = Date.now();

  await Promise.all(
    seedDrops.map((drop, index) => {
      const startsAt = index === 2 ? new Date(now + 90 * 1000) : new Date(now);
      const endsAt = new Date(startsAt.getTime() + DROP_DURATION_MS + index * 45 * 1000);

      return prisma.nftDrop.upsert({
        where: { slug: drop.slug },
        update: {
          imageUrl: drop.imageUrl,
          description: drop.description,
          mintPrice: drop.mintPrice,
          hypeLabel: drop.hypeLabel,
          floorPrice: drop.mintPrice,
          totalSupply: DROP_TOTAL_SUPPLY,
          blockchain: "Solana",
          symbol: drop.symbol,
          attributes: drop.attributes,
        },
        create: {
          slug: drop.slug,
          name: drop.name,
          creator: drop.creator,
          description: drop.description,
          imageUrl: drop.imageUrl,
          hypeLabel: drop.hypeLabel,
          mintPrice: drop.mintPrice,
          floorPrice: drop.mintPrice,
          itemCount: DROP_TOTAL_SUPPLY,
          totalSupply: DROP_TOTAL_SUPPLY,
          mintedCount: index === 2 ? 0 : 4 + index * 7,
          blockchain: "Solana",
          symbol: drop.symbol,
          attributes: drop.attributes,
          status: index === 2 ? "UPCOMING" : "LIVE",
          startsAt,
          endsAt,
        },
      });
    })
  );
}

async function rotateExpiredDrops() {
  const now = new Date();
  const expiredDrops = await prisma.nftDrop.findMany({
    where: { endsAt: { lte: now } },
    orderBy: { updatedAt: "asc" },
    take: 10,
  });

  await Promise.all(
    expiredDrops.map((drop, index) => {
      const row = drop as DbRecord;
      const currentSlug = toStringValue(row.slug);
      const currentIndex = seedDrops.findIndex((item) => item.slug === currentSlug);
      const nextTemplate =
        seedDrops[(Math.max(0, currentIndex) + index + 1) % seedDrops.length];
      const startsAt = new Date();
      const endsAt = new Date(startsAt.getTime() + DROP_DURATION_MS + index * 45 * 1000);

      return prisma.nftDrop.update({
        where: { id: toStringValue(row.id) },
        data: {
          slug: `${nextTemplate.slug}-${Date.now()}-${index}`,
          name: nextTemplate.name,
          creator: nextTemplate.creator,
          description: nextTemplate.description,
          imageUrl: nextTemplate.imageUrl,
          hypeLabel: nextTemplate.hypeLabel,
          mintPrice: nextTemplate.mintPrice,
          floorPrice: nextTemplate.mintPrice,
          itemCount: DROP_TOTAL_SUPPLY,
          totalSupply: DROP_TOTAL_SUPPLY,
          mintedCount: 0,
          blockchain: "Solana",
          symbol: nextTemplate.symbol,
          attributes: nextTemplate.attributes,
          metadataUri: null,
          status: "LIVE",
          startsAt,
          endsAt,
        },
      });
    })
  );
}

export async function GET() {
  try {
    await ensureSeedDrops();
    await rotateExpiredDrops();

    const now = new Date();
    const drops = await prisma.nftDrop.findMany({
      where: {
        OR: [
          { status: "LIVE" },
          { status: "UPCOMING" },
          { endsAt: { gt: now } },
        ],
      },
      orderBy: [{ startsAt: "asc" }, { updatedAt: "desc" }],
      take: 4,
    });

    return NextResponse.json({ drops: drops.map(serializeDrop) });
  } catch (error) {
    console.error("NFT drops load error:", error);
    return NextResponse.json(
      { error: "Failed to load NFT drops" },
      { status: 500 }
    );
  }
}
