import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const now = new Date();
const minutesFromNow = (minutes) => new Date(now.getTime() + minutes * 60 * 1000);
const daysAgo = (days) => new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

const sellers = [
  {
    walletAddress: "7NeonMarket111111111111111111111111111111111",
    displayName: "Neon Market",
    avatarUrl: "https://api.dicebear.com/9.x/shapes/svg?seed=neon-market",
    verified: true,
  },
  {
    walletAddress: "8CyberForge22222222222222222222222222222222",
    displayName: "Cyber Forge",
    avatarUrl: "https://api.dicebear.com/9.x/shapes/svg?seed=cyber-forge",
    verified: true,
  },
  {
    walletAddress: "9OrbitVault33333333333333333333333333333333",
    displayName: "Orbit Vault",
    avatarUrl: "https://api.dicebear.com/9.x/shapes/svg?seed=orbit-vault",
    verified: false,
  },
];

const collections = [
  {
    slug: "cyber-samurai",
    name: "Cyber Samurai",
    description: "Limited Solana collectibles forged for early marketplace collectors.",
    imageUrl: "https://picsum.photos/seed/cyber-samurai-collection/900/700",
    floorPrice: "1.200000000",
    itemCount: 100,
    verified: true,
    isFeatured: true,
    rank: 1,
  },
  {
    slug: "orbit-keys",
    name: "Orbit Keys",
    description: "Space-themed access keys with active marketplace liquidity.",
    imageUrl: "https://picsum.photos/seed/orbit-keys-collection/900/700",
    floorPrice: "0.850000000",
    itemCount: 100,
    verified: true,
    isFeatured: true,
    rank: 2,
  },
  {
    slug: "ghost-grid",
    name: "Ghost Grid",
    description: "Countdown-based grid collectibles with rarity driven traits.",
    imageUrl: "https://picsum.photos/seed/ghost-grid-collection/900/700",
    floorPrice: "1.650000000",
    itemCount: 100,
    verified: false,
    isFeatured: true,
    rank: 3,
  },
];

const drops = [
  {
    slug: "cyber-samurai-live",
    collectionSlug: "cyber-samurai",
    name: "Cyber Samurai",
    creator: "neon-dojo",
    description: "A limited Cyber Samurai mint forged for early market collectors.",
    imageUrl: "https://picsum.photos/seed/cyber-samurai/900/700",
    hypeLabel: "Live minting collection",
    mintPrice: "1.200000000",
    floorPrice: "1.200000000",
    itemCount: 100,
    totalSupply: 100,
    mintedCount: 37,
    blockchain: "Solana",
    symbol: "CYB",
    metadataUri: "https://metadata.nftmint.local/cyber-samurai.json",
    attributes: [
      { trait_type: "Drop", value: "Live" },
      { trait_type: "Supply", value: "100" },
      { trait_type: "Chain", value: "Solana" },
    ],
    status: "LIVE",
    startsAt: minutesFromNow(-12),
    endsAt: minutesFromNow(48),
  },
  {
    slug: "orbit-keys-live",
    collectionSlug: "orbit-keys",
    name: "Orbit Keys",
    creator: "starforge",
    description: "Access keys for a rotating space-themed mint event.",
    imageUrl: "https://picsum.photos/seed/orbit-keys/900/700",
    hypeLabel: "Trending mint event",
    mintPrice: "0.850000000",
    floorPrice: "0.850000000",
    itemCount: 100,
    totalSupply: 100,
    mintedCount: 24,
    blockchain: "Solana",
    symbol: "ORB",
    metadataUri: "https://metadata.nftmint.local/orbit-keys.json",
    attributes: [
      { trait_type: "Drop", value: "Trending" },
      { trait_type: "Supply", value: "100" },
      { trait_type: "Access", value: "Key" },
    ],
    status: "LIVE",
    startsAt: minutesFromNow(-5),
    endsAt: minutesFromNow(55),
  },
  {
    slug: "ghost-grid-upcoming",
    collectionSlug: "ghost-grid",
    name: "Ghost Grid",
    creator: "parallel-labs",
    description: "Countdown-based launch for ghosted grid collectibles.",
    imageUrl: "https://picsum.photos/seed/ghost-grid/900/700",
    hypeLabel: "Countdown-based launch",
    mintPrice: "1.650000000",
    floorPrice: "1.650000000",
    itemCount: 100,
    totalSupply: 100,
    mintedCount: 0,
    blockchain: "Solana",
    symbol: "GHO",
    metadataUri: "https://metadata.nftmint.local/ghost-grid.json",
    attributes: [
      { trait_type: "Drop", value: "Upcoming" },
      { trait_type: "Supply", value: "100" },
      { trait_type: "Style", value: "Grid" },
    ],
    status: "UPCOMING",
    startsAt: minutesFromNow(30),
    endsAt: minutesFromNow(90),
  },
];

const completedMints = [
  {
    dropSlug: "cyber-samurai-live",
    walletAddress: "BuyerWallet111111111111111111111111111111111",
    mintNumber: 1,
    mintAddress: "MintCyberSamurai0001",
    txSignature: "seed-mint-cyber-samurai-0001",
    metadataUri: "https://metadata.nftmint.local/cyber-samurai/1.json",
    status: "COMPLETED",
    mintedAt: daysAgo(2),
  },
  {
    dropSlug: "cyber-samurai-live",
    walletAddress: "BuyerWallet222222222222222222222222222222222",
    mintNumber: 2,
    mintAddress: "MintCyberSamurai0002",
    txSignature: "seed-mint-cyber-samurai-0002",
    metadataUri: "https://metadata.nftmint.local/cyber-samurai/2.json",
    status: "COMPLETED",
    mintedAt: daysAgo(1),
  },
  {
    dropSlug: "orbit-keys-live",
    walletAddress: "BuyerWallet333333333333333333333333333333333",
    mintNumber: 1,
    mintAddress: "MintOrbitKeys0001",
    txSignature: "seed-mint-orbit-keys-0001",
    metadataUri: "https://metadata.nftmint.local/orbit-keys/1.json",
    status: "COMPLETED",
    mintedAt: daysAgo(1.5),
  },
];

const sales = [
  {
    saleKey: "seed-sale-cyber-samurai-0001",
    txSignature: "seed-sale-tx-cyber-samurai-0001",
    escrowAddress: "EscrowCyberSamurai0001",
    mintAddress: "MintCyberSamurai0001",
    nftName: "Cyber Samurai #1",
    imageUrl: "https://picsum.photos/seed/cyber-samurai-sale-1/900/700",
    price: "1.480000000",
    sellerAddress: sellers[0].walletAddress,
    buyerAddress: "BuyerWallet111111111111111111111111111111111",
    collectionSlug: "cyber-samurai",
    soldAt: daysAgo(1.8),
  },
  {
    saleKey: "seed-sale-orbit-keys-0001",
    txSignature: "seed-sale-tx-orbit-keys-0001",
    escrowAddress: "EscrowOrbitKeys0001",
    mintAddress: "MintOrbitKeys0001",
    nftName: "Orbit Keys #1",
    imageUrl: "https://picsum.photos/seed/orbit-keys-sale-1/900/700",
    price: "0.970000000",
    sellerAddress: sellers[1].walletAddress,
    buyerAddress: "BuyerWallet333333333333333333333333333333333",
    collectionSlug: "orbit-keys",
    soldAt: daysAgo(1.2),
  },
  {
    saleKey: "seed-sale-ghost-grid-preview",
    txSignature: "seed-sale-tx-ghost-grid-preview",
    escrowAddress: "EscrowGhostGridPreview",
    mintAddress: "MintGhostGridPreview",
    nftName: "Ghost Grid Preview",
    imageUrl: "https://picsum.photos/seed/ghost-grid-sale-preview/900/700",
    price: "1.830000000",
    sellerAddress: sellers[2].walletAddress,
    buyerAddress: "BuyerWallet444444444444444444444444444444444",
    collectionSlug: "ghost-grid",
    soldAt: daysAgo(0.6),
  },
];

async function main() {
  const sellerProfiles = await Promise.all(
    sellers.map((seller) =>
      prisma.sellerProfile.upsert({
        where: { walletAddress: seller.walletAddress },
        update: {
          displayName: seller.displayName,
          avatarUrl: seller.avatarUrl,
          verified: seller.verified,
        },
        create: seller,
      })
    )
  );

  const collectionRows = await Promise.all(
    collections.map((collection) =>
      prisma.nftCollection.upsert({
        where: { slug: collection.slug },
        update: {
          name: collection.name,
          description: collection.description,
          imageUrl: collection.imageUrl,
          floorPrice: collection.floorPrice,
          itemCount: collection.itemCount,
          verified: collection.verified,
          isFeatured: collection.isFeatured,
          rank: collection.rank,
        },
        create: collection,
      })
    )
  );

  const collectionBySlug = new Map(
    collectionRows.map((collection) => [collection.slug, collection])
  );

  const dropRows = await Promise.all(
    drops.map(({ collectionSlug, ...drop }) => {
      const collection = collectionBySlug.get(collectionSlug);

      return prisma.nftDrop.upsert({
        where: { slug: drop.slug },
        update: {
          ...drop,
          collectionId: collection?.id,
        },
        create: {
          ...drop,
          collectionId: collection?.id,
        },
      });
    })
  );

  const dropBySlug = new Map(dropRows.map((drop) => [drop.slug, drop]));

  await Promise.all(
    completedMints.map(({ dropSlug, ...mint }) => {
      const drop = dropBySlug.get(dropSlug);
      if (!drop) {
        throw new Error(`Missing seeded drop: ${dropSlug}`);
      }

      return prisma.nftDropMint.upsert({
        where: {
          dropId_mintNumber: {
            dropId: drop.id,
            mintNumber: mint.mintNumber,
          },
        },
        update: mint,
        create: {
          ...mint,
          dropId: drop.id,
        },
      });
    })
  );

  await Promise.all(
    sales.map(({ collectionSlug, ...sale }) => {
      const collection = collectionBySlug.get(collectionSlug);

      return prisma.marketplaceSale.upsert({
        where: { saleKey: sale.saleKey },
        update: {
          ...sale,
          collectionId: collection?.id,
        },
        create: {
          ...sale,
          collectionId: collection?.id,
        },
      });
    })
  );

  console.log(
    `Seeded ${sellerProfiles.length} sellers, ${collectionRows.length} collections, ${dropRows.length} drops, ${completedMints.length} mints, and ${sales.length} sales.`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
