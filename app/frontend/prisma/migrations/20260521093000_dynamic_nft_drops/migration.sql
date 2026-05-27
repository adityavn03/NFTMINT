ALTER TABLE "NftDrop"
  ADD COLUMN "slug" TEXT,
  ADD COLUMN "description" TEXT,
  ADD COLUMN "mintPrice" DECIMAL(18,9) NOT NULL DEFAULT 0,
  ADD COLUMN "totalSupply" INTEGER NOT NULL DEFAULT 100,
  ADD COLUMN "mintedCount" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "blockchain" TEXT NOT NULL DEFAULT 'Solana',
  ADD COLUMN "symbol" TEXT NOT NULL DEFAULT 'NNFT',
  ADD COLUMN "metadataUri" TEXT,
  ADD COLUMN "attributes" JSONB;

UPDATE "NftDrop"
SET
  "slug" = LOWER(REGEXP_REPLACE("id" || '-' || "name", '[^a-zA-Z0-9]+', '-', 'g')),
  "mintPrice" = "floorPrice",
  "totalSupply" = CASE WHEN "itemCount" > 0 THEN "itemCount" ELSE 100 END,
  "mintedCount" = 0
WHERE "slug" IS NULL;

ALTER TABLE "NftDrop"
  ALTER COLUMN "slug" SET NOT NULL;

CREATE UNIQUE INDEX "NftDrop_slug_key" ON "NftDrop"("slug");
CREATE INDEX "NftDrop_startsAt_endsAt_idx" ON "NftDrop"("startsAt", "endsAt");

CREATE TABLE "NftDropMint" (
  "id" TEXT NOT NULL,
  "dropId" TEXT NOT NULL,
  "walletAddress" TEXT NOT NULL,
  "mintNumber" INTEGER NOT NULL,
  "mintAddress" TEXT,
  "txSignature" TEXT,
  "metadataUri" TEXT,
  "status" TEXT NOT NULL DEFAULT 'PENDING',
  "mintedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "NftDropMint_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "NftDropMint_dropId_mintNumber_key" ON "NftDropMint"("dropId", "mintNumber");
CREATE INDEX "NftDropMint_walletAddress_mintedAt_idx" ON "NftDropMint"("walletAddress", "mintedAt");
CREATE INDEX "NftDropMint_dropId_status_idx" ON "NftDropMint"("dropId", "status");
CREATE INDEX "NftDropMint_mintAddress_idx" ON "NftDropMint"("mintAddress");

ALTER TABLE "NftDropMint"
  ADD CONSTRAINT "NftDropMint_dropId_fkey"
  FOREIGN KEY ("dropId")
  REFERENCES "NftDrop"("id")
  ON DELETE CASCADE
  ON UPDATE CASCADE;
