import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type DbRecord = Record<string, unknown>;

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

function serializeCollection(
  row: unknown,
  metricLabel?: string,
  metricValue?: string
) {
  const collection = row as DbRecord;

  return {
    id: toStringValue(collection.id),
    slug: toStringValue(collection.slug),
    name: toStringValue(collection.name, "Unnamed Collection"),
    description: toStringValue(collection.description),
    imageUrl: toStringValue(collection.imageUrl),
    floorPrice: toNumber(collection.floorPrice),
    itemCount: Number(collection.itemCount ?? 0),
    verified: Boolean(collection.verified),
    isFeatured: Boolean(collection.isFeatured),
    metricLabel,
    metricValue,
  };
}

function uniqueById<T extends { id?: string }>(items: T[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (!item.id || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function getCollectionFromDrop(drop: DbRecord | undefined) {
  const collection = drop?.collection as DbRecord | undefined;
  if (collection?.id) return serializeCollection(collection);

  return {
    id: `drop:${toStringValue(drop?.id)}`,
    slug: toStringValue(drop?.slug, toStringValue(drop?.id)),
    name: toStringValue(drop?.name, "Unnamed Drop"),
    description: toStringValue(drop?.description),
    imageUrl: toStringValue(drop?.imageUrl),
    floorPrice: toNumber(drop?.mintPrice || drop?.floorPrice),
    itemCount: Number(drop?.totalSupply ?? drop?.itemCount ?? 0),
    verified: false,
    isFeatured: false,
    metricLabel: undefined as string | undefined,
    metricValue: undefined as string | undefined,
  };
}

function getCollectionFromSale(sale: DbRecord) {
  const collection = sale.collection as DbRecord | undefined;
  if (collection?.id) return serializeCollection(collection);

  const nftName = toStringValue(sale.nftName, "Marketplace NFT");
  const slug = nftName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return {
    id: `sale:${slug || toStringValue(sale.mintAddress)}`,
    slug: slug || toStringValue(sale.mintAddress),
    name: nftName,
    description: "Marketplace activity from completed sales.",
    imageUrl: toStringValue(sale.imageUrl),
    floorPrice: toNumber(sale.price),
    itemCount: 1,
    verified: false,
    isFeatured: false,
    metricLabel: undefined as string | undefined,
    metricValue: undefined as string | undefined,
  };
}

type CollectionMetric = ReturnType<typeof getCollectionFromSale> & {
  salesCount: number;
  volume: number;
  trades: number;
  firstPrice: number;
  latestPrice: number;
  mintCount: number;
  rarityActivity: number;
};

function getMetricKey(collection: { id?: string }) {
  return collection.id || "";
}

function upsertMetric(
  metrics: Map<string, CollectionMetric>,
  collection: ReturnType<typeof getCollectionFromSale>
) {
  const key = getMetricKey(collection);
  const current =
    metrics.get(key) ||
    ({
      ...collection,
      salesCount: 0,
      volume: 0,
      trades: 0,
      firstPrice: 0,
      latestPrice: 0,
      mintCount: 0,
      rarityActivity: 0,
    } satisfies CollectionMetric);

  metrics.set(key, current);
  return current;
}

function serializeDrop(row: unknown) {
  const drop = row as DbRecord;
  const collection = drop.collection ? serializeCollection(drop.collection) : null;

  return {
    id: toStringValue(drop.id),
    name: toStringValue(drop.name, "Unnamed Drop"),
    creator: toStringValue(drop.creator, "Unknown Creator"),
    imageUrl: toStringValue(drop.imageUrl),
    floorPrice: toNumber(drop.floorPrice),
    itemCount: Number(drop.itemCount ?? 0),
    status: toStringValue(drop.status, "UPCOMING"),
    startsAt: drop.startsAt instanceof Date ? drop.startsAt.toISOString() : null,
    endsAt: drop.endsAt instanceof Date ? drop.endsAt.toISOString() : null,
    collection,
  };
}

function serializeSale(row: unknown) {
  const sale = row as DbRecord;
  const sellerProfile = sale.sellerProfile as DbRecord | undefined;

  return {
    id: toStringValue(sale.id),
    saleKey: toStringValue(sale.saleKey),
    txSignature: toStringValue(sale.txSignature),
    escrowAddress: toStringValue(sale.escrowAddress),
    mintAddress: toStringValue(sale.mintAddress),
    nftName: toStringValue(sale.nftName, "Unnamed NFT"),
    imageUrl: toStringValue(sale.imageUrl),
    price: toNumber(sale.price),
    sellerAddress: toStringValue(sale.sellerAddress),
    buyerAddress: toStringValue(sale.buyerAddress),
    sellerName: toStringValue(sellerProfile?.displayName, toStringValue(sale.sellerAddress)),
    sellerAvatarUrl: toStringValue(sellerProfile?.avatarUrl),
    sellerVerified: Boolean(sellerProfile?.verified),
    soldAt: sale.soldAt instanceof Date ? sale.soldAt.toISOString() : null,
  };
}

export async function GET() {
  try {
    const [
      featuredCollections,
      topDrops,
      recentSales,
      collectionSales,
      completedMints,
      sellerGroups,
    ] =
      await Promise.all([
        prisma.nftCollection.findMany({
          where: { isFeatured: true },
          orderBy: [{ rank: "asc" }, { updatedAt: "desc" }],
          take: 10,
        }),
        prisma.nftDrop.findMany({
          where: { status: "LIVE" },
          include: { collection: true },
          orderBy: [{ endsAt: "asc" }, { floorPrice: "desc" }],
          take: 10,
        }),
        prisma.marketplaceSale.findMany({
          include: { sellerProfile: true, collection: true },
          orderBy: { soldAt: "desc" },
          take: 10,
        }),
        prisma.marketplaceSale.findMany({
          include: { collection: true },
          orderBy: { soldAt: "desc" },
          take: 80,
        }),
        prisma.nftDropMint.findMany({
          where: { status: "COMPLETED" },
          include: { drop: { include: { collection: true } } },
          orderBy: { mintedAt: "desc" },
          take: 80,
        }),
        prisma.marketplaceSale.groupBy({
          by: ["sellerAddress"],
          _sum: { price: true },
          _count: { id: true },
          orderBy: { _sum: { price: "desc" } },
          take: 10,
        }),
      ]);

    const collectionMetrics = new Map<string, CollectionMetric>();
    
    collectionSales.forEach((sale) => {
      const row = sale as DbRecord;
      const collection = getCollectionFromSale(row);
      const metric = upsertMetric(collectionMetrics, collection);
      const price = toNumber(row.price);

      metric.salesCount += 1;
      metric.volume += price;
      metric.trades += 2;
      metric.latestPrice = metric.latestPrice || price;
      metric.firstPrice = price;
      metric.floorPrice = Math.min(metric.floorPrice || price, price);
    });

    completedMints.forEach((mint) => {
      const row = mint as DbRecord;
      const drop = row.drop as DbRecord | undefined;
      const collection = getCollectionFromDrop(drop);
      const metric = upsertMetric(collectionMetrics, collection);
      const attributes = drop?.attributes;
      const rarityCount = Array.isArray(attributes) ? attributes.length : 0;

      metric.mintCount += 1;
      metric.rarityActivity += rarityCount;
      metric.itemCount = Math.max(metric.itemCount, Number(drop?.totalSupply ?? 0));
    });

    const recentlyMintedCollections = uniqueById(
      completedMints.map((mint) => {
        const row = mint as DbRecord;
        const drop = row.drop as DbRecord | undefined;
        const collection = getCollectionFromDrop(drop);

        return {
          ...collection,
          metricLabel: "Latest mint",
          metricValue: `#${Number(row.mintNumber ?? 0)}`,
        };
      })
    ).slice(0, 5);

    const trendingCollections = Array.from(collectionMetrics.values())
      .map((metric) => {
        const priceGrowth =
          metric.firstPrice > 0
            ? Math.max(0, (metric.latestPrice - metric.firstPrice) / metric.firstPrice)
            : 0;
        const score =
          metric.salesCount * 3 +
          metric.volume * 2 +
          priceGrowth * 10 +
          metric.rarityActivity * 0.5 +
          metric.mintCount;

        return {
          ...metric,
          metricLabel: "Trend score",
          metricValue: score.toFixed(1),
          trendScore: score,
        };
      })
      .filter((collection) => collection.trendScore > 0)
      .sort((a, b) => b.trendScore - a.trendScore)
      .slice(0, 5);

    const mostTradedCollections = Array.from(collectionMetrics.values())
      .filter((metric) => metric.trades > 0)
      .sort((a, b) => b.trades - a.trades || b.volume - a.volume)
      .map((metric) => ({
        ...metric,
        metricLabel: "Trades",
        metricValue: `${metric.trades}`,
      }))
      .slice(0, 5);

    const editorPickCollections = featuredCollections
      .map((collection, index) =>
        serializeCollection(collection, "Editor rank", `#${index + 1}`)
      )
      .slice(0, 5);

    const collectionSections = [
      {
        id: "recently-minted",
        title: "Recently Minted Collections",
        description: "Latest completed NFT mints",
        collections: recentlyMintedCollections,
      },
      {
        id: "most-traded",
        title: "Most Traded Collections",
        description: "Highest buy and sell transaction count",
        collections: mostTradedCollections,
      },
      {
        id: "trending",
        title: "Trending Collections",
        description: "Sales, volume, price growth, and rarity activity",
        collections: trendingCollections,
      },
      {
        id: "editor-picks",
        title: "Editor Picks",
        description: "Manually curated from the database",
        collections: editorPickCollections,
      },
    ].filter((section) => section.collections.length > 0);

    const topSellers = sellerGroups.map((group, index) => {
      const row = group as DbRecord;
      const sellerAddress = toStringValue(row.sellerAddress);
      const sum = row._sum as DbRecord | undefined;
      const count = row._count as DbRecord | undefined;

      return {
        rank: index + 1,
        sellerAddress,
        displayName:
          `${sellerAddress.slice(0, 4)}...${sellerAddress.slice(-4)}`,
        avatarUrl: "",
        verified: false,
        totalVolume: toNumber(sum?.price),
        salesCount: Number(count?.id ?? 0),
      };
    });

    const sellerAddresses = sellerGroups
      .map((group) => toStringValue((group as DbRecord).sellerAddress))
      .filter(Boolean);

    const sellerProfiles = await prisma.sellerProfile.findMany({
      where: { walletAddress: { in: sellerAddresses } },
    });

    const profileByAddress = new Map(
      sellerProfiles.map((profile) => {
        const row = profile as DbRecord;
        return [toStringValue(row.walletAddress), row];
      })
    );

    const enrichedTopSellers = topSellers.map((seller) => {
      const profile = profileByAddress.get(seller.sellerAddress);

      return {
        ...seller,
        displayName:
          toStringValue(profile?.displayName) ||
          `${seller.sellerAddress.slice(0, 4)}...${seller.sellerAddress.slice(-4)}`,
        avatarUrl: toStringValue(profile?.avatarUrl),
        verified: Boolean(profile?.verified),
      };
    });

    return NextResponse.json({
      featuredCollections: featuredCollections.map((collection) =>
        serializeCollection(collection)
      ),
      collectionSections,
      topDrops: topDrops.map(serializeDrop),
      recentSales: recentSales.map(serializeSale),
      topSellers: enrichedTopSellers,
    });
  } catch (error) {
    console.error("Marketplace analytics error:", error);
    return NextResponse.json(
      { error: "Failed to load marketplace analytics" },
      { status: 500 }
    );
  }
}
