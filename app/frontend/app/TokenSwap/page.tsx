"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createNoopSigner } from "@metaplex-foundation/umi";
import {
  createMetadataAccountV3,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  fromWeb3JsPublicKey,
  toWeb3JsInstruction,
} from "@metaplex-foundation/umi-web3js-adapters";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMintInstruction,
  createMintToInstruction,
  getAssociatedTokenAddress,
  getMint,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Eye,
  FileText,
  Handshake,
  Image as ImageIcon,
  Loader2,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Upload,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

import idl from "../idl/idlswap/escrow_application.json";

const DECIMALS = 9;
const EXPLORER_CLUSTER = "devnet";
const ZERO_PUBKEY = "11111111111111111111111111111111";
const MAX_METADATA_NAME_LENGTH = 32;
const MAX_METADATA_SYMBOL_LENGTH = 10;

type EscrowAccount = {
  publicKey: PublicKey;
  account: {
    maker: PublicKey;
    taker: PublicKey;
    mintMaker: PublicKey;
    mintTaker: PublicKey;
    amountMaker: anchor.BN;
    amountTaker: anchor.BN;
    depositMaker: boolean;
    depositTaker: boolean;
    bump: number;
    escrowId: anchor.BN;
  };
};

type EscrowAccountClient = {
  all: () => Promise<EscrowAccount[]>;
  fetchNullable: (address: PublicKey) => Promise<EscrowAccount["account"] | null>;
};

type TokenForm = {
  name: string;
  symbol: string;
  description: string;
  amount: string;
  decimals: number;
  existingMintInput: string;
  imageFile: File | null;
  imagePreview: string;
  mintAddress: string;
  tokenAccountAddress: string;
  metadataUri: string;
  txSig: string;
};

type WalletToken = {
  mintAddress: string;
  ataAddress: string;
  balance: string;
  decimals: number;
};

type LaunchSide = "maker" | "taker";

const emptyTokenForm: TokenForm = {
  name: "",
  symbol: "",
  description: "",
  amount: "",
  decimals: DECIMALS,
  existingMintInput: "",
  imageFile: null,
  imagePreview: "",
  mintAddress: "",
  tokenAccountAddress: "",
  metadataUri: "",
  txSig: "",
};

const uploadFileToPinata = async (file: File, pinataJwt: string) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: { Authorization: `Bearer ${pinataJwt}` },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Pinata image upload failed: ${response.statusText}`);
  }

  const data = (await response.json()) as { IpfsHash: string };
  return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};

const uploadJsonToPinata = async (
  json: Record<string, unknown>,
  pinataJwt: string
) => {
  const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${pinataJwt}`,
    },
    body: JSON.stringify({ pinataContent: json }),
  });

  if (!response.ok) {
    throw new Error(`Pinata metadata upload failed: ${response.statusText}`);
  }

  const data = (await response.json()) as { IpfsHash: string };
  return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};

const shortenKey = (key?: PublicKey | string | null) => {
  if (!key) return "Not connected";
  const value = typeof key === "string" ? key : key.toBase58();
  return `${value.slice(0, 5)}...${value.slice(-5)}`;
};

const explorerUrl = (path: "address" | "tx", value: string) =>
  `https://explorer.solana.com/${path}/${value}?cluster=${EXPLORER_CLUSTER}`;

const toRawAmount = (value: string, decimals = DECIMALS) => {
  const normalized = value.trim();
  if (!normalized || Number(normalized) <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const [whole, fraction = ""] = normalized.split(".");
  if (fraction.length > decimals) {
    throw new Error(`Use at most ${decimals} decimal places`);
  }

  const paddedFraction = fraction.padEnd(decimals, "0");
  return new anchor.BN(`${whole || "0"}${paddedFraction}`);
};

const formatRawUnits = (amount: string, decimals = DECIMALS) => {
  const raw = amount.padStart(decimals + 1, "0");
  const whole = raw.slice(0, -decimals);
  const fraction = raw.slice(-decimals).replace(/0+$/, "");
  return fraction ? `${whole}.${fraction}` : whole;
};

const formatRawAmount = (amount: anchor.BN, decimals = DECIMALS) =>
  formatRawUnits(amount.toString(), decimals);

const getEscrowPda = (
  maker: PublicKey,
  mintMaker: PublicKey,
  escrowId: anchor.BN,
  programId: PublicKey
) =>
  PublicKey.findProgramAddressSync(
    [
      Buffer.from("escrow"),
      maker.toBuffer(),
      mintMaker.toBuffer(),
      escrowId.toArrayLike(Buffer, "le", 8),
    ],
    programId
  )[0];

const formatActionError = (message: string) => {
  if (message.includes("AccountDidNotDeserialize")) {
    return "This escrow account is stale or from an older program version. Refresh escrows and select a newly created escrow.";
  }

  if (
    message.includes("SameMint") ||
    message.includes("Maker and taker mints cannot be the same")
  ) {
    return "Choose a different taker token. The maker token and taker offer token cannot be the same mint.";
  }

  return message;
};

export default function EscrowUI() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const pinataJwt = process.env.NEXT_PUBLIC_PINATA_JWT;

  const [activeTab, setActiveTab] = useState<"maker" | "taker" | "escrows">(
    "maker"
  );
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [escrows, setEscrows] = useState<EscrowAccount[]>([]);
  const [walletTokens, setWalletTokens] = useState<WalletToken[]>([]);
  const [selectedEscrow, setSelectedEscrow] = useState<EscrowAccount | null>(
    null
  );

  const [makerToken, setMakerToken] = useState<TokenForm>({
    ...emptyTokenForm,
    name: "Maker Token",
    symbol: "MAKER",
    amount: "1000",
  });
  const [takerToken, setTakerToken] = useState<TokenForm>({
    ...emptyTokenForm,
    name: "Taker Token",
    symbol: "TAKER",
    amount: "1000",
  });
  const [escrowId, setEscrowId] = useState("1");
  const [makerAmount, setMakerAmount] = useState("100");
  const [takerAmount, setTakerAmount] = useState("100");
  const [createdEscrow, setCreatedEscrow] = useState<PublicKey | null>(null);

  const provider = useMemo(
    () =>
      new anchor.AnchorProvider(connection, wallet as unknown as anchor.Wallet, {
        commitment: "processed",
      }),
    [connection, wallet]
  );

  const program = useMemo(
    () => new Program(idl as anchor.Idl, provider),
    [provider]
  );
  const umi = useMemo(
    () => createUmi(connection).use(mplTokenMetadata()),
    [connection]
  );

  const escrowClient = program.account as unknown as {
    escrow: EscrowAccountClient;
  };

  const makerEscrows = wallet.publicKey
    ? escrows.filter((escrow) => escrow.account.maker.equals(wallet.publicKey!))
    : [];
  const joinableEscrows = escrows.filter(
    (escrow) =>
      escrow.account.depositMaker &&
      !escrow.account.depositTaker &&
      escrow.account.taker.toBase58() === ZERO_PUBKEY &&
      !escrow.account.maker.equals(wallet.publicKey ?? PublicKey.default)
  );
  const activeEscrowCount = escrows.filter(
    (escrow) => !escrow.account.depositMaker || !escrow.account.depositTaker
  ).length;
  const selectedOfferUsesSameMint =
    Boolean(selectedEscrow && takerToken.mintAddress) &&
    selectedEscrow?.account.mintMaker.toBase58() === takerToken.mintAddress;

  const fetchEscrows = async () => {
    try {
      const accounts = await escrowClient.escrow.all();
      setEscrows(accounts);
      setSelectedEscrow((current) =>
        current &&
        accounts.some((account) => account.publicKey.equals(current.publicKey))
          ? current
          : null
      );
    } catch (err) {
      console.error("Fetch escrow error:", err);
    }
  };

  const fetchFreshEscrow = async (escrow: PublicKey) => {
    try {
      const account = await escrowClient.escrow.fetchNullable(escrow);
      if (!account) {
        throw new Error("This escrow no longer exists. Refresh escrows and select a current one.");
      }

      return account;
    } catch (err) {
      console.error("Fresh escrow fetch error:", err);
      throw new Error(
        "This escrow account is stale or from an older program version. Refresh escrows and select a newly created escrow."
      );
    }
  };

  const fetchWalletTokens = async () => {
    if (!wallet.publicKey) return;

    try {
      const accounts = await connection.getParsedTokenAccountsByOwner(
        wallet.publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );

      const tokens = accounts.value.reduce<WalletToken[]>((items, { account, pubkey }) => {
          const parsed = account.data.parsed as {
            info: {
              mint: string;
              tokenAmount: {
                amount: string;
                decimals: number;
                uiAmountString?: string;
              };
            };
          };
          const { mint, tokenAmount } = parsed.info;

          if (tokenAmount.amount === "0") {
            return items;
          }

          items.push({
            mintAddress: mint,
            ataAddress: pubkey.toBase58(),
            balance:
              tokenAmount.uiAmountString ??
              formatRawUnits(tokenAmount.amount, tokenAmount.decimals),
            decimals: tokenAmount.decimals,
          });

          return items;
        }, []);

      setWalletTokens(tokens);
    } catch (err) {
      console.error("Fetch wallet tokens error:", err);
      setWalletTokens([]);
    }
  };

  useEffect(() => {
    if (!wallet.publicKey) {
      setSolBalance(null);
      setEscrows([]);
      setWalletTokens([]);
      return;
    }

    fetchEscrows();
    fetchWalletTokens();
    connection
      .getBalance(wallet.publicKey)
      .then((lamports) => setSolBalance(lamports / LAMPORTS_PER_SOL))
      .catch(() => setSolBalance(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, wallet.publicKey]);

  const updateToken = (side: LaunchSide, patch: Partial<TokenForm>) => {
    if (side === "maker") {
      setMakerToken((current) => ({ ...current, ...patch }));
      return;
    }

    setTakerToken((current) => ({ ...current, ...patch }));
  };

  const handleImageChange =
    (side: LaunchSide) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        updateToken(side, {
          imageFile: file,
          imagePreview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    };

  const clearImage = (side: LaunchSide) =>
    updateToken(side, { imageFile: null, imagePreview: "" });

  const clearSelectedToken = (side: LaunchSide) =>
    updateToken(side, {
      mintAddress: "",
      tokenAccountAddress: "",
      metadataUri: "",
      txSig: "",
      existingMintInput: "",
      decimals: DECIMALS,
    });

  const copyText = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  const selectWalletToken = (side: LaunchSide, token: WalletToken) => {
    updateToken(side, {
      mintAddress: token.mintAddress,
      tokenAccountAddress: token.ataAddress,
      existingMintInput: token.mintAddress,
      decimals: token.decimals,
    });
  };

  const selectExistingMint = async (side: LaunchSide) => {
    const token = side === "maker" ? makerToken : takerToken;

    await runAction("Selecting existing token mint...", async () => {
      const mint = new PublicKey(token.existingMintInput.trim());
      const mintAccount = await getMint(connection, mint, "confirmed", TOKEN_PROGRAM_ID);

      updateToken(side, {
        mintAddress: mint.toBase58(),
        tokenAccountAddress: "",
        decimals: mintAccount.decimals,
      });
    });
  };

  const runAction = async (label: string, action: () => Promise<void>) => {
    setLoading(true);
    setStatus(label);
    setError("");

    try {
      await action();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Transaction failed";
      console.error(err);
      setError(formatActionError(message));
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  const launchToken = async (side: LaunchSide) => {
    await runAction(`Launching ${side} token...`, async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");
      if (!pinataJwt) throw new Error("NEXT_PUBLIC_PINATA_JWT is missing");

      const token = side === "maker" ? makerToken : takerToken;
      if (!token.name || !token.symbol || !token.amount || !token.imageFile) {
        throw new Error("Fill token name, symbol, supply, and image");
      }

      const balance = await connection.getBalance(wallet.publicKey);
      if (balance < 0.03 * LAMPORTS_PER_SOL) {
        throw new Error("Not enough SOL for mint rent and transaction fees");
      }

      setStatus("Uploading token image to IPFS...");
      const imageUrl = await uploadFileToPinata(token.imageFile, pinataJwt);

      setStatus("Uploading token metadata to IPFS...");
      const metadataUri = await uploadJsonToPinata(
        {
          name: token.name,
          symbol: token.symbol,
          description:
            token.description ||
            `${token.name} (${token.symbol}) launched for escrow swapping`,
          image: imageUrl,
          attributes: [],
          properties: {
            files: [{ uri: imageUrl, type: token.imageFile.type }],
            category: "fungible",
          },
        },
        pinataJwt
      );

      setStatus("Creating SPL token mint...");
      const mintKeypair = Keypair.generate();
      const rent = await getMinimumBalanceForRentExemptMint(connection);
      const mint = mintKeypair.publicKey;
      const ata = await getAssociatedTokenAddress(mint, wallet.publicKey);
      const rawAmount = BigInt(toRawAmount(token.amount).toString());
      const payer = createNoopSigner(fromWeb3JsPublicKey(wallet.publicKey));
      const metadataInstructions = createMetadataAccountV3(umi, {
        mint: fromWeb3JsPublicKey(mint),
        mintAuthority: payer,
        payer,
        updateAuthority: payer,
        data: {
          name: token.name.trim().slice(0, MAX_METADATA_NAME_LENGTH),
          symbol: token.symbol.trim().slice(0, MAX_METADATA_SYMBOL_LENGTH),
          uri: metadataUri,
          sellerFeeBasisPoints: 0,
          creators: null,
          collection: null,
          uses: null,
        },
        isMutable: true,
        collectionDetails: null,
      })
        .getInstructions()
        .map(toWeb3JsInstruction);

      const tx = new Transaction().add(
        SystemProgram.createAccount({
          fromPubkey: wallet.publicKey,
          newAccountPubkey: mint,
          space: MINT_SIZE,
          lamports: rent,
          programId: TOKEN_PROGRAM_ID,
        }),
        createInitializeMintInstruction(
          mint,
          DECIMALS,
          wallet.publicKey,
          wallet.publicKey,
          TOKEN_PROGRAM_ID
        ),
        createAssociatedTokenAccountInstruction(
          wallet.publicKey,
          ata,
          wallet.publicKey,
          mint,
          TOKEN_PROGRAM_ID
        ),
        createMintToInstruction(
          mint,
          ata,
          wallet.publicKey,
          rawAmount,
          [],
          TOKEN_PROGRAM_ID
        ),
        ...metadataInstructions
      );

      const signature = await wallet.sendTransaction(tx, connection, {
        signers: [mintKeypair],
      });
      const latest = await connection.getLatestBlockhash();
      await connection.confirmTransaction(
        { signature, ...latest },
        "confirmed"
      );

      updateToken(side, {
        mintAddress: mint.toBase58(),
        tokenAccountAddress: ata.toBase58(),
        metadataUri,
        txSig: signature,
        decimals: DECIMALS,
      });

      await fetchWalletTokens();
      await fetchEscrows();
    });
  };

  const initializeEscrow = async () => {
    await runAction("Creating escrow...", async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");
      if (!makerToken.mintAddress) throw new Error("Select or launch a maker token first");

      const makerMint = new PublicKey(makerToken.mintAddress);
      const escrowIdBn = new anchor.BN(escrowId || "0");
      const escrowPda = getEscrowPda(
        wallet.publicKey,
        makerMint,
        escrowIdBn,
        program.programId
      );

      await program.methods
        .inizialiseEscrow(escrowIdBn, toRawAmount(makerAmount, makerToken.decimals))
        .accounts({
          escrow: escrowPda,
          maker: wallet.publicKey,
          mintMaker: makerMint,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      setCreatedEscrow(escrowPda);
      await fetchEscrows();
    });
  };

  const depositMakerTokens = async () => {
    await runAction("Depositing maker tokens...", async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");
      if (!makerToken.mintAddress) throw new Error("Select or launch a maker token first");

      const makerMint = new PublicKey(makerToken.mintAddress);
      const escrowIdBn = new anchor.BN(escrowId || "0");
      const escrowPda =
        createdEscrow ?? getEscrowPda(wallet.publicKey, makerMint, escrowIdBn, program.programId);
      const makerAta = makerToken.tokenAccountAddress
        ? new PublicKey(makerToken.tokenAccountAddress)
        : await getAssociatedTokenAddress(makerMint, wallet.publicKey);
      const escrowMakeAta = await getAssociatedTokenAddress(
        makerMint,
        escrowPda,
        true
      );

      await program.methods
        .depositMaker()
        .accounts({
          escrow: escrowPda,
          maker: wallet.publicKey,
          makerAta,
          escrowMakerAta: escrowMakeAta,
          mintMaker: makerMint,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      await fetchEscrows();
    });
  };

  const depositTakerTokens = async () => {
    await runAction("Depositing taker tokens...", async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");
      if (!selectedEscrow) throw new Error("Select an escrow first");
      if (!takerToken.mintAddress) {
        throw new Error("Select, launch, or paste the taker token mint first");
      }

      const escrow = selectedEscrow.publicKey;
      const escrowData = await fetchFreshEscrow(escrow);
      if (!escrowData.depositMaker) {
        throw new Error("The maker has not funded this escrow yet");
      }
      if (escrowData.depositTaker) {
        throw new Error("This escrow already has a taker offer");
      }

      const takerMint = new PublicKey(takerToken.mintAddress);
      if (escrowData.mintMaker.equals(takerMint)) {
        throw new Error(
          "Choose a different taker token. The maker token and taker offer token cannot be the same mint."
        );
      }

      const payAta = takerToken.tokenAccountAddress
        ? new PublicKey(takerToken.tokenAccountAddress)
        : await getAssociatedTokenAddress(takerMint, wallet.publicKey);
      const payAtaAccount = await connection.getAccountInfo(payAta);
      if (!payAtaAccount) {
        throw new Error("Your wallet does not have a token account for this taker mint");
      }

      const escrowTakerAta = await getAssociatedTokenAddress(
        takerMint,
        escrow,
        true
      );

      await program.methods
        .takeEscrow(toRawAmount(takerAmount, takerToken.decimals))
        .accounts({
          escrow,
          taker: wallet.publicKey,
          mintTaker: takerMint,
          takerAta: payAta,
          escrowTakerAta,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      await fetchEscrows();
    });
  };

  const executeSwap = async (escrowToExecute: EscrowAccount) => {
    await runAction("Executing escrow swap...", async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");

      const escrow = escrowToExecute.publicKey;
      const data = await fetchFreshEscrow(escrow);
      if (!data.maker.equals(wallet.publicKey)) {
        throw new Error("Only the maker can execute this escrow");
      }
      if (data.taker.toBase58() === ZERO_PUBKEY) {
        throw new Error("Taker has not joined this escrow yet");
      }

      const makerReceiveAta = await getAssociatedTokenAddress(
        data.mintTaker,
        data.maker
      );
      const takerReceiveAta = await getAssociatedTokenAddress(
        data.mintMaker,
        data.taker
      );

      const setupTx = new Transaction();
      const makerReceiveExists = await connection.getAccountInfo(makerReceiveAta);
      if (!makerReceiveExists) {
        setupTx.add(
          createAssociatedTokenAccountInstruction(
            wallet.publicKey,
            makerReceiveAta,
            data.maker,
            data.mintTaker,
            TOKEN_PROGRAM_ID
          )
        );
      }

      const takerReceiveExists = await connection.getAccountInfo(takerReceiveAta);
      if (!takerReceiveExists) {
        setupTx.add(
          createAssociatedTokenAccountInstruction(
            wallet.publicKey,
            takerReceiveAta,
            data.taker,
            data.mintMaker,
            TOKEN_PROGRAM_ID
          )
        );
      }

      if (setupTx.instructions.length > 0) {
        const signature = await wallet.sendTransaction(setupTx, connection);
        const latest = await connection.getLatestBlockhash();
        await connection.confirmTransaction(
          { signature, ...latest },
          "confirmed"
        );
      }

      const escrowMakerAta = await getAssociatedTokenAddress(
        data.mintMaker,
        escrow,
        true
      );
      const escrowTakerAta = await getAssociatedTokenAddress(
        data.mintTaker,
        escrow,
        true
      );

      await program.methods
        .execute()
        .accounts({
          escrow,
          maker: wallet.publicKey,
          taker: data.taker,
          makerReceiveAta,
          takerReceiveAta,
          escrowMakerAta,
          escrowTakerAta,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      setSelectedEscrow(null);
      await fetchEscrows();
    });
  };

  const rejectOffer = async (escrowToReject: EscrowAccount) => {
    await runAction("Rejecting taker offer...", async () => {
      if (!wallet.publicKey) throw new Error("Connect your wallet first");
      if (!wallet.publicKey.equals(escrowToReject.account.maker)) {
        throw new Error("Only the maker can reject this offer");
      }

      const escrow = escrowToReject.publicKey;
      const data = await fetchFreshEscrow(escrow);
      if (data.taker.toBase58() === ZERO_PUBKEY) {
        throw new Error("No taker offer exists on this escrow");
      }

      const takerAta = await getAssociatedTokenAddress(data.mintTaker, data.taker);
      const escrowTakerAta = await getAssociatedTokenAddress(
        data.mintTaker,
        escrow,
        true
      );

      await program.methods
        .rejectOffer()
        .accounts({
          escrow,
          maker: wallet.publicKey,
          taker: data.taker,
          takerAta,
          escrowTakerAta,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      await fetchEscrows();
    });
  };

  const renderTokenLaunchpad = (side: LaunchSide) => {
    const token = side === "maker" ? makerToken : takerToken;
    const title = side === "maker" ? "Maker Token Launchpad" : "Taker Token Launchpad";
    const copy = side === "maker"
      ? "Create the token you will lock into escrow."
      : "Create or select the token you want to offer to the maker.";

    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-[0_0_28px_rgba(168,85,247,0.45)]">
              <Rocket className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-1 text-sm text-slate-300">{copy}</p>
            </div>
          </div>
          {token.mintAddress && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              Token selected
            </span>
          )}
        </div>

        <div className="mt-6 grid gap-5">
          <div className="rounded-lg border border-white/10 bg-[#080a1d]/55 p-4">
            {walletTokens.length > 0 && !token.mintAddress && (
              <div className="mb-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-slate-100">Use Coins From Your Wallet</p>
                  <button
                    onClick={fetchWalletTokens}
                    disabled={loading || !wallet.publicKey}
                    className="text-xs font-bold text-violet-200 transition hover:text-white disabled:opacity-45"
                  >
                    Refresh
                  </button>
                </div>
                <div className="grid max-h-64 gap-2 overflow-y-auto pr-1">
                  {walletTokens.map((walletToken) => (
                    <button
                      key={`${side}-${walletToken.ataAddress}`}
                      onClick={() => selectWalletToken(side, walletToken)}
                      disabled={loading}
                      className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-3 text-left transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <span>
                        <span className="block font-mono text-xs text-slate-400">
                          {shortenKey(walletToken.mintAddress)}
                        </span>
                        <span className="mt-1 block break-all font-mono text-[11px] font-normal text-slate-500">
                          {walletToken.mintAddress}
                        </span>
                      </span>
                      <span className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-200">
                        {walletToken.balance}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <label className="grid flex-1 gap-2 text-sm font-bold text-slate-200">
                Paste Any SPL Token Mint
                <input
                  value={token.existingMintInput}
                  onChange={(event) =>
                    updateToken(side, { existingMintInput: event.target.value })
                  }
                  disabled={loading || Boolean(token.mintAddress)}
                  placeholder="Paste an existing Tokenkeg mint address"
                  className="min-h-11 rounded-lg border border-white/10 bg-[#050719]/75 px-4 font-mono text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                />
              </label>
              <button
                onClick={() => selectExistingMint(side)}
                disabled={loading || Boolean(token.mintAddress) || !token.existingMintInput}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Check className="h-4 w-4" />
                Use Mint
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              You do not need to own the mint authority. You only need a token account with balance when depositing.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Token Name
              <input
                value={token.name}
                onChange={(event) => updateToken(side, { name: event.target.value })}
                disabled={loading || Boolean(token.mintAddress)}
                placeholder="e.g. Community Coin"
                className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Symbol
              <input
                value={token.symbol}
                onChange={(event) =>
                  updateToken(side, { symbol: event.target.value.toUpperCase() })
                }
                disabled={loading || Boolean(token.mintAddress)}
                maxLength={10}
                placeholder="e.g. COM"
                className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm uppercase text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-slate-200">
            Description
            <textarea
              value={token.description}
              onChange={(event) => updateToken(side, { description: event.target.value })}
              disabled={loading || Boolean(token.mintAddress)}
              rows={3}
              placeholder="What is this token for?"
              className="resize-none rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-slate-200">
            Initial Supply
            <input
              type="number"
              min="1"
              value={token.amount}
              onChange={(event) => updateToken(side, { amount: event.target.value })}
              disabled={loading || Boolean(token.mintAddress)}
              placeholder="1000000"
              className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
            />
          </label>

          <div className="grid gap-2 text-sm font-bold text-slate-200">
            Token Image
            {!token.imagePreview ? (
              <label className="grid cursor-pointer place-items-center rounded-lg border border-dashed border-white/15 bg-[#080a1d]/55 px-4 py-8 text-center transition hover:border-violet-300/50">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={loading || Boolean(token.mintAddress)}
                  onChange={handleImageChange(side)}
                />
                <Upload className="mb-3 h-9 w-9 text-violet-300" />
                <span className="text-sm text-slate-200">Upload token artwork</span>
                <span className="mt-1 text-xs font-normal text-slate-500">
                  PNG or JPG recommended
                </span>
              </label>
            ) : (
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#080a1d]">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${token.imagePreview})` }}
                />
                {!token.mintAddress && (
                  <button
                    onClick={() => clearImage(side)}
                    disabled={loading}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-red-300 transition hover:bg-red-950"
                    aria-label="Remove token image"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {token.mintAddress && (
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-black text-emerald-200">Selected Mint</p>
                <button
                  onClick={() => copyText(token.mintAddress)}
                  className="text-violet-200 transition hover:text-white"
                  aria-label="Copy mint address"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 break-all font-mono text-xs leading-5 text-slate-300">
                {token.mintAddress}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Decimals: {token.decimals}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={explorerUrl("address", token.mintAddress)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white"
                >
                  View Mint <ExternalLink className="h-3.5 w-3.5" />
                </a>
                {token.txSig && (
                  <a
                    href={explorerUrl("tx", token.txSig)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white"
                  >
                    View Tx <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => clearSelectedToken(side)}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Change Token
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => launchToken(side)}
            disabled={
              loading ||
              !wallet.publicKey ||
              Boolean(token.mintAddress) ||
              !token.name ||
              !token.symbol ||
              !token.amount ||
              !token.imageFile
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(168,85,247,0.34)] transition hover:from-violet-400 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Rocket className="h-4 w-4" />}
            {token.mintAddress ? "Token Launched" : "Launch SPL Token"}
          </button>
        </div>
      </div>
    );
  };

  const renderEscrowCard = (escrow: EscrowAccount, mode: "maker" | "taker") => {
    const isSelected = selectedEscrow?.publicKey.equals(escrow.publicKey);
    const takerJoined = escrow.account.taker.toBase58() !== ZERO_PUBKEY;

    return (
      <div
        key={escrow.publicKey.toBase58()}
        className={`rounded-lg border p-4 transition ${
          isSelected
            ? "border-violet-300/70 bg-violet-500/15"
            : "border-white/10 bg-white/[0.04]"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs text-slate-400">
              ID {escrow.account.escrowId.toString()} | {shortenKey(escrow.publicKey)}
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Maker offers{" "}
              <span className="font-black text-white">
                {formatRawAmount(escrow.account.amountMaker)}
              </span>
              {takerJoined ? (
                <>
                  {" "}for taker offer{" "}
                  <span className="font-black text-white">
                    {formatRawAmount(escrow.account.amountTaker)}
                  </span>
                </>
              ) : (
                <span className="text-slate-400"> and is waiting for a taker offer</span>
              )}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
                Maker: {escrow.account.depositMaker ? "Deposited" : "Pending"}
              </span>
              <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
                Taker: {escrow.account.depositTaker ? "Deposited" : "Pending"}
              </span>
              <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
                Joined: {takerJoined ? shortenKey(escrow.account.taker) : "No"}
              </span>
            </div>
          </div>

          {mode === "maker" ? (
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => rejectOffer(escrow)}
                disabled={
                  loading ||
                  !wallet.publicKey?.equals(escrow.account.maker) ||
                  !escrow.account.depositTaker
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-red-300/40 disabled:cursor-not-allowed disabled:opacity-45"
              >
                <X className="h-4 w-4" />
                Reject
              </button>
              <button
                onClick={() => executeSwap(escrow)}
                disabled={
                  loading ||
                  !wallet.publicKey?.equals(escrow.account.maker) ||
                  !escrow.account.depositMaker ||
                  !escrow.account.depositTaker
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Rocket className="h-4 w-4" />
                Execute
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSelectedEscrow(escrow)}
              disabled={loading || escrow.account.depositTaker}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Check className="h-4 w-4" />
              {isSelected ? "Selected" : "Select"}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020412] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_8%,rgba(124,58,237,0.30),transparent_27%),radial-gradient(circle_at_16%_22%,rgba(126,34,206,0.28),transparent_24%),radial-gradient(circle_at_86%_84%,rgba(37,99,235,0.14),transparent_24%),linear-gradient(180deg,#020412_0%,#06071c_45%,#020412_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto w-full max-w-[92rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 shadow-[0_0_44px_rgba(168,85,247,0.35)]">
                <LockKeyhole className="h-10 w-10 text-fuchsia-300" />
              </div>
              <div>
                <h1 className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl">
                  Token Swap Launchpad
                </h1>
                <p className="mt-2 text-base text-slate-300 sm:text-lg">
                  Launch classic SPL tokens, lock them in escrow, and swap peer to peer.
                </p>
              </div>
            </div>

            <div className="mt-6 grid max-w-2xl grid-cols-3 gap-2 rounded-lg border border-white/10 bg-[#07081b]/70 p-1">
              {[
                { key: "maker", label: "Maker", icon: WalletCards },
                { key: "taker", label: "Taker", icon: Handshake },
                { key: "escrows", label: "Escrows", icon: Eye },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key as typeof activeTab)}
                    className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-black transition ${
                      activeTab === item.key
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-[0_12px_32px_rgba(168,85,247,0.35)]"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                <FileText className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-black">Swap Summary</h2>
            </div>

            <div className="mt-5 grid gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Wallet</span>
                <span className="font-mono text-xs font-black">
                  {shortenKey(wallet.publicKey)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Balance</span>
                <span className="font-black">
                  {solBalance === null ? "--" : solBalance.toFixed(3)} SOL
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Network</span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  Solana {EXPLORER_CLUSTER}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Escrows</span>
                <span className="font-black text-emerald-300">{activeEscrowCount} Active</span>
              </div>
            </div>

            <button
              onClick={fetchEscrows}
              disabled={!wallet.publicKey || loading}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-violet-400/45 bg-violet-500/10 text-sm font-black text-violet-200 transition hover:bg-violet-500/18 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Eye className="h-4 w-4" />
              Refresh Escrows
            </button>
          </aside>
        </section>

        {(error || status) && (
          <section className="mt-6">
            {error ? (
              <div className="flex items-center gap-3 rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-red-200">
                <X className="h-5 w-5 shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-lg border border-violet-300/25 bg-violet-500/10 p-4 text-violet-100">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p className="text-sm font-bold">{status}</p>
              </div>
            )}
          </section>
        )}

        <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_22rem]">
          <div className="grid gap-5">
            {activeTab === "maker" && (
              <>
                {renderTokenLaunchpad("maker")}

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-black">
                      2
                    </span>
                    <div>
                      <h2 className="text-2xl font-black">Create Escrow Terms</h2>
                      <p className="mt-1 text-sm text-slate-300">
                        Initialize with your token only. Takers choose their token when they join.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-200">
                      Escrow ID
                      <input
                        type="number"
                        value={escrowId}
                        onChange={(event) => setEscrowId(event.target.value)}
                        disabled={loading}
                        className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-slate-200">
                      Maker Deposit Amount
                      <input
                        type="number"
                        value={makerAmount}
                        onChange={(event) => setMakerAmount(event.target.value)}
                        disabled={loading}
                        className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                      />
                    </label>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <button
                      onClick={initializeEscrow}
                      disabled={
                        loading ||
                        !wallet.publicKey ||
                        !makerToken.mintAddress
                      }
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-5 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Initialize Escrow
                    </button>
                    <button
                      onClick={depositMakerTokens}
                      disabled={loading || !wallet.publicKey || !makerToken.mintAddress}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(168,85,247,0.34)] transition hover:from-violet-400 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      <Rocket className="h-4 w-4" />
                      Deposit Maker Tokens
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === "taker" && (
              <>
                {renderTokenLaunchpad("taker")}

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-black">
                      2
                    </span>
                    <div>
                      <h2 className="text-2xl font-black">Join an Escrow</h2>
                      <p className="mt-1 text-sm text-slate-300">
                        Select a maker escrow, choose your token, and propose your amount.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {joinableEscrows.length === 0 ? (
                      <p className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
                        No joinable escrows found.
                      </p>
                    ) : (
                      joinableEscrows.map((escrow) => renderEscrowCard(escrow, "taker"))
                    )}
                  </div>

                  {selectedEscrow && (
                    <div className="mt-5 rounded-lg border border-fuchsia-400/25 bg-fuchsia-500/10 p-4">
                      <p className="text-sm font-black">Your Offer</p>
                      <p className="mt-2 text-xs leading-5 text-slate-300">
                        The maker will review your token mint and amount before executing.
                      </p>
                      {selectedOfferUsesSameMint && (
                        <p className="mt-3 rounded-lg border border-amber-300/30 bg-amber-400/10 p-3 text-xs font-bold leading-5 text-amber-100">
                          Select a different taker token. This escrow already locks the same mint from the maker side.
                        </p>
                      )}
                      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-200">
                        Taker Offer Amount
                        <input
                          type="number"
                          value={takerAmount}
                          onChange={(event) => setTakerAmount(event.target.value)}
                          disabled={loading}
                          className="min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                        />
                      </label>
                      <button
                        onClick={depositTakerTokens}
                        disabled={
                          loading ||
                          selectedEscrow.account.depositTaker ||
                          !takerToken.mintAddress ||
                          selectedOfferUsesSameMint
                        }
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        <Rocket className="h-4 w-4" />
                        Deposit Taker Tokens
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === "escrows" && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-black">Your Maker Escrows</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Review taker offers, then execute or reject them.
                    </p>
                  </div>
                  <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black">
                    {makerEscrows.length} Created
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {makerEscrows.length === 0 ? (
                    <p className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
                      No escrows created by this wallet yet.
                    </p>
                  ) : (
                    makerEscrows.map((escrow) => renderEscrowCard(escrow, "maker"))
                  )}
                </div>
              </div>
            )}
          </div>

          <aside className="grid h-fit gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
              <h2 className="text-xl font-black">Flow</h2>
              <div className="mt-5 grid gap-4">
                {[
                  "Maker launches a classic SPL token.",
                  "Maker initializes escrow with only their token and amount.",
                  "Maker deposits tokens into the escrow vault.",
                  "Taker selects an escrow, chooses any SPL token, and deposits an offer.",
                  "Maker executes the swap or rejects the taker offer.",
                ].map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-black text-violet-100">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
              <h2 className="text-xl font-black">Contract Notes</h2>
              <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-300">
                <p className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                  The current IDL uses the classic SPL Token program, so this launchpad creates Tokenkeg mints.
                </p>
                <p className="flex gap-3">
                  <ImageIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                  Image and JSON metadata are uploaded to Pinata, but this contract does not store metadata on-chain.
                </p>
                <p className="flex gap-3">
                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                  Amounts use 9 decimals and are converted to raw token units before Anchor calls.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
