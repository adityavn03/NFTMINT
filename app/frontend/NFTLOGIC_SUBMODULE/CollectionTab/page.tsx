"use client";

import React from "react";
import {
  ImageIcon,
  Loader2,
  Plus,
  RefreshCw,
  WalletCards,
  X,
} from "lucide-react";

type CollectionNFT = {
  id: string;
  content?: {
    metadata?: {
      symbol?: string;
    };
  };
  [key: string]: unknown;
};

type NFTMetadata = Record<string, unknown>;

interface CollectionTabProps {
  nfts: CollectionNFT[];
  loadingNfts: boolean;
  publicKey: string | undefined;
  listingNFT: string | null;
  listPrice: string;
  loading: boolean;
  setListingNFT: (nftId: string | null) => void;
  setListPrice: (price: string) => void;
  handleListNFT: (mintAddress: string, priceSOL: string) => Promise<void>;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  getNFTImage: (nft: CollectionNFT, fallbackMetadata?: NFTMetadata) => string | null;
  getNFTName: (nft: CollectionNFT, fallbackMetadata?: NFTMetadata) => string;
  nftMetadata?: Record<string, NFTMetadata>;
}

export default function CollectionTab({
  nfts,
  loadingNfts,
  publicKey,
  listingNFT,
  listPrice,
  loading,
  setListingNFT,
  setListPrice,
  handleListNFT,
  handleImageError,
  getNFTImage,
  getNFTName,
  nftMetadata = {},
}: CollectionTabProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Wallet collection
          </p>
          <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Manage owned NFTs
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Review NFTs in your connected wallet and list selected items on the
            marketplace.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          disabled={loadingNfts}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${loadingNfts ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Owned NFTs
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950">{nfts.length}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Wallet
          </p>
          <p className="mt-1 truncate font-mono text-sm font-bold text-slate-950">
            {publicKey ? `${publicKey.slice(0, 6)}...${publicKey.slice(-6)}` : "Not connected"}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Listing status
          </p>
          <p className="mt-1 text-2xl font-black text-slate-950">
            {listingNFT ? "Editing" : "Ready"}
          </p>
        </div>
      </div>

      {!publicKey ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
            <WalletCards className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-xl font-black text-slate-950">
            Connect a wallet
          </h4>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Your collection appears here after a wallet is connected.
          </p>
        </div>
      ) : loadingNfts ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
          <p className="mt-4 text-sm font-semibold text-slate-700">
            Loading collection
          </p>
        </div>
      ) : nfts.length === 0 ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
            <ImageIcon className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-xl font-black text-slate-950">
            No NFTs found
          </h4>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            NFTs held by this wallet will show up here. Listed NFTs may be held
            in escrow while they are on the marketplace.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nfts.map((nft) => {
            const fallbackMetadata = nftMetadata[nft.id];
            const imageUrl = getNFTImage(nft, fallbackMetadata);
            const nftName = getNFTName(nft, fallbackMetadata);
            const isListing = listingNFT === nft.id;

            return (
              <article
                key={nft.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="relative aspect-square bg-slate-100">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={nftName}
                      className="h-full w-full object-cover"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">
                      <ImageIcon className="h-10 w-10" />
                    </div>
                  )}
                  <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                    In wallet
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="truncate text-base font-black text-slate-950">
                    {nftName}
                  </h4>
                  {nft.content?.metadata?.symbol && (
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {nft.content.metadata.symbol}
                    </p>
                  )}

                  {isListing ? (
                    <div className="mt-4 grid gap-3">
                      <div className="relative">
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          value={listPrice}
                          onChange={(e) => setListPrice(e.target.value)}
                          placeholder="Price"
                          className="h-10 w-full rounded-lg border border-slate-300 px-3 pr-12 text-sm outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                          SOL
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleListNFT(nft.id, listPrice)}
                          disabled={loading || !listPrice}
                          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                        >
                          {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                          List
                        </button>
                        <button
                          onClick={() => setListingNFT(null)}
                          disabled={loading}
                          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                        >
                          <X className="h-4 w-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setListingNFT(nft.id);
                        setListPrice("1.0");
                      }}
                      className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                      <Plus className="h-4 w-4" />
                      List for sale
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
