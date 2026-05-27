"use client";

import React from "react";
import {
  Activity,
  BadgePlus,
  Boxes,
  Compass,
  Flame,
  Gem,
  Heart,
  ImagePlus,
  ListPlus,
  PlusCircle,
  Star,
  TrendingUp,
  WalletCards,
} from "lucide-react";

interface HeaderProps {
  activeTab: "mint" | "collection" | "marketplace";
  setActiveTab: (tab: "mint" | "collection" | "marketplace") => void;
  activeMarketView: "explore" | "trending" | "top" | "new";
  setActiveMarketView: (view: "explore" | "trending" | "top" | "new") => void;
  showWatchlistOnly: boolean;
  setShowWatchlistOnly: (value: boolean) => void;
  listedNFTsCount: number;
  nftsCount: number;
}

type MarketView = "explore" | "trending" | "top" | "new";
type TabName = "mint" | "collection" | "marketplace";
type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tab?: TabName;
  marketView?: MarketView;
  watchlist?: boolean;
};
type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: "Marketplace",
    items: [
      { label: "Explore", icon: Compass, tab: "marketplace" as const, marketView: "explore" as const },
      { label: "Trending", icon: Flame, tab: "marketplace" as const, marketView: "trending" as const },
      { label: "Top", icon: Star, tab: "marketplace" as const, marketView: "top" as const },
      { label: "New", icon: PlusCircle, tab: "marketplace" as const, marketView: "new" as const },
    ],
  },
  {
    title: "Collections",
    items: [
      { label: "All Collections", icon: Boxes, tab: "marketplace" as const, marketView: "explore" as const },
      { label: "My Collections", icon: WalletCards, tab: "collection" as const },
      { label: "Create Collection", icon: BadgePlus, tab: "mint" as const },
    ],
  },
  {
    title: "Create",
    items: [
      { label: "Mint NFT", icon: ImagePlus, tab: "mint" as const },
      { label: "List NFT", icon: ListPlus, tab: "collection" as const },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "My NFTs", icon: Gem, tab: "collection" as const },
      { label: "Activity", icon: Activity },
      { label: "Watchlist", icon: Heart, tab: "marketplace" as const, watchlist: true },
    ],
  },
];

export default function Header({
  activeTab,
  setActiveTab,
  activeMarketView,
  setActiveMarketView,
  showWatchlistOnly,
  setShowWatchlistOnly,
  listedNFTsCount,
  nftsCount,
}: HeaderProps) {
  const scrollToMarketplaceListings = () => {
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        document
          .getElementById("marketplace-listings")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    });
  };

  return (
    <aside className="space-y-7 xl:sticky xl:top-28">
      {navGroups.map((group) => (
        <section key={group.title}>
          <p className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {group.title}
          </p>
          <div className="grid gap-2">
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = item.watchlist
                ? activeTab === "marketplace" && showWatchlistOnly
                : item.marketView
                ? activeTab === "marketplace" && activeMarketView === item.marketView
                : item.tab === activeTab;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.watchlist) {
                      setActiveTab("marketplace");
                      setActiveMarketView("explore");
                      setShowWatchlistOnly(true);
                      scrollToMarketplaceListings();
                      return;
                    }

                    if (item.marketView) {
                      setActiveTab("marketplace");
                      setActiveMarketView(item.marketView);
                      setShowWatchlistOnly(false);
                      scrollToMarketplaceListings();
                      return;
                    }

                    if (item.tab) setActiveTab(item.tab);
                  }}
                  className={`flex h-10 items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white shadow-[0_14px_34px_rgba(126,34,206,0.32)]"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md border ${
                      isActive
                        ? "border-white/20 bg-white/10"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-black text-white">Live Floor Tracker</h3>
          <TrendingUp className="h-4 w-4 text-emerald-300" />
        </div>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold text-white">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600" />
              $157.23
            </span>
            <span className="text-emerald-300">+2.45%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold text-white">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-700" />
              {listedNFTsCount} listed
            </span>
            <span className="text-slate-400">Live</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold text-white">
              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-orange-300 to-amber-700" />
              {nftsCount} owned
            </span>
            <span className="text-emerald-300">Wallet</span>
          </div>
        </div>
        <button
          onClick={() => setActiveTab("marketplace")}
          className="mt-5 w-full text-right text-sm font-bold text-fuchsia-300"
        >
          View All
        </button>
      </section>
    </aside>
  );
}
