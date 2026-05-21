"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  FileImage,
  ImagePlus,
  Loader2,
  Plus,
  Sparkles,
  Tag,
  UploadCloud,
} from "lucide-react";

interface MintTabProps {
  name: string;
  description: string;
  price: string;
  attributes: { trait_type: string; value: string }[];
  loading: boolean;
  status: string;
  error: string | null;
  mintedNFT: {
    mintAddress?: string;
    imageUri?: string;
    metadataUri?: string;
    escrow?: string;
  } | null;
  walletConnected: boolean;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: string) => void;
  setImageFile: (file: File | null) => void;
  updateAttribute: (
    index: number,
    field: "trait_type" | "value",
    value: string
  ) => void;
  addAttribute: () => void;
  handleMintAndList: () => Promise<void>;
}

export default function MintTab({
  name,
  description,
  price,
  attributes,
  loading,
  status,
  error,
  mintedNFT,
  walletConnected,
  setName,
  setDescription,
  setPrice,
  setImageFile,
  updateAttribute,
  addAttribute,
  handleMintAndList,
}: MintTabProps) {
  const [selectedImageName, setSelectedImageName] = useState("");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Creator flow
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Mint and list an NFT
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Add metadata, upload artwork to IPFS, mint on devnet, and list the
              asset in one transaction flow.
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <ImagePlus className="h-6 w-6" />
          </div>
        </div>

        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-800">NFT name</span>
            <input
              className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
              placeholder="Example: Neon Atlas #01"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-800">Description</span>
            <textarea
              className="min-h-32 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
              placeholder="Tell buyers what makes this NFT distinct."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <div className="grid gap-2">
            <span className="text-sm font-bold text-slate-800">Artwork</span>
            <label className="group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-slate-400 hover:bg-slate-100">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setImageFile(file);
                  setSelectedImageName(file?.name || "");
                }}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <UploadCloud className="mb-3 h-8 w-8 text-slate-500 transition group-hover:text-slate-950" />
              <p className="text-sm font-bold text-slate-800">
                {selectedImageName || "Upload PNG, JPG, GIF, or WEBP"}
              </p>
              <p className="mt-1 text-xs text-slate-500">Recommended square artwork for best cards.</p>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-800">Listing price</span>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="0"
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 pr-16 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-700">
                SOL
              </span>
            </div>
          </label>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-bold text-slate-800">
                  Attributes
                </span>
              </div>
              <button
                onClick={addAttribute}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <Plus className="h-3.5 w-3.5" />
                Add
              </button>
            </div>

            <div className="grid gap-3">
              {attributes.map((attr, index) => (
                <div key={index} className="grid gap-3 sm:grid-cols-2">
                  <input
                    className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                    placeholder="Trait, e.g. Background"
                    value={attr.trait_type}
                    onChange={(e) =>
                      updateAttribute(index, "trait_type", e.target.value)
                    }
                  />
                  <input
                    className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                    placeholder="Value, e.g. Midnight"
                    value={attr.value}
                    onChange={(e) =>
                      updateAttribute(index, "value", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleMintAndList}
            disabled={loading || !walletConnected}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Mint and list NFT
              </>
            )}
          </button>
        </div>
      </section>

      <aside className="grid content-start gap-4">
        {!walletConnected && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <div className="flex gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h4 className="font-bold">Wallet required</h4>
                <p className="mt-1 text-sm leading-6">
                  Connect a Solana wallet before minting or listing NFTs.
                </p>
              </div>
            </div>
          </div>
        )}

        {(loading || status) && (
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-5 text-sky-950">
            <div className="flex items-start gap-3">
              {loading ? (
                <Loader2 className="mt-0.5 h-5 w-5 shrink-0 animate-spin" />
              ) : (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              )}
              <div>
                <h4 className="font-bold">Transaction status</h4>
                <p className="mt-1 text-sm leading-6">
                  {status || "Waiting for wallet confirmation..."}
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-900">
            <div className="flex gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h4 className="font-bold">Transaction failed</h4>
                <p className="mt-1 text-sm leading-6">{error}</p>
              </div>
            </div>
          </div>
        )}

        {mintedNFT && (
          <div className="rounded-lg border border-emerald-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-950">NFT created</h4>
                <p className="text-sm text-slate-500">Minted and listed successfully.</p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Mint address
                </p>
                <p className="mt-1 break-all font-mono text-xs text-slate-700">
                  {mintedNFT.mintAddress}
                </p>
              </div>

              {mintedNFT.escrow && (
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Escrow address
                  </p>
                  <p className="mt-1 break-all font-mono text-xs text-slate-700">
                    {mintedNFT.escrow}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={mintedNFT.imageUri || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <FileImage className="h-4 w-4" />
                  Image
                </a>
                <a
                  href={mintedNFT.metadataUri || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Metadata
                </a>
              </div>
            </div>
          </div>
        )}

        {!loading && !status && !error && !mintedNFT && walletConnected && (
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-slate-950">Mint checklist</h4>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Use clear square artwork.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Add attributes buyers can scan quickly.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Set a realistic opening price in SOL.
              </p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
