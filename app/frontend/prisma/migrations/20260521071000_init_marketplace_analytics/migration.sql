CREATE TYPE "DropStatus" AS ENUM ('UPCOMING', 'LIVE', 'ENDED');

CREATE TABLE "SellerProfile" (
  "walletAddress" TEXT NOT NULL,
  "displayName" TEXT,
  "avatarUrl" TEXT,
  "verified" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "SellerProfile_pkey" PRIMARY KEY ("walletAddress")
);

CREATE TABLE "NftCollection" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "imageUrl" TEXT,
  "floorPrice" DECIMAL(18,9) NOT NULL DEFAULT 0,
  "itemCount" INTEGER NOT NULL DEFAULT 0,
  "verified" BOOLEAN NOT NULL DEFAULT false,
  "isFeatured" BOOLEAN NOT NULL DEFAULT false,
  "rank" INTEGER NOT NULL DEFAULT 999,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "NftCollection_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "NftDrop" (
  "id" TEXT NOT NULL,
  "collectionId" TEXT,
  "name" TEXT NOT NULL,
  "creator" TEXT NOT NULL,
  "imageUrl" TEXT,
  "floorPrice" DECIMAL(18,9) NOT NULL DEFAULT 0,
  "itemCount" INTEGER NOT NULL DEFAULT 0,
  "status" "DropStatus" NOT NULL DEFAULT 'UPCOMING',
  "startsAt" TIMESTAMP(3),
  "endsAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "NftDrop_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MarketplaceSale" (
  "id" TEXT NOT NULL,
  "saleKey" TEXT NOT NULL,
  "txSignature" TEXT,
  "escrowAddress" TEXT,
  "mintAddress" TEXT NOT NULL,
  "nftName" TEXT NOT NULL,
  "imageUrl" TEXT,
  "price" DECIMAL(18,9) NOT NULL,
  "sellerAddress" TEXT NOT NULL,
  "buyerAddress" TEXT NOT NULL,
  "collectionId" TEXT,
  "soldAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "MarketplaceSale_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "NftCollection_slug_key" ON "NftCollection"("slug");
CREATE INDEX "NftCollection_isFeatured_rank_idx" ON "NftCollection"("isFeatured", "rank");
CREATE INDEX "NftCollection_floorPrice_idx" ON "NftCollection"("floorPrice");

CREATE INDEX "NftDrop_status_endsAt_idx" ON "NftDrop"("status", "endsAt");
CREATE INDEX "NftDrop_floorPrice_idx" ON "NftDrop"("floorPrice");

CREATE UNIQUE INDEX "MarketplaceSale_saleKey_key" ON "MarketplaceSale"("saleKey");
CREATE UNIQUE INDEX "MarketplaceSale_txSignature_key" ON "MarketplaceSale"("txSignature");
CREATE INDEX "MarketplaceSale_sellerAddress_soldAt_idx" ON "MarketplaceSale"("sellerAddress", "soldAt");
CREATE INDEX "MarketplaceSale_soldAt_idx" ON "MarketplaceSale"("soldAt");
CREATE INDEX "MarketplaceSale_collectionId_idx" ON "MarketplaceSale"("collectionId");
CREATE INDEX "MarketplaceSale_mintAddress_idx" ON "MarketplaceSale"("mintAddress");

CREATE INDEX "SellerProfile_verified_idx" ON "SellerProfile"("verified");

ALTER TABLE "NftDrop"
  ADD CONSTRAINT "NftDrop_collectionId_fkey"
  FOREIGN KEY ("collectionId")
  REFERENCES "NftCollection"("id")
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE "MarketplaceSale"
  ADD CONSTRAINT "MarketplaceSale_sellerAddress_fkey"
  FOREIGN KEY ("sellerAddress")
  REFERENCES "SellerProfile"("walletAddress")
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE "MarketplaceSale"
  ADD CONSTRAINT "MarketplaceSale_collectionId_fkey"
  FOREIGN KEY ("collectionId")
  REFERENCES "NftCollection"("id")
  ON DELETE SET NULL
  ON UPDATE CASCADE;
