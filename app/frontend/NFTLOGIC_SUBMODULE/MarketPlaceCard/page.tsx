"use client";

import React from "react";
import Image from "next/image";
import { Heart, ImageIcon, Loader2, ShoppingCart, X } from "lucide-react";

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
  isWatchlisted: boolean;
  onToggleWatchlist: () => void;
}

export default function MarketplaceCard({
  listing,
  isOwner,
  onBuy,
  onCancel,
  walletConnected,
  loading,
  cancelingListing,
  isWatchlisted,
  onToggleWatchlist,
}: MarketplaceCardProps) {
  const isCanceling = cancelingListing === listing.escrowAddress;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
  };

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/[0.05]">
      <div className="relative aspect-square bg-slate-950">
        {listing.image ? (
          <Image
            src={listing.image}
            alt={listing.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            unoptimized
            className="h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(217,70,239,0.38),transparent_24%),linear-gradient(135deg,#111827,#3b0764_55%,#020617)] text-fuchsia-100">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
            <ImageIcon className="relative h-12 w-12 drop-shadow-[0_0_24px_rgba(217,70,239,0.8)]" />
          </div>
        )}

        <div className="absolute left-3 top-3 rounded-full bg-violet-600/85 px-3 py-1 text-xs font-black text-white shadow-lg backdrop-blur">
          Listed
        </div>
        <button
          type="button"
          onClick={onToggleWatchlist}
          aria-pressed={isWatchlisted}
          aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          title={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border shadow-lg backdrop-blur transition ${
            isWatchlisted
              ? "border-rose-300/50 bg-rose-500/85 text-white"
              : "border-white/15 bg-black/45 text-white hover:bg-white/15"
          }`}
        >
          <Heart className={`h-4 w-4 ${isWatchlisted ? "fill-current" : ""}`} />
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
          <h4 className="truncate text-base font-black text-white">
            {listing.name || "Untitled NFT"}
          </h4>
          <p className="mt-1 text-xs text-slate-400">
            Seller {listing.seller.slice(0, 4)}...{listing.seller.slice(-4)}
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Floor
            </p>
            <p className="mt-1 text-lg font-black text-white">{listing.price} SOL</p>
          </div>
          <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <p className="truncate font-mono text-xs text-slate-400">
              {listing.mintAddress}
            </p>
          </div>
        </div>

        {!isOwner ? (
          <button
            onClick={onBuy}
            disabled={loading || !walletConnected}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-700 text-sm font-black text-white transition hover:from-violet-500 hover:to-fuchsia-600 disabled:cursor-not-allowed disabled:opacity-50"
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
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-red-400/30 bg-red-500/10 text-sm font-black text-red-200 transition hover:bg-red-500/15 disabled:cursor-not-allowed disabled:opacity-60"
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
