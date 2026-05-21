"use client";

import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Coins,
  GalleryVerticalEnd,
  LayoutDashboard,
  LockKeyhole,
  Palette,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import Customlogic from "../TokenSwap/page";
import NFTMarketplace from "../nft_logic/page";

type ActiveView = "dashboard" | "swap" | "nft";

const featureCards = [
  {
    id: "swap" as const,
    title: "Token Swap",
    eyebrow: "Escrow swaps",
    description:
      "Create peer-to-peer SPL token swaps with predictable settlement on Solana devnet.",
    icon: Coins,
    statOne: "Escrow",
    statTwo: "SPL ready",
  },
  {
    id: "nft" as const,
    title: "NFT Studio",
    eyebrow: "Mint and trade",
    description:
      "Mint metadata-backed NFTs, list them for sale, and manage your wallet collection.",
    icon: Palette,
    statOne: "IPFS",
    statTwo: "Marketplace",
  },
];

function WalletButton() {
  return (
    <WalletMultiButton className="!h-11 !rounded-lg !bg-slate-950 !px-4 !text-sm !font-semibold !text-white !shadow-none transition hover:!bg-slate-800" />
  );
}

function ShellHeader({
  activeView,
  onBack,
}: {
  activeView: ActiveView;
  onBack?: () => void;
}) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {activeView === "dashboard" ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white">
              <GalleryVerticalEnd className="h-5 w-5" />
            </div>
          ) : (
            <button
              onClick={onBack}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </button>
          )}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              NFTMINT
            </p>
            <h1 className="text-lg font-bold text-slate-950">
              Solana Creator Console
            </h1>
          </div>
        </div>

        <WalletButton />
      </div>
    </nav>
  );
}

export default function Main() {
  const wallet = useWallet();
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  if (activeView === "swap") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <ShellHeader activeView={activeView} onBack={() => setActiveView("dashboard")} />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Customlogic />
        </main>
      </div>
    );
  }

  if (activeView === "nft") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <ShellHeader activeView={activeView} onBack={() => setActiveView("dashboard")} />
        <NFTMarketplace />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <ShellHeader activeView={activeView} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Devnet connected
            </div>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Mint, list, and trade NFTs from one focused workspace.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              NFTMINT brings creator tooling and marketplace actions together:
              upload metadata, mint on Solana, list for SOL, and manage the NFTs in
              your wallet.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setActiveView("nft")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Open NFT Studio
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveView("swap")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Launch Token Swap
              </button>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Wallet status
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {wallet.publicKey ? "Ready to transact" : "Connect to begin"}
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                {wallet.publicKey ? (
                  <BadgeCheck className="h-6 w-6 text-emerald-300" />
                ) : (
                  <Wallet className="h-6 w-6 text-slate-300" />
                )}
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Active wallet</p>
              <p className="mt-2 break-all font-mono text-sm text-white">
                {wallet.publicKey
                  ? wallet.publicKey.toString()
                  : "No wallet connected yet"}
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-4">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                <span className="text-sm text-slate-200">Escrow-backed marketplace actions</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-4">
                <LockKeyhole className="h-5 w-5 text-sky-300" />
                <span className="text-sm text-slate-200">Wallet-gated collection management</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-4">
                <Sparkles className="h-5 w-5 text-violet-300" />
                <span className="text-sm text-slate-200">Metadata upload and mint flow</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <button
                key={feature.id}
                onClick={() => setActiveView(feature.id)}
                className="group rounded-lg border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-950" />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm font-bold text-slate-950">{feature.statOne}</p>
                    <p className="text-xs text-slate-500">Primary flow</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm font-bold text-slate-950">{feature.statTwo}</p>
                    <p className="text-xs text-slate-500">Supported</p>
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        {!wallet.publicKey && (
          <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="h-5 w-5" />
                <p className="text-sm font-semibold">
                  Connect Phantom or another Solana wallet to unlock minting, listing, and buying.
                </p>
              </div>
              <WalletButton />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
