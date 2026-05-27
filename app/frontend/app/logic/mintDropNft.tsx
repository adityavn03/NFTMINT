"use client";

import { clusterApiUrl } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { percentAmount } from "@metaplex-foundation/umi";
import { generateSigner } from "@metaplex-foundation/umi";
import { uploadJsonToPinata } from "../utils/pinata";

type DropMintData = {
  name: string;
  description?: string;
  imageUrl?: string;
  symbol?: string;
  attributes?: unknown[];
};

type MintDropNFTParams = {
  wallet: WalletContextState;
  drop: DropMintData;
  mintNumber: number;
  pinataJwt: string;
};

export async function mintDropNFT({
  wallet,
  drop,
  mintNumber,
  pinataJwt,
}: MintDropNFTParams) {
  try {
    if (!wallet.publicKey) {
      throw new Error("Wallet not connected");
    }

    const metadata = {
      name: `${drop.name} #${mintNumber}`,
      symbol: drop.symbol || "NNFT",
      description:
        drop.description ||
        `Limited drop mint #${mintNumber} from ${drop.name}.`,
      image: drop.imageUrl || "",
      attributes: [
        ...(Array.isArray(drop.attributes) ? drop.attributes : []),
        { trait_type: "Drop", value: drop.name },
        { trait_type: "Mint Number", value: String(mintNumber) },
      ],
    };

    const metadataUri = await uploadJsonToPinata(metadata, pinataJwt);

    const umi = createUmi(clusterApiUrl("devnet"))
      .use(walletAdapterIdentity(wallet))
      .use(mplTokenMetadata());

    const mint = generateSigner(umi);

    await createNft(umi, {
      mint,
      name: metadata.name,
      uri: metadataUri,
      sellerFeeBasisPoints: percentAmount(5),
      tokenOwner: umi.identity.publicKey,
      isMutable: false,
    }).sendAndConfirm(umi);

    return {
      success: true,
      mintAddress: mint.publicKey.toString(),
      metadataUri,
    };
  } catch (error: unknown) {
    console.error("Drop mint logic error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Drop mint failed",
    };
  }
}
