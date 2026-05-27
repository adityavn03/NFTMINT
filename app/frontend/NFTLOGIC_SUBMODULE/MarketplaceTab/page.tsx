"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  Gamepad2,
  Gem,
  Heart,
  Loader2,
  Music,
  Palette,
  Radio,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Store,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { mintDropNFT } from "@/app/logic/mintDropNft";
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
  wallet: WalletContextState;
  pinataJwt: string;
  marketView: "explore" | "trending" | "top" | "new";
  showWatchlistOnly: boolean;
  setShowWatchlistOnly: (value: boolean | ((current: boolean) => boolean)) => void;
  loading: boolean;
  cancelingListing: string | null;
}

type AnalyticsCollection = {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  floorPrice: number;
  itemCount: number;
  verified: boolean;
  isFeatured: boolean;
  metricLabel?: string;
  metricValue?: string;
};

type AnalyticsCollectionSection = {
  id: string;
  title: string;
  description: string;
  collections: AnalyticsCollection[];
};

type AnalyticsDrop = {
  id: string;
  name: string;
  creator: string;
  imageUrl: string;
  floorPrice: number;
  itemCount: number;
  status: string;
  endsAt: string | null;
  collection: AnalyticsCollection | null;
};

type AnalyticsSeller = {
  rank: number;
  sellerAddress: string;
  displayName: string;
  avatarUrl: string;
  verified: boolean;
  totalVolume: number;
  salesCount: number;
};

type AnalyticsSale = {
  id: string;
  mintAddress: string;
  nftName: string;
  imageUrl: string;
  price: number;
  sellerAddress: string;
  buyerAddress: string;
  sellerName: string;
  sellerAvatarUrl: string;
  sellerVerified: boolean;
  soldAt: string | null;
};

type MarketplaceAnalytics = {
  featuredCollections: AnalyticsCollection[];
  collectionSections: AnalyticsCollectionSection[];
  topDrops: AnalyticsDrop[];
  topSellers: AnalyticsSeller[];
  recentSales: AnalyticsSale[];
};

type DropStatus = "live" | "upcoming" | "sold-out" | "ended";

type DropTemplate = {
  name: string;
  creator: string;
  imageUrl?: string;
  accent?: string;
  mintPrice: number;
  hypeLabel: string;
};

type DynamicDrop = DropTemplate & {
  id: string;
  slug: string;
  description?: string;
  hypeLabel?: string;
  totalSupply: number;
  mintedCount: number;
  blockchain: string;
  symbol?: string;
  metadataUri?: string;
  attributes?: unknown[];
  status: string;
  startsAt: number;
  endsAt: number;
};

const emptyAnalytics: MarketplaceAnalytics = {
  featuredCollections: [],
  collectionSections: [],
  topDrops: [],
  topSellers: [],
  recentSales: [],
};

const artPalettes = [
  "from-orange-300 via-amber-500 to-violet-950",
  "from-lime-100 via-slate-300 to-violet-950",
  "from-cyan-200 via-fuchsia-300 to-slate-950",
  "from-red-500 via-rose-600 to-black",
  "from-violet-900 via-purple-600 to-amber-400",
  "from-indigo-950 via-violet-700 to-cyan-400",
  "from-slate-950 via-red-950 to-pink-500",
  "from-emerald-950 via-teal-800 to-slate-900",
];

const categories = [
  { label: "Trending", icon: Flame, active: true },
  { label: "Top", icon: Trophy },
  { label: "New", icon: BadgeCheck },
  { label: "Art", icon: Palette },
  { label: "PFPs", icon: Sparkles },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Collectibles", icon: Gem },
  { label: "Music", icon: Music },
  { label: "Photography", icon: Camera },
  { label: "Utility", icon: Shield },
];

const WATCHLIST_STORAGE_NAMESPACE = "nft-market-watchlist";
const WATCHLIST_UPDATED_EVENT = "nft-market-watchlist-updated";
const EMPTY_WATCHLIST_SNAPSHOT = "[]";

function getListingKey(listing: MarketplaceListing) {
  return listing.escrowAddress || listing.mintAddress;
}

function getWatchlistStorageKey(publicKey?: string) {
  return `${WATCHLIST_STORAGE_NAMESPACE}:${publicKey || "guest"}`;
}

function getWatchlistSnapshot(storageKey: string) {
  if (typeof window === "undefined") return EMPTY_WATCHLIST_SNAPSHOT;
  return window.localStorage.getItem(storageKey) || EMPTY_WATCHLIST_SNAPSHOT;
}

function parseWatchlistSnapshot(snapshot: string) {
  try {
    const parsed = JSON.parse(snapshot);
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];
  } catch (error) {
    console.error("Watchlist parse error:", error);
    return [];
  }
}

function subscribeToWatchlistUpdates(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(WATCHLIST_UPDATED_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(WATCHLIST_UPDATED_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function MiniArt({
  accent,
  label,
  className = "h-full w-full",
}: {
  accent: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${accent} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.42),transparent_16%),radial-gradient(circle_at_28%_78%,rgba(217,70,239,0.4),transparent_22%),linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.65))]" />
      <div className="absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-[clamp(0.6rem,1.5vw,1.25rem)] font-black text-white shadow-[0_0_40px_rgba(255,255,255,0.22)] backdrop-blur-sm">
        {label}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
    </div>
  );
}

function ArtTile({
  imageUrl,
  accent,
  label,
  className,
}: {
  imageUrl?: string;
  accent: string;
  label: string;
  className?: string;
}) {
  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-slate-950 ${className || "h-full w-full"}`}>
        <Image
          src={imageUrl}
          alt={label}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
    );
  }

  return <MiniArt accent={accent} label={label} className={className} />;
}

function useMarketplaceAnalytics(refreshKey = 0) {
  const [analytics, setAnalytics] = useState<MarketplaceAnalytics>(emptyAnalytics);
  const [loadingAnalytics, setLoadingAnalytics] = useState(true);
  const [manualRefresh, setManualRefresh] = useState(0);

  useEffect(() => {
    const refresh = () => setManualRefresh((value) => value + 1);
    window.addEventListener("marketplace-analytics-updated", refresh);

    return () => {
      window.removeEventListener("marketplace-analytics-updated", refresh);
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadAnalytics() {
      try {
        setLoadingAnalytics(true);
        const response = await fetch("/api/marketplace/analytics", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load marketplace analytics");
        }

        const data = (await response.json()) as MarketplaceAnalytics;
        if (active) {
          setAnalytics({
            featuredCollections: data.featuredCollections || [],
            collectionSections: data.collectionSections || [],
            topDrops: data.topDrops || [],
            topSellers: data.topSellers || [],
            recentSales: data.recentSales || [],
          });
        }
      } catch (error) {
        console.error("Marketplace analytics fetch error:", error);
        if (active) {
          setAnalytics(emptyAnalytics);
        }
      } finally {
        if (active) {
          setLoadingAnalytics(false);
        }
      }
    }

    loadAnalytics();

    return () => {
      active = false;
    };
  }, [refreshKey, manualRefresh]);

  return { analytics, loadingAnalytics };
}

function formatSol(value: number) {
  return `${value.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: value > 0 && value < 1 ? 2 : 0,
  })} SOL`;
}

function getListingPrice(listing: MarketplaceListing) {
  const price = Number(listing.price || 0);
  return Number.isFinite(price) ? price : 0;
}

function getMarketViewLabel(view: "explore" | "trending" | "top" | "new") {
  if (view === "trending") return "Trending";
  if (view === "top") return "Top";
  if (view === "new") return "New";
  return "Explore";
}

function getMarketViewDescription(view: "explore" | "trending" | "top" | "new") {
  if (view === "trending") {
    return "Ranked by recent sales count, sales volume, and matching live listing value.";
  }
  if (view === "top") {
    return "Highest-value live listings first, calculated from current listing prices.";
  }
  if (view === "new") {
    return "Newest listings first, based on the latest marketplace fetch order.";
  }
  return "All live marketplace listings.";
}

function shortAddress(address: string) {
  if (!address) return "Unknown";
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function timeAgo(value: string | null) {
  if (!value) return "just now";
  const diffMs = Date.now() - new Date(value).getTime();
  const minutes = Math.max(0, Math.floor(diffMs / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function formatDropCountdown(drop: DynamicDrop, now: number, status: DropStatus) {
  if (status === "sold-out") return "SOLD OUT";
  if (status === "ended") return "Refreshing";

  const targetAt = status === "upcoming" ? drop.startsAt : drop.endsAt;
  const diffMs = Math.max(0, targetAt - now);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  }

  return [hours, minutes, seconds]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}

function getDropStatusLabel(status: DropStatus) {
  if (status === "sold-out") return "Sold Out";
  if (status === "upcoming") return "Upcoming";
  if (status === "ended") return "Ended";
  return "Live";
}

function getDropStatusClass(status: DropStatus) {
  if (status === "sold-out") return "border-white/15 bg-white/10 text-slate-200";
  if (status === "upcoming") return "border-sky-300/30 bg-sky-400/10 text-sky-200";
  if (status === "ended") return "border-amber-300/40 bg-amber-400/15 text-amber-100";
  return "border-emerald-300/35 bg-emerald-400/15 text-emerald-100";
}

function getDropActionLabel(status: DropStatus) {
  if (status === "sold-out") return "Sold Out";
  if (status === "upcoming") return "Mint Soon";
  if (status === "ended") return "Ended";
  return "Mint Now";
}

function getDropCountdownPrefix(status: DropStatus) {
  if (status === "upcoming") return "Starts in";
  if (status === "sold-out") return "";
  if (status === "ended") return "Next drop";
  return "Ends in";
}

function getDynamicDropStatus(drop: DynamicDrop, now: number): DropStatus {
  if (drop.mintedCount >= drop.totalSupply) return "sold-out";
  if (drop.status === "ENDED") return "ended";
  if (now < drop.startsAt) return "upcoming";
  if (now >= drop.endsAt) return "ended";
  if (drop.status === "UPCOMING") return "upcoming";
  return "live";
}

function normalizeApiDrop(drop: Partial<DynamicDrop>, index: number): DynamicDrop {
  const startsAt =
    typeof drop.startsAt === "number"
      ? drop.startsAt
      : drop.startsAt
        ? new Date(drop.startsAt).getTime()
        : Date.now();
  const endsAt =
    typeof drop.endsAt === "number"
      ? drop.endsAt
      : drop.endsAt
        ? new Date(drop.endsAt).getTime()
        : Date.now();

  return {
    id: drop.id || `drop-${index}`,
    slug: drop.slug || `drop-${index}`,
    name: drop.name || "Unnamed Drop",
    creator: drop.creator || "Unknown Creator",
    description: drop.description || "",
    imageUrl: drop.imageUrl || "",
    accent: drop.accent || artPalettes[(index + 5) % artPalettes.length],
    hypeLabel: drop.hypeLabel || "Limited supply mint",
    mintPrice: Number(drop.mintPrice || 0),
    totalSupply: Number(drop.totalSupply || 100),
    mintedCount: Number(drop.mintedCount || 0),
    blockchain: drop.blockchain || "Solana",
    symbol: drop.symbol || "NNFT",
    metadataUri: drop.metadataUri || "",
    attributes: Array.isArray(drop.attributes) ? drop.attributes : [],
    status: drop.status || "UPCOMING",
    startsAt,
    endsAt,
  };
}

function EmptyState({
  loadingMarketplace,
  listedNFTs,
  showWatchlistOnly,
  watchlistedCount = 0,
}: {
  loadingMarketplace: boolean;
  listedNFTs: MarketplaceListing[];
  showWatchlistOnly?: boolean;
  watchlistedCount?: number;
}) {
  if (loadingMarketplace) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] text-center">
        <Loader2 className="h-8 w-8 animate-spin text-fuchsia-300" />
        <p className="mt-4 text-sm font-semibold text-slate-300">
          Loading marketplace listings
        </p>
      </div>
    );
  }

  if (listedNFTs.length > 0) return null;

  if (showWatchlistOnly) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-400/10 text-rose-200">
          <Heart className="h-6 w-6" />
        </div>
        <h4 className="mt-4 text-xl font-black text-white">
          {watchlistedCount > 0 ? "No watched listings are live" : "Your watchlist is empty"}
        </h4>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
          {watchlistedCount > 0
            ? "Watched NFTs stay saved, and they will reappear here when matching listings are live."
            : "Tap the heart on any live listing to track it here for this wallet."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-fuchsia-200">
        <Store className="h-6 w-6" />
      </div>
      <h4 className="mt-4 text-xl font-black text-white">No live listings yet</h4>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
        Mint an NFT or list one from your collection to populate the live
        escrow-backed marketplace.
      </p>
    </div>
  );
}

export default function MarketplaceTab({
  listedNFTs,
  loadingMarketplace,
  loadMarketplace,
  handleBuyNFT,
  handleCancelListing,
  publicKey,
  walletConnected,
  wallet,
  pinataJwt,
  marketView,
  showWatchlistOnly,
  setShowWatchlistOnly,
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
      : 2.45;
  const { analytics, loadingAnalytics } = useMarketplaceAnalytics(listedNFTs.length);
  const collectionSections = useMemo(
    () => analytics.collectionSections,
    [analytics.collectionSections]
  );
  const [now, setNow] = useState(() => Date.now());
  const [dynamicDrops, setDynamicDrops] = useState<DynamicDrop[]>([]);
  const [loadingDrops, setLoadingDrops] = useState(true);
  const [mintingDropId, setMintingDropId] = useState<string | null>(null);
  const [dropMintError, setDropMintError] = useState<string | null>(null);
  const watchlistStorageKey = useMemo(
    () => getWatchlistStorageKey(publicKey),
    [publicKey]
  );
  const watchlistSnapshot = useSyncExternalStore(
    subscribeToWatchlistUpdates,
    () => getWatchlistSnapshot(watchlistStorageKey),
    () => EMPTY_WATCHLIST_SNAPSHOT
  );
  const watchlistedIds = useMemo(
    () => parseWatchlistSnapshot(watchlistSnapshot),
    [watchlistSnapshot]
  );
  const watchlistedSet = useMemo(
    () => new Set(watchlistedIds),
    [watchlistedIds]
  );
  const recentSalesByMint = useMemo(() => {
    const salesMap = new Map<string, { count: number; volume: number; latestSaleAt: number }>();

    analytics.recentSales.forEach((sale) => {
      const existing = salesMap.get(sale.mintAddress) || {
        count: 0,
        volume: 0,
        latestSaleAt: 0,
      };
      const soldAt = sale.soldAt ? new Date(sale.soldAt).getTime() : 0;

      existing.count += 1;
      existing.volume += sale.price;
      existing.latestSaleAt = Math.max(existing.latestSaleAt, soldAt);
      salesMap.set(sale.mintAddress, existing);
    });

    return salesMap;
  }, [analytics.recentSales]);
  const marketListings = useMemo(() => {
    const indexedListings = listedNFTs.map((listing, index) => ({ listing, index }));

    if (marketView === "top") {
      return indexedListings
        .sort((a, b) => getListingPrice(b.listing) - getListingPrice(a.listing))
        .map(({ listing }) => listing);
    }

    if (marketView === "new") {
      return indexedListings
        .sort((a, b) => b.index - a.index)
        .map(({ listing }) => listing);
    }

    if (marketView === "trending") {
      return indexedListings
        .sort((a, b) => {
          const aSales = recentSalesByMint.get(a.listing.mintAddress);
          const bSales = recentSalesByMint.get(b.listing.mintAddress);
          const aScore =
            (aSales?.count || 0) * 10 +
            (aSales?.volume || 0) +
            getListingPrice(a.listing) * 0.25 +
            (aSales?.latestSaleAt || 0) / 1_000_000_000_000;
          const bScore =
            (bSales?.count || 0) * 10 +
            (bSales?.volume || 0) +
            getListingPrice(b.listing) * 0.25 +
            (bSales?.latestSaleAt || 0) / 1_000_000_000_000;

          return bScore - aScore;
        })
        .map(({ listing }) => listing);
    }

    return listedNFTs;
  }, [listedNFTs, marketView, recentSalesByMint]);
  const visibleListings = useMemo(
    () =>
      showWatchlistOnly
        ? marketListings.filter((listing) => watchlistedSet.has(getListingKey(listing)))
        : marketListings,
    [marketListings, showWatchlistOnly, watchlistedSet]
  );

  const loadDynamicDrops = async () => {
    try {
      setLoadingDrops(true);
      const response = await fetch("/api/nft-drops", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Failed to load NFT drops");
      }

      const data = (await response.json()) as { drops?: Partial<DynamicDrop>[] };
      setDynamicDrops((data.drops || []).map(normalizeApiDrop));
    } catch (error) {
      console.error("NFT drops load error:", error);
      setDropMintError("Could not load NFT drops from the database.");
    } finally {
      setLoadingDrops(false);
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const nextNow = Date.now();
      setNow(nextNow);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    loadDynamicDrops();
  }, []);

  useEffect(() => {
    if (dynamicDrops.some((drop) => getDynamicDropStatus(drop, now) === "ended")) {
      loadDynamicDrops();
    }
  }, [now, dynamicDrops]);

  const toggleWatchlist = (listing: MarketplaceListing) => {
    const listingKey = getListingKey(listing);
    const next = watchlistedSet.has(listingKey)
      ? watchlistedIds.filter((id) => id !== listingKey)
      : [...watchlistedIds, listingKey];

    try {
      window.localStorage.setItem(watchlistStorageKey, JSON.stringify(next));
      window.dispatchEvent(new Event(WATCHLIST_UPDATED_EVENT));
    } catch (error) {
      console.error("Watchlist save error:", error);
    }

  };

  const handleMintDrop = (dropId: string) => {
    void mintDrop(dropId);
  };

  const mintDrop = async (dropId: string) => {
    const drop = dynamicDrops.find((item) => item.id === dropId);

    if (!drop || !wallet?.publicKey) {
      setDropMintError("Connect your wallet before minting a drop.");
      return;
    }

    setMintingDropId(dropId);
    setDropMintError(null);

    let mintRecordId: string | undefined;

    try {
      const reserveResponse = await fetch(`/api/nft-drops/${dropId}/mint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress: wallet.publicKey.toString() }),
      });

      const reserveData = await reserveResponse.json();
      if (!reserveResponse.ok) {
        throw new Error(reserveData.error || "Could not reserve drop supply");
      }

      mintRecordId = reserveData.mintRecord?.id;
      const reservedDrop = normalizeApiDrop(reserveData.drop, 0);
      setDynamicDrops((current) =>
        current.map((item) => (item.id === dropId ? reservedDrop : item))
      );

      const mintResult = await mintDropNFT({
        wallet,
        drop,
        mintNumber: reserveData.mintNumber,
        pinataJwt,
      });

      if (!mintResult.success) {
        throw new Error(mintResult.error || "Drop mint failed");
      }

      await fetch(`/api/nft-drops/${dropId}/mint`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mintRecordId,
          mintAddress: mintResult.mintAddress,
          metadataUri: mintResult.metadataUri,
        }),
      });

      await loadDynamicDrops();
    } catch (error: unknown) {
      console.error("Drop mint error:", error);
      setDropMintError(error instanceof Error ? error.message : "Drop mint failed");

      if (mintRecordId) {
        await fetch(`/api/nft-drops/${dropId}/mint`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mintRecordId, failed: true }),
        }).catch((rollbackError) => {
          console.error("Drop mint rollback error:", rollbackError);
        });
        await loadDynamicDrops();
      }
    } finally {
      setMintingDropId(null);
    }
  };

  return (
    <section className="space-y-5">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(217,70,239,0.42),transparent_28%),radial-gradient(circle_at_52%_70%,rgba(139,92,246,0.32),transparent_22%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.52))]" />
        <div className="absolute bottom-0 right-24 hidden h-60 w-[34rem] rounded-[50%] border border-fuchsia-300/25 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.45)] lg:block" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.78fr_0.28fr]">
          <div className="flex min-h-60 flex-col justify-center">
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white lg:text-5xl">
              Discover, Collect, and Trade{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Extraordinary NFTs
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-300">
              The best NFT marketplace on Solana
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={loadMarketplace}
                disabled={loadingMarketplace}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-700 px-7 text-sm font-black text-white transition hover:from-violet-500 hover:to-fuchsia-600 disabled:opacity-60"
              >
                <RefreshCw className={`h-4 w-4 ${loadingMarketplace ? "animate-spin" : ""}`} />
                Explore NFTs
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-black/20 px-7 text-sm font-black text-white transition hover:bg-white/10">
                Create NFT
              </button>
            </div>
          </div>

          <div className="relative hidden min-h-60 lg:block">
            <div className="absolute left-0 top-10 h-40 w-28 -rotate-[-18deg] rounded-2xl border border-cyan-300/35 bg-gradient-to-br from-cyan-500/70 to-violet-950 p-3 shadow-[0_20px_50px_rgba(34,211,238,0.2)]">
              <MiniArt accent="from-cyan-300 to-violet-900" label="SOL" />
            </div>
            <div className="absolute left-32 top-0 h-48 w-32 rotate-6 rounded-2xl border border-fuchsia-300/35 bg-gradient-to-br from-violet-500/80 to-black p-3 shadow-[0_20px_55px_rgba(217,70,239,0.28)]">
              <MiniArt accent="from-violet-900 via-fuchsia-600 to-cyan-300" label="NFT" />
            </div>
            <div className="absolute right-0 top-12 h-44 w-32 rotate-12 rounded-2xl border border-violet-300/35 bg-gradient-to-br from-slate-900 to-fuchsia-900 p-3 shadow-[0_20px_50px_rgba(139,92,246,0.28)]">
              <MiniArt accent="from-amber-200 via-violet-600 to-slate-950" label="PFP" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur">
            <div className="space-y-5">
              {[
                ["1.2M+", "Total Volume", BarChart3],
                ["45K+", "NFTs Sold", Store],
                ["12K+", "Active Traders", Users],
                ["950+", "Collections", Gem],
              ].map(([value, label, Icon]) => (
                <div
                  key={label as string}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <Icon className="h-5 w-5 text-fuchsia-300" />
                  <div>
                    <p className="text-xl font-black text-white">{value as string}</p>
                    <p className="text-xs text-slate-400">{label as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              className={`inline-flex h-9 shrink-0 items-center gap-2 rounded-lg px-4 text-xs font-bold transition ${
                category.active
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white"
                  : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {category.label}
            </button>
          );
        })}
        <button className="ml-auto inline-flex h-9 shrink-0 items-center gap-2 px-3 text-xs font-bold text-fuchsia-300">
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-white">Featured Collections</h2>
            <p className="mt-1 text-sm text-slate-400">
              Trending, fresh, high-volume, and editor-curated collections from the database.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {collectionSections.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/10 bg-black/20 p-8 text-center">
            <p className="text-sm font-bold text-slate-300">
              {loadingAnalytics
                ? "Loading featured collections..."
                : "No collection data in the local database yet."}
            </p>
          </div>
        )}

        {collectionSections.map((section, sectionIndex) => (
          <div key={section.id} className="space-y-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-base font-black text-white">{section.title}</h3>
                <p className="text-xs font-bold uppercase text-slate-500">
                  {section.description}
                </p>
              </div>
              <span className="text-xs font-bold text-fuchsia-300">
                {section.collections.length} collections
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {section.collections.map((collection, index) => (
                <article
                  key={`${section.id}-${collection.id}`}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-black/20"
                >
                  <div className="relative aspect-[1.06]">
                    <ArtTile
                      imageUrl={collection.imageUrl}
                      accent={artPalettes[(sectionIndex + index) % artPalettes.length]}
                      label={collection.name.slice(0, 3).toUpperCase()}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-violet-600/80 px-3 py-1 text-xs font-black text-white">
                      {collection.metricLabel || section.title}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                      <h4 className="flex items-center gap-1 text-sm font-black text-white">
                        {collection.name}
                        {collection.verified && <BadgeCheck className="h-4 w-4 text-sky-400" />}
                      </h4>
                      <p className="mt-1 text-xs text-slate-300">
                        Floor: {formatSol(collection.floorPrice)}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-2 text-xs text-slate-500">
                        <span>{collection.itemCount.toLocaleString()} items</span>
                        {collection.metricValue && (
                          <span className="font-black text-emerald-300">
                            {collection.metricValue}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        id="marketplace-listings"
        className="scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-black text-white">
                {getMarketViewLabel(marketView)} Marketplace Listings
              </h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                {getMarketViewDescription(marketView)}
              </p>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
              {visibleListings.length} shown
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setShowWatchlistOnly((value) => !value)}
              aria-pressed={showWatchlistOnly}
              className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-black transition ${
                showWatchlistOnly
                  ? "border-rose-300/40 bg-rose-500/15 text-rose-100"
                  : "border-white/10 bg-black/20 text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <Heart className={`h-4 w-4 ${showWatchlistOnly ? "fill-current" : ""}`} />
              Watchlist
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
                {watchlistedIds.length}
              </span>
            </button>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <p className="text-sm text-slate-400">
                Floor {floorPrice.toFixed(2)} SOL - Listed {totalVolume.toFixed(2)} SOL
              </p>
            </div>
          </div>
        </div>

        <EmptyState
          loadingMarketplace={loadingMarketplace}
          listedNFTs={visibleListings}
          showWatchlistOnly={showWatchlistOnly}
          watchlistedCount={watchlistedIds.length}
        />

        {visibleListings.length > 0 && !loadingMarketplace && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleListings.map((listing) => (
              <MarketplaceCard
                key={listing.escrowAddress}
                listing={listing}
                isOwner={publicKey === listing.seller}
                onBuy={() => handleBuyNFT(listing)}
                onCancel={() => handleCancelListing(listing)}
                isWatchlisted={watchlistedSet.has(getListingKey(listing))}
                onToggleWatchlist={() => toggleWatchlist(listing)}
                walletConnected={walletConnected}
                loading={loading}
                cancelingListing={cancelingListing}
              />
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black text-white">Top NFT Drops</h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">
              <Zap className="h-3.5 w-3.5" />
              Hot Mints
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
            <Radio className="h-4 w-4 text-emerald-300" />
            4 rotating drops, 100 supply each
          </div>
        </div>

        {dropMintError && (
          <p className="mb-4 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200">
            {dropMintError}
          </p>
        )}

        {loadingDrops && (
          <div className="rounded-xl border border-dashed border-white/10 bg-black/20 p-8 text-center">
            <Loader2 className="mx-auto h-6 w-6 animate-spin text-amber-200" />
            <p className="mt-3 text-sm font-bold text-slate-300">
              Loading live drops from the database
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {!loadingDrops && dynamicDrops.map((drop, index) => {
            const status = getDynamicDropStatus(drop, now);
            const countdownPrefix = getDropCountdownPrefix(status);
            const countdown = formatDropCountdown(drop, now, status);
            const mintedPercent = Math.round((drop.mintedCount / drop.totalSupply) * 100);
            const isSoldOut = status === "sold-out";
            const isMinting = mintingDropId === drop.id;
            const isMintDisabled = !walletConnected || status !== "live" || isMinting;

            return (
              <article
                key={drop.id}
                className="group overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[1.16]">
                  <ArtTile
                    imageUrl={drop.imageUrl}
                    accent={drop.accent || artPalettes[(index + 5) % artPalettes.length]}
                    label={drop.name.slice(0, 3).toUpperCase()}
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-black ${getDropStatusClass(
                        status
                      )}`}
                    >
                      {getDropStatusLabel(status)}
                    </span>
                    <span className="rounded-full border border-violet-300/30 bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-100">
                      {drop.blockchain}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                    <p className="text-[0.68rem] font-black uppercase text-amber-200">
                      {drop.hypeLabel}
                    </p>
                    <h3 className="mt-1 truncate text-base font-black text-white">
                      {drop.name}
                    </h3>
                    <p className="mt-1 truncate text-xs text-slate-300">@ {drop.creator}</p>
                  </div>
                </div>

                <div className="space-y-4 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500">
                        Mint Price
                      </p>
                      <p className="mt-1 text-lg font-black text-white">
                        {formatSol(drop.mintPrice)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-right">
                      <p className="text-xs font-bold uppercase text-slate-500">
                        Supply
                      </p>
                      <p className="mt-1 text-sm font-black text-white">
                        {drop.mintedCount.toLocaleString()} / {drop.totalSupply}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                      <span>Minted</span>
                      <span>{mintedPercent}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          isSoldOut
                            ? "bg-slate-200"
                            : "bg-gradient-to-r from-emerald-300 via-amber-300 to-fuchsia-400"
                        }`}
                        style={{ width: `${mintedPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
                      <Clock3 className="h-4 w-4 text-amber-200" />
                      {countdownPrefix || "Drop Result"}
                    </div>
                    <p className="mt-1 font-mono text-xl font-black text-white">
                      {countdown}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleMintDrop(drop.id)}
                    disabled={isMintDisabled}
                    className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-black transition ${
                      isMintDisabled
                        ? "cursor-not-allowed border border-white/10 bg-white/10 text-slate-400"
                        : "bg-gradient-to-r from-amber-400 to-fuchsia-600 text-white hover:from-amber-300 hover:to-fuchsia-500"
                    }`}
                  >
                    <Rocket className="h-4 w-4" />
                    {isMinting
                      ? "Minting"
                      : !walletConnected
                        ? "Connect Wallet"
                        : getDropActionLabel(status)}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 xl:hidden">
        <MarketplaceSidePanel analytics={analytics} loadingAnalytics={loadingAnalytics} />
      </div>
    </section>
  );
}

export function MarketplaceSidePanel({
  analytics: providedAnalytics,
  loadingAnalytics: providedLoadingAnalytics,
}: {
  analytics?: MarketplaceAnalytics;
  loadingAnalytics?: boolean;
}) {
  const fetched = useMarketplaceAnalytics();
  const analytics = providedAnalytics || fetched.analytics;
  const loadingAnalytics = providedLoadingAnalytics ?? fetched.loadingAnalytics;

  return (
    <>
      <aside className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <h2 className="mb-4 text-lg font-black text-white">Top Sellers</h2>
        <div className="space-y-4">
          {analytics.topSellers.length === 0 && (
            <p className="rounded-lg border border-dashed border-white/10 bg-black/20 p-4 text-sm font-semibold text-slate-400">
              {loadingAnalytics
                ? "Loading top sellers..."
                : "No completed local sales yet."}
            </p>
          )}

          {analytics.topSellers.map((seller, index) => (
            <div
              key={seller.sellerAddress}
              className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-b-0"
            >
              <span className="w-4 text-sm text-slate-400">{seller.rank || index + 1}</span>
              <ArtTile
                imageUrl={seller.avatarUrl}
                accent={artPalettes[index % artPalettes.length]}
                label={(seller.displayName || seller.sellerAddress).slice(0, 2).toUpperCase()}
                className="h-11 w-11 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-black text-white">
                  {seller.displayName || shortAddress(seller.sellerAddress)}
                  {seller.verified && <BadgeCheck className="ml-1 inline h-3.5 w-3.5 text-sky-400" />}
                </p>
                <p className="text-xs text-slate-400">
                  {formatSol(seller.totalVolume)} - {seller.salesCount} sales
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] text-sm font-bold text-white">
          View All Rankings
        </button>
      </aside>

      <aside className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <h2 className="mb-4 text-lg font-black text-white">Recent Sales</h2>
        <div className="space-y-4">
          {analytics.recentSales.length === 0 && (
            <p className="rounded-lg border border-dashed border-white/10 bg-black/20 p-4 text-sm font-semibold text-slate-400">
              {loadingAnalytics
                ? "Loading recent sales..."
                : "No recent local sales yet."}
            </p>
          )}

          {analytics.recentSales.map((sale, index) => (
            <div
              key={sale.id}
              className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-b-0"
            >
              <ArtTile
                imageUrl={sale.imageUrl}
                accent={artPalettes[(index + 2) % artPalettes.length]}
                label={sale.nftName.slice(0, 2).toUpperCase()}
                className="h-11 w-11 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-black text-white">{sale.nftName}</p>
                <p className="text-xs text-slate-500">{timeAgo(sale.soldAt)}</p>
              </div>
              <p className="text-xs font-bold text-slate-300">{formatSol(sale.price)}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
