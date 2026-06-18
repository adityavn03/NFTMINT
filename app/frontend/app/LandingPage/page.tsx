"use client";

import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  CircleDollarSign,
  Coins,
  GalleryVerticalEnd,
  LockKeyhole,
  Menu,
  Repeat2,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import Customlogic from "../TokenSwap/page";
import NFTMarketplace from "../nft_logic/page";

type ActiveView = "dashboard" | "swap" | "nft" | "how" | "docs" | "stats";

const navItems = [
  { label: "Home", view: "dashboard" as const },
  { label: "Swap", view: "swap" as const },
  { label: "NFT Market", view: "nft" as const },
  { label: "How it Works", view: "how" as const },
  { label: "Docs", view: "docs" as const },
  { label: "Stats", view: "stats" as const },
];

const metrics = [
  { label: "Swaps Completed", value: "1.2M+", icon: Zap, color: "text-orange-300" },
  { label: "NFTs Minted", value: "45K+", icon: Boxes, color: "text-violet-300" },
  { label: "Active Users", value: "12K+", icon: Users, color: "text-fuchsia-300" },
];

const benefits = [
  {
    title: "Lightning Fast",
    description: "Built on Solana's high-speed infrastructure",
    icon: Zap,
  },
  {
    title: "Very Low Fees",
    description: "Minimal transaction costs for maximum savings",
    icon: LockKeyhole,
  },
  {
    title: "Secure by Design",
    description: "Audited smart contracts and escrow protection",
    icon: ShieldCheck,
  },
  {
    title: "Creator First",
    description: "Empowering creators with royalty and ownership flows",
    icon: Store,
  },
];

const workflowSteps = [
  {
    title: "Connect Wallet",
    description: "Use a Solana wallet on devnet to create tokens, fund escrows, mint NFTs, and buy listings.",
    icon: Wallet,
  },
  {
    title: "Create or Select Assets",
    description: "Launch a new SPL token with metadata, choose an existing wallet token, or mint an NFT for the market.",
    icon: Sparkles,
  },
  {
    title: "Lock Value in Escrow",
    description: "Makers initialize a trade and deposit tokens into a PDA-owned vault controlled by the program.",
    icon: LockKeyhole,
  },
  {
    title: "Join and Settle",
    description: "Takers choose a different SPL token, deposit their offer, and the maker executes or rejects the swap.",
    icon: Repeat2,
  },
];

const docSections = [
  {
    title: "Token Swap",
    points: [
      "Escrows are PDA accounts seeded by maker, maker mint, and escrow id.",
      "Makers deposit the offered SPL token before takers can join.",
      "Takers must offer a different SPL token mint.",
      "The maker reviews the offer, then executes or rejects it.",
    ],
  },
  {
    title: "Token Launchpad",
    points: [
      "Creates classic Tokenkeg SPL mints so the escrow program can transfer them.",
      "Uploads image and JSON metadata to Pinata/IPFS.",
      "Creates Metaplex metadata accounts for wallet-readable name, symbol, and image.",
      "Wallet-held SPL tokens can be selected without mint authority.",
    ],
  },
  {
    title: "NFT Market",
    points: [
      "Mint NFTs with metadata and image assets.",
      "List owned NFTs through the marketplace escrow program.",
      "Buy active listings with SOL on devnet.",
      "Cancel listings you created before sale.",
    ],
  },
];

const statCards = [
  { label: "Escrow Swaps", value: "32", detail: "active devnet escrows", icon: Repeat2 },
  { label: "Listed NFTs", value: "45K+", detail: "marketplace inventory", icon: Boxes },
  { label: "Volume", value: "1.2M+", detail: "simulated SOL volume", icon: CircleDollarSign },
  { label: "Users", value: "12K+", detail: "active traders", icon: Users },
];

function WalletButton() {
  return (
    <WalletMultiButton className="!h-11 !rounded-lg !bg-gradient-to-r !from-violet-500 !to-fuchsia-600 !px-5 !text-sm !font-bold !text-white !shadow-[0_12px_32px_rgba(147,51,234,0.35)] transition hover:!from-violet-400 hover:!to-fuchsia-500" />
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 text-sm font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]">
        SD
      </div>
      <span className="text-xl font-black tracking-tight text-white">Solana DApp</span>
    </div>
  );
}

function ShellHeader({
  activeView,
  onNavigate,
  onBack,
}: {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  onBack?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(88rem,calc(100%-2rem))] rounded-2xl border border-white/10 bg-[#08091a]/80 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <nav className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          {activeView === "dashboard" ? (
            <BrandMark />
          ) : (
            <>
              <button
                onClick={onBack}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-bold text-white transition hover:border-violet-300/50 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </button>
              <div className="hidden sm:block">
                <BrandMark />
              </div>
            </>
          )}
        </div>

        <div className="hidden items-center gap-8 text-sm font-bold lg:flex">
          {navItems.map((item) => {
            const isActive = item.view === activeView;

            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`transition hover:text-fuchsia-300 ${
                  isActive ? "text-fuchsia-300" : "text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:block">
          <WalletButton />
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
          <div className="grid gap-2 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.view);
                  setMenuOpen(false);
                }}
                className={`rounded-lg px-3 py-2 text-left text-sm font-bold ${
                  item.view === activeView
                    ? "bg-white/10 text-fuchsia-300"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <WalletButton />
        </div>
      )}
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[34rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(147,51,234,0.36),transparent_28%),radial-gradient(circle_at_56%_75%,rgba(217,70,239,0.28),transparent_24%),radial-gradient(circle_at_95%_40%,rgba(37,99,235,0.2),transparent_22%)]" />
      <div className="absolute right-4 top-4 h-72 w-72 rounded-full border border-violet-500/20 blur-sm" />
      <div className="absolute bottom-16 right-8 h-28 w-[26rem] max-w-[72vw] rounded-[50%] border border-fuchsia-300/40 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.65),inset_0_0_40px_rgba(168,85,247,0.45)]" />
      <div className="absolute bottom-20 right-16 h-12 w-[20rem] max-w-[58vw] rounded-[50%] border border-violet-300/50 bg-violet-500/20 blur-[1px]" />
      <div className="absolute bottom-24 right-28 h-8 w-[14rem] max-w-[42vw] rounded-[50%] bg-fuchsia-300/70 blur-xl" />

      <div className="absolute left-[20%] top-[16%] hidden h-16 w-16 rotate-12 rounded-2xl border border-violet-300/30 bg-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:block" />
      <div className="absolute right-[7%] top-[18%] h-12 w-12 rotate-45 rounded-lg border border-cyan-300/30 bg-indigo-500/30 shadow-[0_0_24px_rgba(99,102,241,0.45)]" />
      <div className="absolute right-[18%] top-[42%] h-7 w-7 rotate-12 rounded-md border border-violet-200/40 bg-fuchsia-500/30" />

      <div className="absolute right-[36%] top-[12%] hidden h-24 w-24 rounded-full border border-violet-300/30 bg-[#171044] shadow-[0_0_40px_rgba(147,51,234,0.45)] md:block">
        <Rocket className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-fuchsia-300" />
      </div>

      <div className="absolute right-[2%] top-[31%] hidden h-28 w-28 rounded-full border border-cyan-300/30 bg-[#171044] shadow-[0_0_46px_rgba(34,211,238,0.35)] sm:block">
        <div className="absolute inset-5 rotate-[-18deg] rounded-md bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500" />
        <div className="absolute inset-x-8 top-8 h-5 rotate-[-18deg] rounded bg-[#171044]" />
        <div className="absolute inset-x-8 bottom-8 h-5 rotate-[-18deg] rounded bg-[#171044]" />
      </div>

      <div className="absolute bottom-[8.3rem] right-[25%] h-64 w-40 -rotate-6 rounded-[1.5rem] border border-violet-200/50 bg-gradient-to-b from-violet-500/70 via-[#32106f]/90 to-[#160833] p-4 shadow-[0_35px_70px_rgba(0,0,0,0.5),0_0_44px_rgba(168,85,247,0.65)] sm:h-72 sm:w-48">
        <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/12 text-center">
          <Repeat2 className="mb-5 h-12 w-12 text-violet-200" />
          <p className="text-sm font-black uppercase tracking-wide text-white sm:text-base">
            Token Swap
          </p>
        </div>
      </div>

      <div className="absolute bottom-[8.6rem] right-[8%] h-56 w-36 rotate-7 rounded-[1.35rem] border border-violet-200/35 bg-gradient-to-b from-[#20135b]/95 via-[#160c3c]/95 to-[#090819] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.45),0_0_36px_rgba(99,102,241,0.45)] sm:h-64 sm:w-44">
        <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/15 text-center">
          <Boxes className="mb-5 h-11 w-11 text-violet-200" />
          <p className="text-sm font-black uppercase tracking-wide text-white">
            NFT Market
          </p>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onNavigate }: { onNavigate: (view: ActiveView) => void }) {
  const wallet = useWallet();

  return (
    <main className="relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10 sm:pt-12">
      <section className="relative grid min-h-[34rem] items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500" />
            Built on Solana
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Backing the Builders of the{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              New Open Internet
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Empowering decentralized trading with lightning-fast swaps and a
            seamless NFT marketplace, built for creators and traders.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate("swap")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-8 text-base font-black text-white shadow-[0_18px_45px_rgba(168,85,247,0.35)] transition hover:scale-[1.02] hover:from-violet-400 hover:to-fuchsia-500"
            >
              <Rocket className="h-5 w-5" />
              Launch App
            </button>
            <button
              onClick={() => onNavigate("nft")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-8 text-base font-black text-white transition hover:border-violet-300/50 hover:bg-white/10"
            >
              <Store className="h-5 w-5" />
              Explore Market
            </button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-5 sm:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="flex items-center gap-3 border-white/10 sm:border-r last:sm:border-r-0"
                >
                  <Icon className={`h-7 w-7 ${metric.color}`} />
                  <div>
                    <p className="text-2xl font-black text-white">{metric.value}</p>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <HeroArtwork />
      </section>

      <section className="relative z-10 mb-5 flex flex-col gap-4 rounded-2xl border border-violet-400/20 bg-white/[0.04] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-base font-bold text-violet-200">
          <ShieldCheck className="h-7 w-7 text-violet-300" />
          <span>Fast</span>
          <span className="text-violet-400">-</span>
          <span>Secure</span>
          <span className="text-violet-400">-</span>
          <span>Decentralized</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-4 py-2 text-sm text-slate-300">
          <LockKeyhole className="h-4 w-4 text-emerald-300" />
          Audited & Secure
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <button
          onClick={() => onNavigate("swap")}
          className="group grid min-h-56 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.07] md:grid-cols-[1fr_0.9fr]"
        >
          <div className="flex flex-col justify-between">
            <div className="flex gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/50 to-violet-950 text-violet-200">
                <Repeat2 className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-2xl font-black text-white">Token Swap</h2>
                <p className="mt-3 max-w-xs leading-6 text-slate-300">
                  Secure, escrow-based peer-to-peer SPL token swaps.
                </p>
              </div>
            </div>
            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-3 text-sm font-black text-white">
              Start Swapping
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>

          <div className="relative flex min-h-44 items-center justify-center">
            <div className="w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs text-slate-400">You Send</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl font-black text-white">10</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white">
                  <CircleDollarSign className="h-5 w-5 text-cyan-300" />
                  SOL
                </span>
              </div>
            </div>
            <div className="absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#211049] text-violet-200 shadow-[0_0_26px_rgba(168,85,247,0.5)]">
              <Repeat2 className="h-5 w-5" />
            </div>
            <div className="absolute bottom-0 w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs text-slate-400">You Receive</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl font-black text-white">245.75</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white">
                  <Coins className="h-5 w-5 text-blue-300" />
                  USDC
                </span>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate("nft")}
          className="group grid min-h-56 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.07] md:grid-cols-[1fr_0.86fr]"
        >
          <div className="flex flex-col justify-between">
            <div className="flex gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400/45 to-violet-950 text-pink-100">
                <GalleryVerticalEnd className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-2xl font-black text-white">NFT Market</h2>
                <p className="mt-3 max-w-xs leading-6 text-slate-300">
                  Mint, buy, and trade unique digital collectibles instantly.
                </p>
              </div>
            </div>
            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-3 text-sm font-black text-white">
              Explore NFTs
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>

          <div className="rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/25 to-fuchsia-950/30 p-4">
            <div className="relative mb-4 aspect-[1.35] overflow-hidden rounded-lg border border-white/10 bg-[#08091a]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(217,70,239,0.55),transparent_28%),radial-gradient(circle_at_50%_38%,rgba(34,211,238,0.36),transparent_24%),linear-gradient(135deg,rgba(88,28,135,0.9),rgba(2,6,23,0.95))]" />
              <Sparkles className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.9)]" />
            </div>
            <p className="text-xs font-black text-white">Cosmic Genesis #7321</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-black text-white">2.45 SOL</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/70 text-white">
                <ShoppingCart className="h-4 w-4" />
              </span>
            </div>
          </div>
        </button>
      </section>

      <section className="mt-7 grid gap-4 rounded-2xl border border-violet-400/20 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div key={benefit.title} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-black text-white">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-300">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      {!wallet.publicKey && (
        <section className="mt-7 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-amber-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Wallet className="h-5 w-5" />
              <p className="text-sm font-bold">
                Connect Phantom or another Solana wallet to unlock minting,
                listing, buying, and swapping.
              </p>
            </div>
            <WalletButton />
          </div>
        </section>
      )}
    </main>
  );
}

function HowItWorksView({ onNavigate }: { onNavigate: (view: ActiveView) => void }) {
  return (
    <main className="relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10">
      <section className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300">
            How It Works
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
            One wallet, two asset flows, escrow settlement.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The app combines SPL token escrow swaps and NFT marketplace actions behind one wallet-first interface.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => onNavigate("swap")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 text-sm font-black text-white"
            >
              <Repeat2 className="h-4 w-4" />
              Start Swap
            </button>
            <button
              onClick={() => onNavigate("nft")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 text-sm font-black text-white transition hover:border-violet-300/50"
            >
              <Store className="h-4 w-4" />
              Open Market
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="grid gap-4 rounded-xl border border-white/10 bg-[#090b1f]/75 p-5 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-black text-violet-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">{step.title}</h2>
                  <p className="mt-2 leading-7 text-slate-300">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          ["Maker", "Creates escrow terms and deposits their SPL token."],
          ["Taker", "Chooses a different SPL token and deposits an offer."],
          ["Program", "Transfers both vault balances atomically when maker executes."],
        ].map(([title, description]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <h3 className="text-lg font-black text-white">{title}</h3>
            <p className="mt-3 leading-6 text-slate-300">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

function DocsView({ onNavigate }: { onNavigate: (view: ActiveView) => void }) {
  return (
    <main className="relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10">
      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300">
          Docs
        </p>
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
              Build notes for the token swap and NFT market.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A compact reference for the current devnet implementation, the IDL-driven frontend, and the asset flows.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <button
                onClick={() => onNavigate("swap")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 text-sm font-black text-white"
              >
                <Repeat2 className="h-4 w-4" />
                Swap UI
              </button>
              <button
                onClick={() => onNavigate("nft")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-black text-white"
              >
                <GalleryVerticalEnd className="h-4 w-4" />
                NFT Market
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {docSections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-white/10 bg-[#090b1f]/75 p-5"
              >
                <h2 className="text-xl font-black text-white">{section.title}</h2>
                <div className="mt-4 grid gap-3">
                  {section.points.map((point) => (
                    <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function StatsView({ onNavigate }: { onNavigate: (view: ActiveView) => void }) {
  return (
    <main className="relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10">
      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300">
              Stats
            </p>
            <h1 className="text-4xl font-black text-white sm:text-6xl">
              Protocol activity snapshot.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Track the main surfaces of the app: escrow swaps, NFT listings, wallet activity, and marketplace volume.
            </p>
          </div>
          <button
            onClick={() => onNavigate("swap")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 text-sm font-black text-white"
          >
            <Zap className="h-4 w-4" />
            Open Swap
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-[#090b1f]/75 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-sm font-bold text-slate-400">{stat.label}</p>
                <p className="mt-2 text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-white/10 bg-[#090b1f]/75 p-5">
            <h2 className="text-xl font-black text-white">Weekly Flow</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["Swaps", "86%"],
                ["NFT Listings", "64%"],
                ["Mints", "52%"],
                ["Wallet Actions", "78%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-300">{label}</span>
                    <span className="text-violet-200">{value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#090b1f]/75 p-5">
            <h2 className="text-xl font-black text-white">Network Health</h2>
            <div className="mt-5 grid gap-4">
              {[
                ["Cluster", "Solana devnet"],
                ["Swap Program", "IDL connected"],
                ["NFT Program", "Marketplace active"],
                ["Metadata", "Pinata + Metaplex"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-sm font-black text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Main() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  if (activeView === "swap") {
    return (
      <div className="min-h-screen bg-[#020412] text-white">
        <ShellHeader
          activeView={activeView}
          onNavigate={setActiveView}
          onBack={() => setActiveView("dashboard")}
        />
        <main className="mx-auto w-[min(88rem,calc(100%-2rem))] py-8">
          <Customlogic />
        </main>
      </div>
    );
  }

  if (activeView === "nft") {
    return (
      <div className="min-h-screen bg-[#020412] text-white">
        <ShellHeader
          activeView={activeView}
          onNavigate={setActiveView}
          onBack={() => setActiveView("dashboard")}
        />
        <NFTMarketplace />
      </div>
    );
  }

  const renderView = () => {
    if (activeView === "how") {
      return <HowItWorksView onNavigate={setActiveView} />;
    }

    if (activeView === "docs") {
      return <DocsView onNavigate={setActiveView} />;
    }

    if (activeView === "stats") {
      return <StatsView onNavigate={setActiveView} />;
    }

    return <Dashboard onNavigate={setActiveView} />;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020412] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(88,28,135,0.42),transparent_34%),radial-gradient(circle_at_30%_78%,rgba(37,99,235,0.18),transparent_28%),linear-gradient(180deg,#020412_0%,#050619_44%,#020412_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative">
        <ShellHeader
          activeView={activeView}
          onNavigate={setActiveView}
          onBack={() => setActiveView("dashboard")}
        />
        {renderView()}
      </div>
    </div>
  );
}
