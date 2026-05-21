"use client";

import React from "react";
import { GalleryVerticalEnd, ImagePlus, Store, WalletCards } from "lucide-react";

interface HeaderProps {
  activeTab: "mint" | "collection" | "marketplace";
  setActiveTab: (tab: "mint" | "collection" | "marketplace") => void;
  listedNFTsCount: number;
  nftsCount: number;
}

const tabs = [
  {
    id: "mint" as const,
    label: "Mint",
    description: "Create and list",
    icon: ImagePlus,
  },
  {
    id: "marketplace" as const,
    label: "Market",
    description: "Browse listings",
    icon: Store,
  },
  {
    id: "collection" as const,
    label: "Collection",
    description: "Manage wallet",
    icon: WalletCards,
  },
];

export default function Header({
  activeTab,
  setActiveTab,
  listedNFTsCount,
  nftsCount,
}: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="mb-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
            <GalleryVerticalEnd className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              NFT Studio
            </p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              Mint, market, and manage
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:flex">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Listings
            </p>
            <p className="text-xl font-black text-slate-950">{listedNFTsCount}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Owned
            </p>
            <p className="text-xl font-black text-slate-950">{nftsCount}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition ${
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  isActive ? "bg-white/10" : "bg-slate-100"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">{tab.label}</span>
                <span
                  className={`block text-xs ${
                    isActive ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {tab.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
