"use client";

import { Loader2, RefreshCw, Search, Store } from "lucide-react";
import MarketplaceCard from "../MarketPlaceCard/page";

type MarketplaceListing = {
  escrowAddress: string;
  mintAddress: string;
  seller: string;
  price: string | number;
  name: string;
  image?: string;
};

interface MarketplaceTabProps {
  listedNFTs: MarketplaceListing[];
  loadingMarketplace: boolean;
  loadMarketplace: () => void;
  handleBuyNFT: (listing: MarketplaceListing) => void;
  handleCancelListing: (listing: MarketplaceListing) => void;
  publicKey: string | undefined;
  walletConnected: boolean;
  loading: boolean;
  cancelingListing: string | null;
}

export default function MarketplaceTab({
  listedNFTs,
  loadingMarketplace,
  loadMarketplace,
  handleBuyNFT,
  handleCancelListing,
  publicKey,
  walletConnected,
  loading,
  cancelingListing,
}: MarketplaceTabProps) {
  const totalVolume = listedNFTs.reduce(
    (sum, nft) => sum + Number(nft.price || 0),
    0
  );
  const floorPrice =
    listedNFTs.length > 0
      ? Math.min(...listedNFTs.map((nft) => Number(nft.price || 0)))
      : 0;

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Marketplace
          </p>
          <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Live NFT listings
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Browse NFTs listed through the escrow program and purchase directly
            from your connected wallet.
          </p>
        </div>

        <button
          onClick={loadMarketplace}
          disabled={loadingMarketplace}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          <RefreshCw className={`h-4 w-4 ${loadingMarketplace ? "animate-spin" : ""}`} />
          {loadingMarketplace ? "Refreshing" : "Refresh"}
        </button>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Active listings
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950">{listedNFTs.length}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Floor price
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950">
            {floorPrice.toFixed(2)} SOL
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Listed value
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950">
            {totalVolume.toFixed(2)} SOL
          </p>
        </div>
      </div>

      {loadingMarketplace ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
          <p className="mt-4 text-sm font-semibold text-slate-700">
            Loading marketplace listings
          </p>
        </div>
      ) : listedNFTs.length === 0 ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
            <Store className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-xl font-black text-slate-950">
            No NFTs are listed yet
          </h4>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Mint an NFT or list one from your collection to populate the marketplace.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <p className="text-sm text-slate-600">
              Showing {listedNFTs.length} escrow-backed listing
              {listedNFTs.length === 1 ? "" : "s"}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listedNFTs.map((listing) => (
              <MarketplaceCard
                key={listing.escrowAddress}
                listing={listing}
                isOwner={publicKey === listing.seller}
                onBuy={() => handleBuyNFT(listing)}
                onCancel={() => handleCancelListing(listing)}
                walletConnected={walletConnected}
                loading={loading}
                cancelingListing={cancelingListing}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
