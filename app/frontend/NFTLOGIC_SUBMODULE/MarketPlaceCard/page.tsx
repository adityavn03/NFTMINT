"use client";

import React from "react";
import { ImageIcon, Loader2, ShoppingCart, X } from "lucide-react";

interface MarketplaceCardProps {
  listing: {
    escrowAddress: string;
    mintAddress: string;
    seller: string;
    price: string | number;
    name: string;
    image?: string;
  };
  isOwner: boolean;
  onBuy: () => void;
  onCancel: () => void;
  walletConnected: boolean;
  loading: boolean;
  cancelingListing: string | null;
}

export default function MarketplaceCard({
  listing,
  isOwner,
  onBuy,
  onCancel,
  walletConnected,
  loading,
  cancelingListing,
}: MarketplaceCardProps) {
  const isCanceling = cancelingListing === listing.escrowAddress;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
  };

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
        {listing.image ? (
          <img
            src={listing.image}
            alt={listing.name}
            className="h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            <ImageIcon className="h-10 w-10" />
          </div>
        )}

        <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
          Listed
        </div>
        <div className="absolute bottom-3 right-3 rounded-md bg-slate-950 px-3 py-1.5 text-sm font-black text-white shadow-sm">
          {listing.price} SOL
        </div>
      </div>

      <div className="p-4">
        <h4 className="truncate text-base font-black text-slate-950">
          {listing.name || "Untitled NFT"}
        </h4>
        <p className="mt-1 truncate text-xs text-slate-500">
          Seller {listing.seller.slice(0, 4)}...{listing.seller.slice(-4)}
        </p>

        <div className="mt-4 rounded-lg bg-slate-50 p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Mint
          </p>
          <p className="mt-1 truncate font-mono text-xs text-slate-700">
            {listing.mintAddress}
          </p>
        </div>

        {!isOwner ? (
          <button
            onClick={onBuy}
            disabled={loading || !walletConnected}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ShoppingCart className="h-4 w-4" />
            )}
            {loading ? "Processing" : walletConnected ? "Buy now" : "Connect wallet"}
          </button>
        ) : (
          <button
            onClick={onCancel}
            disabled={isCanceling || !walletConnected}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 text-sm font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isCanceling ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <X className="h-4 w-4" />
            )}
            {isCanceling ? "Canceling" : "Cancel listing"}
          </button>
        )}
      </div>
    </article>
  );
}
