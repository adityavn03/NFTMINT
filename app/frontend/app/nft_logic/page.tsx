"use client";

import { useState, useEffect } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { percentAmount } from "@metaplex-foundation/umi";
import { generateSigner } from "@metaplex-foundation/umi";

//design and component proping
import MarketplaceTab from "@/NFTLOGIC_SUBMODULE/MarketplaceTab/page";
import CollectionTab from "@/NFTLOGIC_SUBMODULE/CollectionTab/page";
import MintTab from "@/NFTLOGIC_SUBMODULE/MintTab/page";
import Header from "@/NFTLOGIC_SUBMODULE/Layout/page";

import {
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import { buyNFT } from "../logic/buyNft";
import { cancelListing } from "../logic/cancelListing";
import { listNFT } from "../logic/listNft";
import { loadMarketplaceListings } from "../logic/marketplace";
import { mintNFT } from "../logic/mintNft";
import {
  fetchMetadataFromUri,
  getNFTImage,
  getNFTName,
} from "../utils/metadata";

import {
  uploadFileToPinata,
  uploadJsonToPinata,
} from "../utils/pinata";




import idl from "../idl/idlnft/nft_escrow.json"

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjODVhNTcyOC1iYThiLTQ3MmMtYThlZi1lZDcyMTAyM2QyZDIiLCJlbWFpbCI6ImFkaXR5YS52bjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI2YTU0YTIxYjI1OWUwMzFkN2IwZCIsInNjb3BlZEtleVNlY3JldCI6ImVjZjc1NGEyZTc0NWQ0MTk0OWIzZmNiNWY3OTJmOTlkZGQ4YjQxYzM4N2I0MjI5OTgyNDU1YzQ0MzkzZjg0YTUiLCJleHAiOjE3OTc5MjM2Mzl9.DHmndCayocaYZ6gQ2xnxkX-eKkvKpwoPT5abFuCMOxE";

export default function NFTMarketplace() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  // Tab state
  const [activeTab, setActiveTab] = useState<"mint" | "collection" | "marketplace">("mint");

  // NFT Metadata
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [price, setPrice] = useState("1.0");
  const [attributes, setAttributes] = useState<
    { trait_type: string; value: string }[]
  >([{ trait_type: "", value: "" }]);

  // State
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [mintedNFT, setMintedNFT] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // NFT Collection state
  const [nfts, setNfts] = useState<any[]>([]);
  const [loadingNfts, setLoadingNfts] = useState<boolean>(false);
  const [nftMetadata, setNftMetadata] = useState<{ [key: string]: any }>({});

  // Marketplace state
  const [listedNFTs, setListedNFTs] = useState<any[]>([]);
  const [loadingMarketplace, setLoadingMarketplace] = useState(false);

  // Listing state for collection NFTs
  const [listingNFT, setListingNFT] = useState<string | null>(null);
  const [listPrice, setListPrice] = useState<string>("1.0");

  // Canceling state
  const [cancelingListing, setCancelingListing] = useState<string | null>(null);

  // Smart contract setup
  const provider = new anchor.AnchorProvider(connection, wallet as any, {
    commitment: "confirmed",
  });
  const program = new Program(idl as anchor.Idl, provider);
  const program_id = new PublicKey(idl.address);

  /* =====================================================
     FETCH METADATA FROM URI
  ===================================================== */
  const fetchMetadataFromUri = async (uri: string) => {
    try {
      let fetchUrl = uri;
      if (uri.startsWith('ipfs://')) {
        fetchUrl = uri.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
      }
      
      const response = await fetch(fetchUrl);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Error fetching metadata from URI:', error);
      return null;
    }
  };

  /* =====================================================
     LOAD MARKETPLACE LISTINGS
  ===================================================== */
  const loadMarketplace = async () => {
  try {
    setLoadingMarketplace(true);

    const result = await loadMarketplaceListings({
      program,
      heliusApiKey: "a2d0cfd1-c261-4063-8549-0df94bbf1a35",
    });

    if (!result.success) {
      throw new Error(result.error);
    }
    if (!result.listings) {
      throw new Error(result.error);
    }

    setListedNFTs(result.listings);

  } catch (err: any) {
    console.error("Marketplace Handler Error:", err);
  } finally {
    setLoadingMarketplace(false);
  }
};


  // Load marketplace when tab is opened
  useEffect(() => {
    if (activeTab === "marketplace") {
      loadMarketplace();
    }
  }, [activeTab]);

  // Load NFTs when wallet connects
  useEffect(() => {
    async function loadNFTs() {
      if (!publicKey) {
        setNfts([]);
        return;
      }

      setLoadingNfts(true);
      try {
        const response = await fetch(
          `https://devnet.helius-rpc.com/?api-key=a2d0cfd1-c261-4063-8549-0df94bbf1a35`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: "nft-fetch",
              method: "getAssetsByOwner",
              params: {
                ownerAddress: publicKey.toString(),
                page: 1,
                limit: 1000,
              },
            }),
          }
        );

        const data = await response.json();

        if (data.result && data.result.items) {
          const nftItems = data.result.items.filter(
            (item: any) =>
              item.interface === "V1_NFT" ||
              item.interface === "ProgrammableNFT" ||
              !item.interface
          );
          setNfts(nftItems);
          
          // Fetch metadata for NFTs without images
          for (const nft of nftItems) {
            const hasImage = nft.content?.links?.image || nft.content?.files?.[0]?.uri;
            if (!hasImage && nft.content?.json_uri) {
              const metadata = await fetchMetadataFromUri(nft.content.json_uri);
              if (metadata) {
                setNftMetadata(prev => ({
                  ...prev,
                  [nft.id]: metadata
                }));
              }
            }
          }
        } else {
          setNfts([]);
        }
      } catch (error) {
        console.error("Failed to load NFTs:", error);
        setNfts([]);
      } finally {
        setLoadingNfts(false);
      }
    }

    loadNFTs();
  }, [publicKey]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    if (target.parentElement) {
      target.parentElement.innerHTML =
        '<div class="flex h-full items-center justify-center text-sm font-semibold text-slate-400">Image unavailable</div>';
    }
  };

  /* =====================================================
     ATTRIBUTE HANDLERS
  ===================================================== */

  const updateAttribute = (
    index: number,
    field: "trait_type" | "value",
    value: string
  ) => {
    const updated = [...attributes];
    updated[index][field] = value;
    setAttributes(updated);
  };

  const addAttribute = () => {
    setAttributes([...attributes, { trait_type: "", value: "" }]);
  };

  /* =====================================================
     PINATA UPLOAD FUNCTIONS
  ===================================================== */

  

  

  /* =====================================================
     MINT NFT WITH METADATA
  ===================================================== */

  const mintNFTWithMetadata = async () => {
    if (!wallet.publicKey || !wallet.signMessage) {
      throw new Error("Wallet not connected");
    }

    if (!imageFile) {
      throw new Error("Please select an image");
    }

    if (!name) {
      throw new Error("Please enter an NFT name");
    }

    setStatus("Uploading image to IPFS...");
    const imageUri = await uploadFileToPinata(imageFile, PINATA_JWT);

    console.log("Image uploaded:", imageUri);

    setStatus("Uploading metadata to IPFS...");
    const metadata = {
      name,
      symbol: "NNFT",
      description,
      image: imageUri,
      attributes: attributes.filter((a) => a.trait_type && a.value),
    };

    const metadataUri = await uploadJsonToPinata(metadata, PINATA_JWT);

    console.log("Metadata uploaded:", metadataUri);

    setStatus("Creating NFT with Metaplex...");
    const umi = createUmi(clusterApiUrl("devnet"))
      .use(walletAdapterIdentity(wallet))
      .use(mplTokenMetadata());

    const mint = generateSigner(umi);

    await createNft(umi, {
      mint,
      name,
      uri: metadataUri,
      sellerFeeBasisPoints: percentAmount(5),
      tokenOwner: umi.identity.publicKey,
      isMutable: false,
    }).sendAndConfirm(umi);

    console.log("NFT minted:", mint.publicKey.toString());

    return {
      mintAddress: mint.publicKey.toString(),
      imageUri,
      metadataUri,
    };
  };

 

  /* =====================================================
     MINT AND LIST
  ===================================================== */

  const handleMintAndList = async () => {
  try {
    setLoading(true);
    setError(null);
    setStatus("Minting NFT...");

    const mintResult = await mintNFT({
      wallet,
      name,
      description,
      imageFile: imageFile!,
      attributes,
      pinataJwt: PINATA_JWT,
    });

    if (!mintResult.success) {
      throw new Error(mintResult.error);
    }
    

    setStatus("Listing NFT...");

    const listResult = await listNFT({
      program,
      walletPublicKey: wallet.publicKey!,
      mintAddress: mintResult.mintAddress!,
      priceSOL: price,
    });

    if (!listResult.success) {
      throw new Error(listResult.error);
    }

    setMintedNFT({
      mintAddress: mintResult.mintAddress,
      imageUri: mintResult.imageUri,
      metadataUri: mintResult.metadataUri,
      escrow: listResult.escrow,
    });

    setStatus("NFT minted and listed successfully.");

    loadMarketplace();

  } catch (err: any) {
    console.error("Mint Handler Error:", err);
    setError(err.message || "Mint failed");
    setStatus("");
  } finally {
    setLoading(false);
  }
};


  

  /* =====================================================
     BUY NFT FUNCTION
  ===================================================== */

  const handleBuyNFT = async (listing: any) => {
  try {
    if (!wallet.publicKey) {
      throw new Error("Wallet not connected");
    }

    setLoading(true);
    setError(null);
    setStatus("Processing NFT purchase...");

    const result = await buyNFT({
      program,
      walletPublicKey: wallet.publicKey,
      listing,
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("NFT Purchased TX:", result.tx);

    setStatus("NFT purchased successfully.");

    // Refresh marketplace
    setTimeout(() => {
      loadMarketplace();
    }, 2000);

  } catch (err: any) {
    console.error("Buy Handler Error:", err);
    setError(err.message || "Purchase failed");
    setStatus("");
  } finally {
    setLoading(false);
  }
};
  

const handleListNFT = async (mintAddress: string, priceSOL: string) => {
  try {
    if (!wallet.publicKey) {
      throw new Error("Wallet not connected");
    }

    setLoading(true);
    setError(null);
    setStatus("Listing NFT on marketplace...");

    const result = await listNFT({
      program,
      walletPublicKey: wallet.publicKey,
      mintAddress,
      priceSOL,
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("NFT Listed TX:", result.tx);

    setStatus("NFT listed successfully.");
    setListingNFT(null);

    // Refresh marketplace
    setTimeout(() => {
      loadMarketplace();
    }, 2000);

  } catch (err: any) {
    console.error("List Handler Error:", err);
    setError(err.message || "Listing failed");
    setStatus("");
  } finally {
    setLoading(false);
  }
};


  /* =====================================================
     CANCEL LISTING FUNCTION (NEW)
  ===================================================== */

  const handleCancelListing = async (listing: any) => {
  try {
    setCancelingListing(listing.escrowAddress);
    setError(null);
    setStatus("Canceling listing...");

    const result = await cancelListing({
      program,
      listing,
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("Listing canceled TX:", result.tx);

    setStatus("Listing canceled. NFT returned to your wallet.");

    // Refresh marketplace
    setTimeout(() => {
      loadMarketplace();
    }, 2000);

  } catch (err: any) {
    console.error("Cancel Handler Error:", err);
    setError(err.message || "Cancel listing failed");
    setStatus("");
  } finally {
    setCancelingListing(null);
  }
};

  /* =====================================================
     UI
  ===================================================== */

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          listedNFTsCount={listedNFTs.length}
          nftsCount={nfts.length}
        />

        {/* Mint & List Tab */}
        {activeTab === "mint" && (
          <MintTab
            name={name}
            description={description}
            price={price}
            attributes={attributes}
            loading={loading}
            status={status}
            error={error}
            mintedNFT={mintedNFT}
            walletConnected={wallet.connected}
            setName={setName}
            setDescription={setDescription}
            setPrice={setPrice}
            setImageFile={setImageFile}
            updateAttribute={updateAttribute}
            addAttribute={addAttribute}
            handleMintAndList={handleMintAndList}
          />
        )}

        {activeTab === "marketplace" && (
          <MarketplaceTab
            listedNFTs={listedNFTs}
            loadingMarketplace={loadingMarketplace}
            loadMarketplace={loadMarketplace}
            handleBuyNFT={handleBuyNFT}
            handleCancelListing={handleCancelListing}
            publicKey={publicKey?.toString()}
            walletConnected={wallet.connected}
            loading={loading}
            cancelingListing={cancelingListing}
          />
        )}

        {activeTab === "collection" && (
          <CollectionTab
            nfts={nfts}
            loadingNfts={loadingNfts}
            publicKey={publicKey?.toString()}
            listingNFT={listingNFT}
            listPrice={listPrice}
            loading={loading}
            setListingNFT={setListingNFT}
            setListPrice={setListPrice}
            handleListNFT={handleListNFT}
            handleImageError={handleImageError}
            getNFTImage={getNFTImage}
            getNFTName={getNFTName}
            nftMetadata={nftMetadata}
          />
        )}
      </div>
    </main>
  );
}
