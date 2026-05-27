(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/frontend/app/idl/idlswap/escrow_application.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"address":"6YVxaXeFLifNp3Di9yjzKJVqr6DwgtQyuJCn32oP3A73","metadata":{"name":"escrow_application","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"deposit_maker","discriminator":[209,15,104,211,158,87,124,211],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"maker","writable":true,"signer":true},{"name":"mint_ata","writable":true},{"name":"escrow_make_ata","writable":true,"pda":{"seeds":[{"kind":"account","path":"escrow"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint_maker"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"mint_maker"},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"deposit_taker","discriminator":[201,8,155,255,245,56,72,24],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"taker","writable":true,"signer":true},{"name":"mint_taker_ata","writable":true},{"name":"escrow_taker_ata","writable":true,"pda":{"seeds":[{"kind":"account","path":"escrow"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint_taker"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"mint_taker"},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"execute","discriminator":[130,221,242,154,13,193,189,29],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"maker","writable":true,"signer":true},{"name":"make_ata","writable":true},{"name":"taker_ata","writable":true},{"name":"escrow_maker_ata","writable":true},{"name":"escrow_take_ata","writable":true},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"}],"args":[]},{"name":"inizialise_escrow","discriminator":[81,167,225,90,105,44,30,141],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"maker"},{"kind":"account","path":"mint_maker"},{"kind":"arg","path":"escrow_id"}]}},{"name":"maker","writable":true,"signer":true},{"name":"taker"},{"name":"mint_maker"},{"name":"mint_taker"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"escrow_id","type":"u64"},{"name":"amount_maker","type":"u64"},{"name":"amount_taker","type":"u64"}]}],"accounts":[{"name":"Escrow","discriminator":[31,213,123,187,186,22,218,155]}],"errors":[{"code":6000,"name":"AlreadyDeposited","msg":"Tokens are already deposited"},{"code":6001,"name":"EscrowNotReady","msg":"Escrow not ready"}],"types":[{"name":"Escrow","type":{"kind":"struct","fields":[{"name":"maker","type":"pubkey"},{"name":"taker","type":"pubkey"},{"name":"mint_maker","type":"pubkey"},{"name":"mint_taker","type":"pubkey"},{"name":"amount_maker","type":"u64"},{"name":"amount_taker","type":"u64"},{"name":"deposit_maker","type":"bool"},{"name":"deposit_taker","type":"bool"},{"name":"bump","type":"u8"},{"name":"escrow_id","type":"u64"}]}}]});}),
"[project]/app/frontend/app/TokenSwap/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EscrowUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$mintTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/mintTo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$initializeMint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/initializeMint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlswap$2f$escrow_application$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/frontend/app/idl/idlswap/escrow_application.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function EscrowUI() {
    _s();
    // ---------------- Wallet & Connection ----------------
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    // ---------------- State ----------------
    const [escrows, setEscrows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedEscrow, setSelectedEscrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("maker");
    // Maker state
    const [makerMintKeypair, setMakerMintKeypair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [takerMintInput, setTakerMintInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [makerAmount, setMakerAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [takerAmount, setTakerAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [escrowId, setEscrowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1"); // ← Added escrow ID
    const [escrowCreated, setEscrowCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Taker state
    const [takerMintKeypair, setTakerMintKeypair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mintAmount, setMintAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1000");
    // ---------------- Anchor Setup ----------------
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
        commitment: "processed"
    });
    const program = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlswap$2f$escrow_application$2e$json__$28$json$29$__["default"], provider);
    // ---------------- Load Escrows ----------------
    const fetchEscrows = async ()=>{
        try {
            const accounts = await program.account.escrow.all();
            setEscrows(accounts);
        } catch (err) {
            console.error("Fetch escrow error:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EscrowUI.useEffect": ()=>{
            if (wallet.publicKey) {
                fetchEscrows();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EscrowUI.useEffect"], [
        wallet.publicKey
    ]);
    // ============================================
    // MAKER SIDE FUNCTIONS
    // ============================================
    // STEP 1: Create Maker Mint
    const createMakerMint = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey) return;
            const makerMint = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].generate();
            const rent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinimumBalanceForRentExemptMint"])(connection);
            const txMint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]().add(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: makerMint.publicKey,
                space: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINT_SIZE"],
                lamports: rent,
                programId: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$initializeMint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitializeMintInstruction"])(makerMint.publicKey, 6, wallet.publicKey, wallet.publicKey));
            const signature = await wallet.sendTransaction(txMint, connection, {
                signers: [
                    makerMint
                ]
            });
            await connection.confirmTransaction(signature, 'confirmed');
            setMakerMintKeypair(makerMint);
            alert(`✅ Maker Mint Created!\n\n` + `Mint Address: ${makerMint.publicKey.toBase58()}\n\n` + `Next: Mint tokens to yourself (Step 2)`);
        } catch (err) {
            console.error(err);
            alert("❌ Mint creation failed");
        } finally{
            setLoading(false);
        }
    };
    // STEP 2: Mint Tokens to Maker
    const mintTokensToMaker = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !makerMintKeypair) return;
            const makerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMintKeypair.publicKey, wallet.publicKey);
            const txAta = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]().add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, makerAta, wallet.publicKey, makerMintKeypair.publicKey), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$mintTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMintToInstruction"])(makerMintKeypair.publicKey, makerAta, wallet.publicKey, 100_000_000 // 100 tokens with 6 decimals
            ));
            const signature = await wallet.sendTransaction(txAta, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            alert("✅ Successfully minted 100 tokens to your wallet!");
        } catch (err) {
            console.error(err);
            alert("❌ Minting failed");
        } finally{
            setLoading(false);
        }
    };
    // STEP 3: Initialize Escrow
    const initializeEscrow = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !makerMintKeypair || !takerMintInput) return;
            const takerMintPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](takerMintInput);
            const escrowIdNum = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](escrowId);
            // ✅ CORRECTED: Derive PDA with all 4 seeds including escrow_id
            const [escrowPda] = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("escrow"),
                wallet.publicKey.toBuffer(),
                makerMintKeypair.publicKey.toBuffer(),
                escrowIdNum.toArrayLike(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"], "le", 8)
            ], program.programId);
            console.log("Initializing escrow with PDA:", escrowPda.toBase58());
            await program.methods.inizialiseEscrow(escrowIdNum, new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](Number(makerAmount) * 1_000_000), new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](Number(takerAmount) * 1_000_000)).accounts({
                escrow: escrowPda,
                maker: wallet.publicKey,
                taker: wallet.publicKey,
                mintMaker: makerMintKeypair.publicKey,
                mintTaker: takerMintPubkey,
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            setEscrowCreated(true);
            alert("✅ Escrow initialized successfully!");
            await fetchEscrows();
        } catch (err) {
            console.error(err);
            alert("❌ Escrow initialization failed. Check the taker mint address!");
        } finally{
            setLoading(false);
        }
    };
    // STEP 4: Deposit Maker Tokens
    const depositMakerTokens = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !makerMintKeypair) return;
            const escrowIdNum = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](escrowId);
            // ✅ CORRECTED: Derive PDA with all 4 seeds
            const [escrowPda] = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("escrow"),
                wallet.publicKey.toBuffer(),
                makerMintKeypair.publicKey.toBuffer(),
                escrowIdNum.toArrayLike(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"], "le", 8)
            ], program.programId);
            const makerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMintKeypair.publicKey, wallet.publicKey);
            const escrowMakeAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMintKeypair.publicKey, escrowPda, true);
            await program.methods.depositMaker().accounts({
                escrow: escrowPda,
                maker: wallet.publicKey,
                mintAta: makerAta,
                escrowMakeAta: escrowMakeAta,
                mintMaker: makerMintKeypair.publicKey,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                associatedTokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSOCIATED_TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            alert("✅ Maker tokens deposited!\n\nEscrow is ready. Now wait for the taker to deposit.");
            await fetchEscrows();
        } catch (err) {
            console.error(err);
            alert("❌ Deposit failed");
        } finally{
            setLoading(false);
        }
    };
    // ============================================
    // TAKER SIDE FUNCTIONS
    // ============================================
    // STEP 1: Create Taker Mint
    const createTakerMint = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey) return;
            const takerMint = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].generate();
            const rent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinimumBalanceForRentExemptMint"])(connection);
            const txMint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]().add(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: takerMint.publicKey,
                space: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINT_SIZE"],
                lamports: rent,
                programId: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$initializeMint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitializeMintInstruction"])(takerMint.publicKey, 6, wallet.publicKey, wallet.publicKey));
            const signature = await wallet.sendTransaction(txMint, connection, {
                signers: [
                    takerMint
                ]
            });
            await connection.confirmTransaction(signature, 'confirmed');
            setTakerMintKeypair(takerMint);
            alert(`✅ Taker Mint Created!\n\n` + `Mint Address: ${takerMint.publicKey.toBase58()}\n\n` + `⚠️ IMPORTANT: Share this address with the maker!\n` + `They need it to create the escrow.`);
        } catch (err) {
            console.error(err);
            alert("❌ Mint creation failed");
        } finally{
            setLoading(false);
        }
    };
    // STEP 2: Mint Tokens to Taker
    const mintTokensToTaker = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !takerMintKeypair) return;
            const takerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMintKeypair.publicKey, wallet.publicKey);
            const ataExists = await connection.getAccountInfo(takerAta);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            if (!ataExists) {
                tx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, takerAta, wallet.publicKey, takerMintKeypair.publicKey));
            }
            tx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$mintTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMintToInstruction"])(takerMintKeypair.publicKey, takerAta, wallet.publicKey, Number(mintAmount) * 1_000_000));
            const signature = await wallet.sendTransaction(tx, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            alert(`✅ Successfully minted ${mintAmount} tokens to your wallet!`);
        } catch (err) {
            console.error(err);
            alert("❌ Minting failed");
        } finally{
            setLoading(false);
        }
    };
    // STEP 3: Deposit Taker Tokens
    const depositTakerTokens = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !selectedEscrow) return;
            const escrow = selectedEscrow.publicKey;
            const takerMint = selectedEscrow.account.mintTaker;
            const payAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, wallet.publicKey);
            const escrowTakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, escrow, true);
            await program.methods.depositTaker().accounts({
                escrow,
                taker: wallet.publicKey,
                mintTakerAta: payAta,
                escrowTakerAta: escrowTakerAta,
                mintTaker: takerMint,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                associatedTokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSOCIATED_TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            alert("✅ Taker tokens deposited!\n\nNow wait for the maker to execute the swap.");
            await fetchEscrows();
        } catch (err) {
            console.error(err);
            alert("❌ Deposit failed. Make sure you have enough tokens!");
        } finally{
            setLoading(false);
        }
    };
    // STEP 4: Execute Swap (Maker only)
    const executeSwap = async ()=>{
        try {
            setLoading(true);
            if (!wallet.publicKey || !selectedEscrow) return;
            const escrow = selectedEscrow.publicKey;
            const data = selectedEscrow.account;
            const makerMint = data.mintMaker;
            const takerMint = data.mintTaker;
            // Get the ATAs we need
            const makerReceiveAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, data.maker);
            const takerReceiveAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMint, data.taker);
            // Create ATAs if needed
            const txAta = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            const makerReceiveExists = await connection.getAccountInfo(makerReceiveAta);
            if (!makerReceiveExists) {
                txAta.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, makerReceiveAta, data.maker, takerMint));
            }
            const takerReceiveExists = await connection.getAccountInfo(takerReceiveAta);
            if (!takerReceiveExists) {
                txAta.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, takerReceiveAta, data.taker, makerMint));
            }
            if (txAta.instructions.length > 0) {
                const signature = await wallet.sendTransaction(txAta, connection);
                await connection.confirmTransaction(signature, 'confirmed');
                await new Promise((resolve)=>setTimeout(resolve, 1000));
            }
            const escrowMakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMint, escrow, true);
            const escrowTakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, escrow, true);
            await program.methods.execute().accounts({
                escrow,
                maker: data.maker,
                makeAta: makerReceiveAta,
                takerAta: takerReceiveAta,
                escrowMakerAta,
                escrowTakeAta: escrowTakerAta,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }).rpc();
            alert("🎉 Swap Completed Successfully!\n\nTokens have been exchanged and escrow closed.");
            setSelectedEscrow(null);
            await fetchEscrows();
        } catch (err) {
            console.error(err);
            alert("❌ Swap execution failed");
        } finally{
            setLoading(false);
        }
    };
    // ============================================
    // UI RENDERING
    // ============================================
    if (!wallet.publicKey) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "white",
                    padding: "60px 80px",
                    borderRadius: 16,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 64,
                            marginBottom: 20
                        },
                        children: "🔒"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: "0 0 16px 0",
                            fontSize: 28,
                            color: "#1a202c"
                        },
                        children: "Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            color: "#718096",
                            fontSize: 16
                        },
                        children: "Please connect your wallet to continue"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 511,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
            lineNumber: 504,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "40px 20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: 40,
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 48,
                                    margin: "0 0 12px 0",
                                    fontWeight: 700,
                                    textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                                },
                                children: "🔄 Token Escrow"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 18,
                                    margin: 0,
                                    opacity: 0.9
                                },
                                children: "Secure peer-to-peer token swaps on Solana"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            marginBottom: 32,
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("maker"),
                                style: {
                                    padding: "14px 32px",
                                    border: "none",
                                    background: activeTab === "maker" ? "white" : "rgba(255,255,255,0.2)",
                                    color: activeTab === "maker" ? "#667eea" : "white",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    fontSize: 16,
                                    borderRadius: 8,
                                    transition: "all 0.3s ease",
                                    boxShadow: activeTab === "maker" ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                                },
                                children: "👨‍💼 Maker (Create)"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("taker"),
                                style: {
                                    padding: "14px 32px",
                                    border: "none",
                                    background: activeTab === "taker" ? "white" : "rgba(255,255,255,0.2)",
                                    color: activeTab === "taker" ? "#667eea" : "white",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    fontSize: 16,
                                    borderRadius: 8,
                                    transition: "all 0.3s ease",
                                    boxShadow: activeTab === "taker" ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                                },
                                children: "🤝 Taker (Join)"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "white",
                            borderRadius: 16,
                            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                            overflow: "hidden"
                        },
                        children: [
                            activeTab === "maker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: "0 0 8px 0",
                                            fontSize: 28,
                                            color: "#1a202c"
                                        },
                                        children: "Create Escrow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 609,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: "0 0 32px 0",
                                            color: "#718096",
                                            fontSize: 15
                                        },
                                        children: "Follow these steps to create and fund an escrow offer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: makerMintKeypair ? "#48bb78" : "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Create Your Token Mint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Create the token mint for your side of the trade"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 17
                                            }, this),
                                            !makerMintKeypair ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: createMakerMint,
                                                    disabled: loading,
                                                    style: {
                                                        padding: "12px 28px",
                                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: loading ? "not-allowed" : "pointer",
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        transition: "transform 0.2s",
                                                        opacity: loading ? 0.6 : 1
                                                    },
                                                    onMouseEnter: (e)=>!loading && (e.currentTarget.style.transform = "translateY(-2px)"),
                                                    onMouseLeave: (e)=>e.currentTarget.style.transform = "translateY(0)",
                                                    children: "Create Token Mint"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginLeft: 44,
                                                    padding: 16,
                                                    background: "white",
                                                    borderRadius: 8,
                                                    border: "1px solid #e2e8f0"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: "#48bb78",
                                                            fontWeight: 600,
                                                            marginBottom: 8,
                                                            fontSize: 14
                                                        },
                                                        children: "✓ Token Mint Created"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            wordBreak: "break-all",
                                                            fontFamily: "monospace",
                                                            color: "#4a5568"
                                                        },
                                                        children: makerMintKeypair.publicKey.toBase58()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0",
                                            opacity: !makerMintKeypair ? 0.5 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Mint Tokens to Yourself"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Mint 100 tokens to your wallet for the escrow"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: mintTokensToMaker,
                                                    disabled: loading || !makerMintKeypair,
                                                    style: {
                                                        padding: "12px 28px",
                                                        background: !makerMintKeypair ? "#cbd5e0" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: !makerMintKeypair || loading ? "not-allowed" : "pointer",
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        opacity: loading ? 0.6 : 1
                                                    },
                                                    children: "Mint 100 Tokens"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0",
                                            opacity: !makerMintKeypair ? 0.5 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: escrowCreated ? "#48bb78" : "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Initialize Escrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: 12,
                                                            background: "#fef5e7",
                                                            borderRadius: 8,
                                                            marginBottom: 16,
                                                            border: "1px solid #f6e05e"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: 0,
                                                                    color: "#d97706",
                                                                    fontSize: 13,
                                                                    fontWeight: 600
                                                                },
                                                                children: "⚠️ You need the Taker's mint address first!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "4px 0 0 0",
                                                                    color: "#92400e",
                                                                    fontSize: 12
                                                                },
                                                                children: "The taker must create their mint and share the address with you."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    display: "block",
                                                                    marginBottom: 8,
                                                                    fontWeight: 600,
                                                                    color: "#4a5568",
                                                                    fontSize: 14
                                                                },
                                                                children: "Escrow ID (unique identifier)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 782,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: escrowId,
                                                                onChange: (e)=>setEscrowId(e.target.value),
                                                                placeholder: "1",
                                                                disabled: !makerMintKeypair,
                                                                style: {
                                                                    padding: "12px 16px",
                                                                    width: "200px",
                                                                    border: "2px solid #e2e8f0",
                                                                    borderRadius: 8,
                                                                    fontSize: 14,
                                                                    boxSizing: "border-box",
                                                                    outline: "none"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "6px 0 0 0",
                                                                    fontSize: 12,
                                                                    color: "#718096"
                                                                },
                                                                children: "Use a unique number for each escrow (default: 1)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    display: "block",
                                                                    marginBottom: 8,
                                                                    fontWeight: 600,
                                                                    color: "#4a5568",
                                                                    fontSize: 14
                                                                },
                                                                children: "Taker's Token Mint Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: takerMintInput,
                                                                onChange: (e)=>setTakerMintInput(e.target.value),
                                                                placeholder: "Paste taker's mint address here...",
                                                                disabled: !makerMintKeypair,
                                                                style: {
                                                                    padding: "12px 16px",
                                                                    width: "100%",
                                                                    border: "2px solid #e2e8f0",
                                                                    borderRadius: 8,
                                                                    fontSize: 13,
                                                                    fontFamily: "monospace",
                                                                    boxSizing: "border-box",
                                                                    outline: "none",
                                                                    transition: "border-color 0.2s"
                                                                },
                                                                onFocus: (e)=>e.currentTarget.style.borderColor = "#667eea",
                                                                onBlur: (e)=>e.currentTarget.style.borderColor = "#e2e8f0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: 16,
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            display: "block",
                                                                            marginBottom: 8,
                                                                            fontWeight: 600,
                                                                            color: "#4a5568",
                                                                            fontSize: 14
                                                                        },
                                                                        children: "You Offer (tokens)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 846,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: makerAmount,
                                                                        onChange: (e)=>setMakerAmount(e.target.value),
                                                                        disabled: !makerMintKeypair,
                                                                        style: {
                                                                            padding: "12px 16px",
                                                                            width: "100%",
                                                                            border: "2px solid #e2e8f0",
                                                                            borderRadius: 8,
                                                                            fontSize: 14,
                                                                            boxSizing: "border-box",
                                                                            outline: "none"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            display: "block",
                                                                            marginBottom: 8,
                                                                            fontWeight: 600,
                                                                            color: "#4a5568",
                                                                            fontSize: 14
                                                                        },
                                                                        children: "You Request (tokens)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: takerAmount,
                                                                        onChange: (e)=>setTakerAmount(e.target.value),
                                                                        disabled: !makerMintKeypair,
                                                                        style: {
                                                                            padding: "12px 16px",
                                                                            width: "100%",
                                                                            border: "2px solid #e2e8f0",
                                                                            borderRadius: 8,
                                                                            fontSize: 14,
                                                                            boxSizing: "border-box",
                                                                            outline: "none"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 881,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 871,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: initializeEscrow,
                                                        disabled: loading || !makerMintKeypair || !takerMintInput || escrowCreated,
                                                        style: {
                                                            padding: "12px 28px",
                                                            background: !makerMintKeypair || !takerMintInput || escrowCreated ? "#cbd5e0" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: 8,
                                                            cursor: !makerMintKeypair || !takerMintInput || escrowCreated || loading ? "not-allowed" : "pointer",
                                                            fontWeight: 600,
                                                            fontSize: 15,
                                                            opacity: loading ? 0.6 : 1
                                                        },
                                                        children: escrowCreated ? "✅ Escrow Initialized" : "Initialize Escrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 764,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0",
                                            opacity: !escrowCreated ? 0.5 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Deposit Your Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Transfer your tokens into the escrow account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 945,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: depositMakerTokens,
                                                    disabled: loading || !escrowCreated,
                                                    style: {
                                                        padding: "12px 28px",
                                                        background: !escrowCreated ? "#cbd5e0" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: !escrowCreated || loading ? "not-allowed" : "pointer",
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        opacity: loading ? 0.6 : 1
                                                    },
                                                    children: "Deposit Tokens"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: 24,
                                            background: "#fef5e7",
                                            borderRadius: 12,
                                            border: "2px solid #f6e05e"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: "#f59e0b",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Execute Swap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 991,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 976,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#92400e",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Wait for the taker to deposit, then complete the swap"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: "0 0 12px 0",
                                                            fontSize: 15,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Your Escrows:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 19
                                                    }, this),
                                                    escrows.filter((e)=>e.account.maker.equals(wallet.publicKey)).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a0aec0",
                                                            fontSize: 14
                                                        },
                                                        children: "No escrows created yet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gap: 12
                                                        },
                                                        children: escrows.filter((e)=>e.account.maker.equals(wallet.publicKey)).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: 16,
                                                                    background: "white",
                                                                    borderRadius: 8,
                                                                    border: "1px solid #e2e8f0"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                flex: 1
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: 12,
                                                                                        color: "#718096",
                                                                                        marginBottom: 6
                                                                                    },
                                                                                    children: [
                                                                                        "Escrow ID: ",
                                                                                        e.account.escrowId.toString(),
                                                                                        " | ",
                                                                                        e.publicKey.toBase58().slice(0, 8),
                                                                                        "..."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                    lineNumber: 1016,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: 13,
                                                                                        marginBottom: 4
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                display: "inline-block",
                                                                                                padding: "4px 10px",
                                                                                                borderRadius: 6,
                                                                                                fontSize: 11,
                                                                                                fontWeight: 600,
                                                                                                marginRight: 8,
                                                                                                background: e.account.depositMaker ? "#c6f6d5" : "#fed7d7",
                                                                                                color: e.account.depositMaker ? "#22543d" : "#742a2a"
                                                                                            },
                                                                                            children: [
                                                                                                "You: ",
                                                                                                e.account.depositMaker ? "✅ Deposited" : "❌ Pending"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                            lineNumber: 1020,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                display: "inline-block",
                                                                                                padding: "4px 10px",
                                                                                                borderRadius: 6,
                                                                                                fontSize: 11,
                                                                                                fontWeight: 600,
                                                                                                background: e.account.depositTaker ? "#c6f6d5" : "#fed7d7",
                                                                                                color: e.account.depositTaker ? "#22543d" : "#742a2a"
                                                                                            },
                                                                                            children: [
                                                                                                "Taker: ",
                                                                                                e.account.depositTaker ? "✅ Deposited" : "❌ Pending"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                            lineNumber: 1032,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                    lineNumber: 1019,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        e.account.depositMaker && e.account.depositTaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setSelectedEscrow(e);
                                                                                executeSwap();
                                                                            },
                                                                            disabled: loading,
                                                                            style: {
                                                                                padding: "10px 24px",
                                                                                background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
                                                                                color: "white",
                                                                                border: "none",
                                                                                borderRadius: 8,
                                                                                cursor: loading ? "not-allowed" : "pointer",
                                                                                fontWeight: 600,
                                                                                fontSize: 14,
                                                                                marginLeft: 16
                                                                            },
                                                                            children: "🎉 Execute Swap"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                            lineNumber: 1046,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1014,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 997,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 970,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this),
                            activeTab === "taker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: "0 0 8px 0",
                                            fontSize: 28,
                                            color: "#1a202c"
                                        },
                                        children: "Join Escrow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: "0 0 32px 0",
                                            color: "#718096",
                                            fontSize: 15
                                        },
                                        children: "Follow these steps to join and complete an escrow swap"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: takerMintKeypair ? "#48bb78" : "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Create Your Token Mint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1090,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Create the token mint for your side of the trade"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1107,
                                                columnNumber: 17
                                            }, this),
                                            !takerMintKeypair ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: createTakerMint,
                                                    disabled: loading,
                                                    style: {
                                                        padding: "12px 28px",
                                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: loading ? "not-allowed" : "pointer",
                                                        fontWeight: 600,
                                                        fontSize: 15,
                                                        transition: "transform 0.2s",
                                                        opacity: loading ? 0.6 : 1
                                                    },
                                                    onMouseEnter: (e)=>!loading && (e.currentTarget.style.transform = "translateY(-2px)"),
                                                    onMouseLeave: (e)=>e.currentTarget.style.transform = "translateY(0)",
                                                    children: "Create Token Mint"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1112,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1111,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: 16,
                                                            background: "white",
                                                            borderRadius: 8,
                                                            border: "1px solid #e2e8f0",
                                                            marginBottom: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: "#48bb78",
                                                                    fontWeight: 600,
                                                                    marginBottom: 8,
                                                                    fontSize: 14
                                                                },
                                                                children: "✓ Token Mint Created"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    wordBreak: "break-all",
                                                                    fontFamily: "monospace",
                                                                    color: "#4a5568"
                                                                },
                                                                children: takerMintKeypair.publicKey.toBase58()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1135,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: 12,
                                                            background: "#fef5e7",
                                                            borderRadius: 8,
                                                            border: "1px solid #f6e05e"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: 0,
                                                                    color: "#d97706",
                                                                    fontSize: 13,
                                                                    fontWeight: 600
                                                                },
                                                                children: "⚠️ Share this address with the maker!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1160,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "4px 0 0 0",
                                                                    color: "#92400e",
                                                                    fontSize: 12
                                                                },
                                                                children: "They need it to create the escrow."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0",
                                            opacity: !takerMintKeypair ? 0.5 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Mint Tokens to Yourself"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Mint tokens to your wallet for the swap"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: 16
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    display: "block",
                                                                    marginBottom: 8,
                                                                    fontWeight: 600,
                                                                    color: "#4a5568",
                                                                    fontSize: 14
                                                                },
                                                                children: "Amount to Mint"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1201,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: mintAmount,
                                                                onChange: (e)=>setMintAmount(e.target.value),
                                                                disabled: !takerMintKeypair,
                                                                style: {
                                                                    padding: "12px 16px",
                                                                    width: "200px",
                                                                    border: "2px solid #e2e8f0",
                                                                    borderRadius: 8,
                                                                    fontSize: 14,
                                                                    outline: "none"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1210,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: mintTokensToTaker,
                                                        disabled: loading || !takerMintKeypair,
                                                        style: {
                                                            padding: "12px 28px",
                                                            background: !takerMintKeypair ? "#cbd5e0" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: 8,
                                                            cursor: !takerMintKeypair || loading ? "not-allowed" : "pointer",
                                                            fontWeight: 600,
                                                            fontSize: 15,
                                                            opacity: loading ? 0.6 : 1
                                                        },
                                                        children: "Mint Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24,
                                            padding: 24,
                                            background: "#f7fafc",
                                            borderRadius: 12,
                                            border: "2px solid #e2e8f0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: selectedEscrow ? "#48bb78" : "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Select an Escrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: "0 0 16px 0",
                                                    color: "#4a5568",
                                                    fontSize: 14,
                                                    paddingLeft: 44
                                                },
                                                children: "Choose an available escrow created by the maker"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: escrows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "#a0aec0",
                                                        fontSize: 14
                                                    },
                                                    children: "No escrows available"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gap: 12
                                                    },
                                                    children: escrows.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: 16,
                                                                background: selectedEscrow?.publicKey.equals(e.publicKey) ? "#ebf4ff" : "white",
                                                                borderRadius: 8,
                                                                border: selectedEscrow?.publicKey.equals(e.publicKey) ? "2px solid #667eea" : "1px solid #e2e8f0",
                                                                cursor: "pointer",
                                                                transition: "all 0.2s"
                                                            },
                                                            onClick: ()=>setSelectedEscrow(e),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        alignItems: "start",
                                                                        marginBottom: 10
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                flex: 1
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: 12,
                                                                                        color: "#718096",
                                                                                        marginBottom: 8
                                                                                    },
                                                                                    children: [
                                                                                        "ID: ",
                                                                                        e.account.escrowId.toString(),
                                                                                        " | Creator: ",
                                                                                        e.account.maker.toBase58().slice(0, 8),
                                                                                        "..."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                    lineNumber: 1293,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: 13,
                                                                                        color: "#4a5568",
                                                                                        marginBottom: 4
                                                                                    },
                                                                                    children: [
                                                                                        "Offering: ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            children: (e.account.amountMaker.toNumber() / 1_000_000).toFixed(2)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                            lineNumber: 1297,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        " tokens"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                    lineNumber: 1296,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: 13,
                                                                                        color: "#4a5568"
                                                                                    },
                                                                                    children: [
                                                                                        "Requesting: ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            children: (e.account.amountTaker.toNumber() / 1_000_000).toFixed(2)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                            lineNumber: 1300,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " tokens"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                                    lineNumber: 1299,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                            lineNumber: 1292,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "6px 12px",
                                                                                background: e.account.depositMaker ? "#c6f6d5" : "#fed7d7",
                                                                                color: e.account.depositMaker ? "#22543d" : "#742a2a",
                                                                                borderRadius: 6,
                                                                                fontSize: 12,
                                                                                fontWeight: 600
                                                                            },
                                                                            children: e.account.depositMaker ? "✅ Funded" : "❌ Not Funded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                            lineNumber: 1303,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1291,
                                                                    columnNumber: 27
                                                                }, this),
                                                                selectedEscrow?.publicKey.equals(e.publicKey) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginTop: 10,
                                                                        padding: 10,
                                                                        background: "#667eea",
                                                                        color: "white",
                                                                        borderRadius: 6,
                                                                        fontSize: 12,
                                                                        textAlign: "center",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "✓ Selected"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1315,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 15
                                    }, this),
                                    selectedEscrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: 24,
                                            background: "#fef5e7",
                                            borderRadius: 12,
                                            border: "2px solid #f6e05e"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: "50%",
                                                            background: selectedEscrow.account.depositTaker ? "#48bb78" : "#cbd5e0",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            marginRight: 12
                                                        },
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1343,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: 18,
                                                            color: "#2d3748"
                                                        },
                                                        children: "Deposit & Wait"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1342,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: 44
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            margin: "0 0 16px 0",
                                                            color: "#92400e",
                                                            fontSize: 14
                                                        },
                                                        children: "Deposit your tokens and wait for the maker to execute the swap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 21
                                                    }, this),
                                                    !selectedEscrow.account.depositTaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: depositTakerTokens,
                                                        disabled: loading,
                                                        style: {
                                                            padding: "12px 28px",
                                                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: 8,
                                                            cursor: loading ? "not-allowed" : "pointer",
                                                            fontWeight: 600,
                                                            fontSize: 15,
                                                            marginBottom: 16,
                                                            opacity: loading ? 0.6 : 1
                                                        },
                                                        children: "Deposit Your Tokens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: 16,
                                                            background: "white",
                                                            borderRadius: 8,
                                                            border: "1px solid #e2e8f0"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "0 0 10px 0",
                                                                    fontSize: 14,
                                                                    fontWeight: 600,
                                                                    color: "#2d3748"
                                                                },
                                                                children: "Current Status:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1392,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginBottom: 6
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        display: "inline-block",
                                                                        padding: "4px 10px",
                                                                        borderRadius: 6,
                                                                        fontSize: 12,
                                                                        fontWeight: 600,
                                                                        marginRight: 8,
                                                                        background: selectedEscrow.account.depositMaker ? "#c6f6d5" : "#fed7d7",
                                                                        color: selectedEscrow.account.depositMaker ? "#22543d" : "#742a2a"
                                                                    },
                                                                    children: [
                                                                        "Maker: ",
                                                                        selectedEscrow.account.depositMaker ? "✅ Deposited" : "❌ Not Deposited"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1395,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        display: "inline-block",
                                                                        padding: "4px 10px",
                                                                        borderRadius: 6,
                                                                        fontSize: 12,
                                                                        fontWeight: 600,
                                                                        background: selectedEscrow.account.depositTaker ? "#c6f6d5" : "#fed7d7",
                                                                        color: selectedEscrow.account.depositTaker ? "#22543d" : "#742a2a"
                                                                    },
                                                                    children: [
                                                                        "You: ",
                                                                        selectedEscrow.account.depositTaker ? "✅ Deposited" : "❌ Not Deposited"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1410,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1409,
                                                                columnNumber: 23
                                                            }, this),
                                                            selectedEscrow.account.depositMaker && selectedEscrow.account.depositTaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: 12,
                                                                    padding: 12,
                                                                    background: "#c6f6d5",
                                                                    borderRadius: 6,
                                                                    color: "#22543d",
                                                                    fontSize: 13,
                                                                    fontWeight: 600,
                                                                    textAlign: "center"
                                                                },
                                                                children: "✅ Both parties deposited! Waiting for maker to execute the swap..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1423,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1386,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 16,
                                                            padding: 12,
                                                            background: "#fff3cd",
                                                            borderRadius: 8,
                                                            border: "1px solid #ffeaa7"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: 0,
                                                                color: "#856404",
                                                                fontSize: 12
                                                            },
                                                            children: [
                                                                "⚠️ ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Note:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 1446,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " Only the maker can execute the swap. Once both parties have deposited, the maker will complete the transaction."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1360,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1336,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1076,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        padding: 40,
                        borderRadius: 16,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 50,
                                height: 50,
                                border: "4px solid #f3f3f3",
                                borderTop: "4px solid #667eea",
                                borderRadius: "50%",
                                margin: "0 auto 20px",
                                animation: "spin 1s linear infinite"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1477,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                margin: 0,
                                color: "#1a202c"
                            },
                            children: "⏳ Processing Transaction..."
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1486,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: "8px 0 0 0",
                                color: "#718096",
                                fontSize: 14
                            },
                            children: "Please wait"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1487,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                    lineNumber: 1470,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1458,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
        lineNumber: 527,
        columnNumber: 5
    }, this);
}
_s(EscrowUI, "8XbiqeY00Vi1d4AwlfzNFZHzYoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = EscrowUI;
var _c;
__turbopack_context__.k.register(_c, "EscrowUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplaceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
function MarketplaceCard({ listing, isOwner, onBuy, onCancel, walletConnected, loading, cancelingListing, isWatchlisted, onToggleWatchlist }) {
    const isCanceling = cancelingListing === listing.escrowAddress;
    const handleImageError = (e)=>{
        const target = e.target;
        target.style.display = "none";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/[0.05]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square bg-slate-950",
                children: [
                    listing.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: listing.image,
                        alt: listing.name,
                        fill: true,
                        sizes: "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw",
                        unoptimized: true,
                        className: "h-full w-full object-cover",
                        onError: handleImageError
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(217,70,239,0.38),transparent_24%),linear-gradient(135deg,#111827,#3b0764_55%,#020617)] text-fuchsia-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                className: "relative h-12 w-12 drop-shadow-[0_0_24px_rgba(217,70,239,0.8)]"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 top-3 rounded-full bg-violet-600/85 px-3 py-1 text-xs font-black text-white shadow-lg backdrop-blur",
                        children: "Listed"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleWatchlist,
                        "aria-pressed": isWatchlisted,
                        "aria-label": isWatchlisted ? "Remove from watchlist" : "Add to watchlist",
                        title: isWatchlisted ? "Remove from watchlist" : "Add to watchlist",
                        className: `absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border shadow-lg backdrop-blur transition ${isWatchlisted ? "border-rose-300/50 bg-rose-500/85 text-white" : "border-white/15 bg-black/45 text-white hover:bg-white/15"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: `h-4 w-4 ${isWatchlisted ? "fill-current" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "truncate text-base font-black text-white",
                                children: listing.name || "Untitled NFT"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-slate-400",
                                children: [
                                    "Seller ",
                                    listing.seller.slice(0, 4),
                                    "...",
                                    listing.seller.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                        children: "Floor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-lg font-black text-white",
                                        children: [
                                            listing.price,
                                            " SOL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "truncate font-mono text-xs text-slate-400",
                                    children: listing.mintAddress
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    !isOwner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBuy,
                        disabled: loading || !walletConnected,
                        className: "mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-700 text-sm font-black text-white transition hover:from-violet-500 hover:to-fuchsia-600 disabled:cursor-not-allowed disabled:opacity-50",
                        children: [
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            loading ? "Processing" : walletConnected ? "Buy now" : "Connect wallet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        disabled: isCanceling || !walletConnected,
                        className: "mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-red-400/30 bg-red-500/10 text-sm font-black text-red-200 transition hover:bg-red-500/15 disabled:cursor-not-allowed disabled:opacity-60",
                        children: [
                            isCanceling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            isCanceling ? "Canceling" : "Cancel listing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = MarketplaceCard;
var _c;
__turbopack_context__.k.register(_c, "MarketplaceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketplaceSidePanel",
    ()=>MarketplaceSidePanel,
    "default",
    ()=>MarketplaceTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketPlaceCard$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const emptyAnalytics = {
    featuredCollections: [],
    topDrops: [],
    topSellers: [],
    recentSales: []
};
const artPalettes = [
    "from-orange-300 via-amber-500 to-violet-950",
    "from-lime-100 via-slate-300 to-violet-950",
    "from-cyan-200 via-fuchsia-300 to-slate-950",
    "from-red-500 via-rose-600 to-black",
    "from-violet-900 via-purple-600 to-amber-400",
    "from-indigo-950 via-violet-700 to-cyan-400",
    "from-slate-950 via-red-950 to-pink-500",
    "from-emerald-950 via-teal-800 to-slate-900"
];
const categories = [
    {
        label: "Trending",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        active: true
    },
    {
        label: "Top",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
    },
    {
        label: "New",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"]
    },
    {
        label: "Art",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        label: "PFPs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        label: "Gaming",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"]
    },
    {
        label: "Collectibles",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"]
    },
    {
        label: "Music",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"]
    },
    {
        label: "Photography",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
    },
    {
        label: "Utility",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    }
];
const WATCHLIST_STORAGE_NAMESPACE = "nft-market-watchlist";
const WATCHLIST_UPDATED_EVENT = "nft-market-watchlist-updated";
const EMPTY_WATCHLIST_SNAPSHOT = "[]";
function getListingKey(listing) {
    return listing.escrowAddress || listing.mintAddress;
}
function getWatchlistStorageKey(publicKey) {
    return `${WATCHLIST_STORAGE_NAMESPACE}:${publicKey || "guest"}`;
}
function getWatchlistSnapshot(storageKey) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.localStorage.getItem(storageKey) || EMPTY_WATCHLIST_SNAPSHOT;
}
function parseWatchlistSnapshot(snapshot) {
    try {
        const parsed = JSON.parse(snapshot);
        return Array.isArray(parsed) ? parsed.filter((id)=>typeof id === "string") : [];
    } catch (error) {
        console.error("Watchlist parse error:", error);
        return [];
    }
}
function subscribeToWatchlistUpdates(onStoreChange) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.addEventListener(WATCHLIST_UPDATED_EVENT, onStoreChange);
    window.addEventListener("storage", onStoreChange);
    return ()=>{
        window.removeEventListener(WATCHLIST_UPDATED_EVENT, onStoreChange);
        window.removeEventListener("storage", onStoreChange);
    };
}
function MiniArt({ accent, label, className = "h-full w-full" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden rounded-lg bg-gradient-to-br ${accent} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.42),transparent_16%),radial-gradient(circle_at_28%_78%,rgba(217,70,239,0.4),transparent_22%),linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.65))]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-[clamp(0.6rem,1.5vw,1.25rem)] font-black text-white shadow-[0_0_40px_rgba(255,255,255,0.22)] backdrop-blur-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40"
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_c = MiniArt;
function ArtTile({ imageUrl, accent, label, className }) {
    if (imageUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative overflow-hidden rounded-lg bg-slate-950 ${className || "h-full w-full"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: label,
                    fill: true,
                    sizes: "(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw",
                    unoptimized: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
        accent: accent,
        label: label,
        className: className
    }, void 0, false, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 258,
        columnNumber: 10
    }, this);
}
_c1 = ArtTile;
function useMarketplaceAnalytics(refreshKey = 0) {
    _s();
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyAnalytics);
    const [loadingAnalytics, setLoadingAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [manualRefresh, setManualRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketplaceAnalytics.useEffect": ()=>{
            const refresh = {
                "useMarketplaceAnalytics.useEffect.refresh": ()=>setManualRefresh({
                        "useMarketplaceAnalytics.useEffect.refresh": (value)=>value + 1
                    }["useMarketplaceAnalytics.useEffect.refresh"])
            }["useMarketplaceAnalytics.useEffect.refresh"];
            window.addEventListener("marketplace-analytics-updated", refresh);
            return ({
                "useMarketplaceAnalytics.useEffect": ()=>{
                    window.removeEventListener("marketplace-analytics-updated", refresh);
                }
            })["useMarketplaceAnalytics.useEffect"];
        }
    }["useMarketplaceAnalytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketplaceAnalytics.useEffect": ()=>{
            let active = true;
            async function loadAnalytics() {
                try {
                    setLoadingAnalytics(true);
                    const response = await fetch("/api/marketplace/analytics", {
                        cache: "no-store"
                    });
                    if (!response.ok) {
                        throw new Error("Failed to load marketplace analytics");
                    }
                    const data = await response.json();
                    if (active) {
                        setAnalytics({
                            featuredCollections: data.featuredCollections || [],
                            topDrops: data.topDrops || [],
                            topSellers: data.topSellers || [],
                            recentSales: data.recentSales || []
                        });
                    }
                } catch (error) {
                    console.error("Marketplace analytics fetch error:", error);
                    if (active) {
                        setAnalytics(emptyAnalytics);
                    }
                } finally{
                    if (active) {
                        setLoadingAnalytics(false);
                    }
                }
            }
            loadAnalytics();
            return ({
                "useMarketplaceAnalytics.useEffect": ()=>{
                    active = false;
                }
            })["useMarketplaceAnalytics.useEffect"];
        }
    }["useMarketplaceAnalytics.useEffect"], [
        refreshKey,
        manualRefresh
    ]);
    return {
        analytics,
        loadingAnalytics
    };
}
_s(useMarketplaceAnalytics, "OfXOfX6+tvb53/ra2A0UGLhzGGU=");
function formatSol(value) {
    return `${value.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: value > 0 && value < 1 ? 2 : 0
    })} SOL`;
}
function shortAddress(address) {
    if (!address) return "Unknown";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
function timeAgo(value) {
    if (!value) return "just now";
    const diffMs = Date.now() - new Date(value).getTime();
    const minutes = Math.max(0, Math.floor(diffMs / 60000));
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
}
function formatDropCountdown(drop, now, status) {
    if (status === "sold-out") return "SOLD OUT";
    if (status === "ended") return "Refreshing";
    const targetAt = status === "upcoming" ? drop.startsAt : drop.endsAt;
    const diffMs = Math.max(0, targetAt - now);
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds % 86400 / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    if (days > 0) {
        return `${days}d ${hours}h ${minutes}m`;
    }
    return [
        hours,
        minutes,
        seconds
    ].map((value)=>value.toString().padStart(2, "0")).join(":");
}
function getDropStatusLabel(status) {
    if (status === "sold-out") return "Sold Out";
    if (status === "upcoming") return "Upcoming";
    if (status === "ended") return "Ended";
    return "Live";
}
function getDropStatusClass(status) {
    if (status === "sold-out") return "border-white/15 bg-white/10 text-slate-200";
    if (status === "upcoming") return "border-sky-300/30 bg-sky-400/10 text-sky-200";
    if (status === "ended") return "border-amber-300/40 bg-amber-400/15 text-amber-100";
    return "border-emerald-300/35 bg-emerald-400/15 text-emerald-100";
}
function getDropActionLabel(status) {
    if (status === "sold-out") return "Sold Out";
    if (status === "upcoming") return "Mint Soon";
    if (status === "ended") return "Ended";
    return "Mint Now";
}
function getDropCountdownPrefix(status) {
    if (status === "upcoming") return "Starts in";
    if (status === "sold-out") return "";
    if (status === "ended") return "Next drop";
    return "Ends in";
}
function getDynamicDropStatus(drop, now) {
    if (drop.mintedCount >= drop.totalSupply) return "sold-out";
    if (drop.status === "ENDED") return "ended";
    if (now < drop.startsAt) return "upcoming";
    if (now >= drop.endsAt) return "ended";
    if (drop.status === "UPCOMING") return "upcoming";
    return "live";
}
function normalizeApiDrop(drop, index) {
    const startsAt = typeof drop.startsAt === "number" ? drop.startsAt : drop.startsAt ? new Date(drop.startsAt).getTime() : Date.now();
    const endsAt = typeof drop.endsAt === "number" ? drop.endsAt : drop.endsAt ? new Date(drop.endsAt).getTime() : Date.now();
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
        endsAt
    };
}
function EmptyState({ loadingMarketplace, listedNFTs, showWatchlistOnly, watchlistedCount = 0 }) {
    if (loadingMarketplace) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-fuchsia-300"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm font-semibold text-slate-300",
                    children: "Loading marketplace listings"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 450,
            columnNumber: 7
        }, this);
    }
    if (listedNFTs.length > 0) return null;
    if (showWatchlistOnly) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-12 w-12 items-center justify-center rounded-lg bg-rose-400/10 text-rose-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mt-4 text-xl font-black text-white",
                    children: watchlistedCount > 0 ? "No watched listings are live" : "Your watchlist is empty"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-md text-sm leading-6 text-slate-400",
                    children: watchlistedCount > 0 ? "Watched NFTs stay saved, and they will reappear here when matching listings are live." : "Tap the heart on any live listing to track it here for this wallet."
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 463,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.03] px-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-fuchsia-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "mt-4 text-xl font-black text-white",
                children: "No live listings yet"
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-md text-sm leading-6 text-slate-400",
                children: "Mint an NFT or list one from your collection to populate the live escrow-backed marketplace."
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
_c2 = EmptyState;
function MarketplaceTab({ listedNFTs, loadingMarketplace, loadMarketplace, handleBuyNFT, handleCancelListing, publicKey, walletConnected, loading, cancelingListing }) {
    _s1();
    const totalVolume = listedNFTs.reduce((sum, nft)=>sum + Number(nft.price || 0), 0);
    const floorPrice = listedNFTs.length > 0 ? Math.min(...listedNFTs.map((nft)=>Number(nft.price || 0))) : 2.45;
    const { analytics, loadingAnalytics } = useMarketplaceAnalytics(listedNFTs.length);
    const featuredCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[featuredCollections]": ()=>analytics.featuredCollections
    }["MarketplaceTab.useMemo[featuredCollections]"], [
        analytics.featuredCollections
    ]);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MarketplaceTab.useState": ()=>Date.now()
    }["MarketplaceTab.useState"]);
    const [dynamicDrops, setDynamicDrops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MarketplaceTab.useState": ()=>loadDynamicDrops(Date.now())
    }["MarketplaceTab.useState"]);
    const [showWatchlistOnly, setShowWatchlistOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const watchlistStorageKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[watchlistStorageKey]": ()=>getWatchlistStorageKey(publicKey)
    }["MarketplaceTab.useMemo[watchlistStorageKey]"], [
        publicKey
    ]);
    const watchlistSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToWatchlistUpdates, {
        "MarketplaceTab.useSyncExternalStore[watchlistSnapshot]": ()=>getWatchlistSnapshot(watchlistStorageKey)
    }["MarketplaceTab.useSyncExternalStore[watchlistSnapshot]"], {
        "MarketplaceTab.useSyncExternalStore[watchlistSnapshot]": ()=>EMPTY_WATCHLIST_SNAPSHOT
    }["MarketplaceTab.useSyncExternalStore[watchlistSnapshot]"]);
    const watchlistedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[watchlistedIds]": ()=>parseWatchlistSnapshot(watchlistSnapshot)
    }["MarketplaceTab.useMemo[watchlistedIds]"], [
        watchlistSnapshot
    ]);
    const watchlistedSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[watchlistedSet]": ()=>new Set(watchlistedIds)
    }["MarketplaceTab.useMemo[watchlistedSet]"], [
        watchlistedIds
    ]);
    const visibleListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[visibleListings]": ()=>showWatchlistOnly ? listedNFTs.filter({
                "MarketplaceTab.useMemo[visibleListings]": (listing)=>watchlistedSet.has(getListingKey(listing))
            }["MarketplaceTab.useMemo[visibleListings]"]) : listedNFTs
    }["MarketplaceTab.useMemo[visibleListings]"], [
        listedNFTs,
        showWatchlistOnly,
        watchlistedSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceTab.useEffect": ()=>{
            const timer = window.setInterval({
                "MarketplaceTab.useEffect.timer": ()=>{
                    const nextNow = Date.now();
                    setNow(nextNow);
                    setDynamicDrops({
                        "MarketplaceTab.useEffect.timer": (current)=>rotateExpiredDrops(current, nextNow)
                    }["MarketplaceTab.useEffect.timer"]);
                }
            }["MarketplaceTab.useEffect.timer"], 1000);
            return ({
                "MarketplaceTab.useEffect": ()=>window.clearInterval(timer)
            })["MarketplaceTab.useEffect"];
        }
    }["MarketplaceTab.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceTab.useEffect": ()=>{
            try {
                window.localStorage.setItem(DYNAMIC_DROPS_STORAGE_KEY, JSON.stringify(dynamicDrops));
            } catch (error) {
                console.error("Dynamic drops save error:", error);
            }
        }
    }["MarketplaceTab.useEffect"], [
        dynamicDrops
    ]);
    const toggleWatchlist = (listing)=>{
        const listingKey = getListingKey(listing);
        const next = watchlistedSet.has(listingKey) ? watchlistedIds.filter((id)=>id !== listingKey) : [
            ...watchlistedIds,
            listingKey
        ];
        try {
            window.localStorage.setItem(watchlistStorageKey, JSON.stringify(next));
            window.dispatchEvent(new Event(WATCHLIST_UPDATED_EVENT));
        } catch (error) {
            console.error("Watchlist save error:", error);
        }
    };
    const handleMintDrop = (dropId)=>{
        if (!walletConnected) return;
        setDynamicDrops((current)=>current.map((drop)=>{
                if (drop.id !== dropId) return drop;
                const status = getDynamicDropStatus(drop, Date.now());
                if (status !== "live" || drop.mintedCount >= drop.totalSupply) {
                    return drop;
                }
                return {
                    ...drop,
                    mintedCount: Math.min(drop.totalSupply, drop.mintedCount + 1),
                    lastMintedAt: Date.now()
                };
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(217,70,239,0.42),transparent_28%),radial-gradient(circle_at_52%_70%,rgba(139,92,246,0.32),transparent_22%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.52))]"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-24 hidden h-60 w-[34rem] rounded-[50%] border border-fuchsia-300/25 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.45)] lg:block"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative grid gap-8 lg:grid-cols-[1fr_0.78fr_0.28fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-h-60 flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "max-w-xl text-4xl font-black leading-tight text-white lg:text-5xl",
                                        children: [
                                            "Discover, Collect, and Trade",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent",
                                                children: "Extraordinary NFTs"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-base text-slate-300",
                                        children: "The best NFT marketplace on Solana"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-7 flex flex-col gap-3 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: loadMarketplace,
                                                disabled: loadingMarketplace,
                                                className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-700 px-7 text-sm font-black text-white transition hover:from-violet-500 hover:to-fuchsia-600 disabled:opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: `h-4 w-4 ${loadingMarketplace ? "animate-spin" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Explore NFTs"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 620,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-black/20 px-7 text-sm font-black text-white transition hover:bg-white/10",
                                                children: "Create NFT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative hidden min-h-60 lg:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-10 h-40 w-28 -rotate-[-18deg] rounded-2xl border border-cyan-300/35 bg-gradient-to-br from-cyan-500/70 to-violet-950 p-3 shadow-[0_20px_50px_rgba(34,211,238,0.2)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
                                            accent: "from-cyan-300 to-violet-900",
                                            label: "SOL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 635,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-32 top-0 h-48 w-32 rotate-6 rounded-2xl border border-fuchsia-300/35 bg-gradient-to-br from-violet-500/80 to-black p-3 shadow-[0_20px_55px_rgba(217,70,239,0.28)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
                                            accent: "from-violet-900 via-fuchsia-600 to-cyan-300",
                                            label: "NFT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-12 h-44 w-32 rotate-12 rounded-2xl border border-violet-300/35 bg-gradient-to-br from-slate-900 to-fuchsia-900 p-3 shadow-[0_20px_50px_rgba(139,92,246,0.28)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
                                            accent: "from-amber-200 via-violet-600 to-slate-950",
                                            label: "PFP"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5",
                                    children: [
                                        [
                                            "1.2M+",
                                            "Total Volume",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                                        ],
                                        [
                                            "45K+",
                                            "NFTs Sold",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"]
                                        ],
                                        [
                                            "12K+",
                                            "Active Traders",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                                        ],
                                        [
                                            "950+",
                                            "Collections",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"]
                                        ]
                                    ].map(([value, label, Icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-5 w-5 text-fuchsia-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-black text-white",
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.04] p-3",
                children: [
                    categories.map((category)=>{
                        const Icon = category.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `inline-flex h-9 shrink-0 items-center gap-2 rounded-lg px-4 text-xs font-bold transition ${category.active ? "bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this),
                                category.label
                            ]
                        }, category.label, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                            lineNumber: 674,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ml-auto inline-flex h-9 shrink-0 items-center gap-2 px-3 text-xs font-bold text-fuchsia-300",
                        children: [
                            "View All",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-white",
                                children: "Featured Collections"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 700,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
                        children: [
                            featuredCollections.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-full rounded-xl border border-dashed border-white/10 bg-black/20 p-8 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-slate-300",
                                    children: loadingAnalytics ? "Loading featured collections..." : "No featured collections in the local database yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 708,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this),
                            featuredCollections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "group overflow-hidden rounded-xl border border-white/10 bg-black/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[1.06]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                                imageUrl: collection.imageUrl,
                                                accent: artPalettes[index % artPalettes.length],
                                                label: collection.name.slice(0, 3).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 722,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-3 rounded-full bg-violet-600/80 px-3 py-1 text-xs font-black text-white",
                                                children: "Featured"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "flex items-center gap-1 text-sm font-black text-white",
                                                        children: [
                                                            collection.name,
                                                            collection.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                className: "h-4 w-4 text-sky-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-slate-300",
                                                        children: [
                                                            "Floor: ",
                                                            formatSol(collection.floorPrice)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-slate-500",
                                                        children: [
                                                            collection.itemCount.toLocaleString(),
                                                            " items"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 721,
                                        columnNumber: 15
                                    }, this)
                                }, collection.id, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 705,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 693,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black text-white",
                                        children: "Live Marketplace Listings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 751,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300",
                                        children: [
                                            listedNFTs.length,
                                            " Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 750,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowWatchlistOnly((value)=>!value),
                                        "aria-pressed": showWatchlistOnly,
                                        className: `inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-black transition ${showWatchlistOnly ? "border-rose-300/40 bg-rose-500/15 text-rose-100" : "border-white/10 bg-black/20 text-slate-300 hover:bg-white/[0.06] hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: `h-4 w-4 ${showWatchlistOnly ? "fill-current" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 767,
                                                columnNumber: 15
                                            }, this),
                                            "Watchlist",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-white/10 px-2 py-0.5 text-xs",
                                                children: watchlistedIds.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4 text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 774,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: [
                                                    "Floor ",
                                                    floorPrice.toFixed(2),
                                                    " SOL - Listed ",
                                                    totalVolume.toFixed(2),
                                                    " SOL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 773,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 749,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                        loadingMarketplace: loadingMarketplace,
                        listedNFTs: visibleListings,
                        showWatchlistOnly: showWatchlistOnly,
                        watchlistedCount: watchlistedIds.length
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 782,
                        columnNumber: 9
                    }, this),
                    visibleListings.length > 0 && !loadingMarketplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4",
                        children: visibleListings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketPlaceCard$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                listing: listing,
                                isOwner: publicKey === listing.seller,
                                onBuy: ()=>handleBuyNFT(listing),
                                onCancel: ()=>handleCancelListing(listing),
                                isWatchlisted: watchlistedSet.has(getListingKey(listing)),
                                onToggleWatchlist: ()=>toggleWatchlist(listing),
                                walletConnected: walletConnected,
                                loading: loading,
                                cancelingListing: cancelingListing
                            }, listing.escrowAddress, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 792,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 790,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black text-white",
                                        children: "Top NFT Drops"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            "Hot Mints"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 811,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-bold uppercase text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "h-4 w-4 text-emerald-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 819,
                                        columnNumber: 13
                                    }, this),
                                    "4 rotating drops, 100 supply each"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 810,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                        children: dynamicDrops.map((drop, index)=>{
                            const status = getDynamicDropStatus(drop, now);
                            const countdownPrefix = getDropCountdownPrefix(status);
                            const countdown = formatDropCountdown(drop, now, status);
                            const mintedPercent = Math.round(drop.mintedCount / drop.totalSupply * 100);
                            const isSoldOut = status === "sold-out";
                            const isMintDisabled = !walletConnected || status !== "live";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "group overflow-hidden rounded-xl border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.05]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[1.16]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                                imageUrl: drop.imageUrl,
                                                accent: drop.accent || artPalettes[(index + 5) % artPalettes.length],
                                                label: drop.name.slice(0, 3).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 839,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-3 top-3 flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `rounded-full border px-3 py-1 text-xs font-black ${getDropStatusClass(status)}`,
                                                        children: getDropStatusLabel(status)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-violet-300/30 bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-100",
                                                        children: drop.blockchain
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.68rem] font-black uppercase text-amber-200",
                                                        children: drop.hypeLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-1 truncate text-base font-black text-white",
                                                        children: drop.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 truncate text-xs text-slate-300",
                                                        children: [
                                                            "@ ",
                                                            drop.creator
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 856,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 838,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold uppercase text-slate-500",
                                                                children: "Mint Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-lg font-black text-white",
                                                                children: formatSol(drop.mintPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold uppercase text-slate-500",
                                                                children: "Supply"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm font-black text-white",
                                                                children: [
                                                                    drop.mintedCount.toLocaleString(),
                                                                    " / ",
                                                                    drop.totalSupply
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 868,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-xs font-bold text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Minted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    mintedPercent,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 h-2 overflow-hidden rounded-full bg-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-full rounded-full ${isSoldOut ? "bg-slate-200" : "bg-gradient-to-r from-emerald-300 via-amber-300 to-fuchsia-400"}`,
                                                            style: {
                                                                width: `${mintedPercent}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 887,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-white/10 bg-white/[0.04] p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-xs font-bold uppercase text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                                className: "h-4 w-4 text-amber-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 23
                                                            }, this),
                                                            countdownPrefix || "Drop Result"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-mono text-xl font-black text-white",
                                                        children: countdown
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 904,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleMintDrop(drop.id),
                                                disabled: isMintDisabled,
                                                className: `inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-black transition ${isMintDisabled ? "cursor-not-allowed border border-white/10 bg-white/10 text-slate-400" : "bg-gradient-to-r from-amber-400 to-fuchsia-600 text-white hover:from-amber-300 hover:to-fuchsia-500"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, this),
                                                    !walletConnected ? "Connect Wallet" : getDropActionLabel(status)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 914,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 867,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, drop.id, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 834,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 824,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 809,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 xl:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplaceSidePanel, {
                    analytics: analytics,
                    loadingAnalytics: loadingAnalytics
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 934,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 604,
        columnNumber: 5
    }, this);
}
_s1(MarketplaceTab, "+2b+gyQaHDCC2z6ZluUeQMyp9fs=", false, function() {
    return [
        useMarketplaceAnalytics,
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c3 = MarketplaceTab;
function MarketplaceSidePanel({ analytics: providedAnalytics, loadingAnalytics: providedLoadingAnalytics }) {
    _s2();
    const fetched = useMarketplaceAnalytics();
    const analytics = providedAnalytics || fetched.analytics;
    const loadingAnalytics = providedLoadingAnalytics ?? fetched.loadingAnalytics;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-lg font-black text-white",
                        children: "Top Sellers"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 955,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            analytics.topSellers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-lg border border-dashed border-white/10 bg-black/20 p-4 text-sm font-semibold text-slate-400",
                                children: loadingAnalytics ? "Loading top sellers..." : "No completed local sales yet."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 958,
                                columnNumber: 13
                            }, this),
                            analytics.topSellers.map((seller, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border-b border-white/10 pb-3 last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 text-sm text-slate-400",
                                            children: seller.rank || index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                            imageUrl: seller.avatarUrl,
                                            accent: artPalettes[index % artPalettes.length],
                                            label: (seller.displayName || seller.sellerAddress).slice(0, 2).toUpperCase(),
                                            className: "h-11 w-11 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 971,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-sm font-black text-white",
                                                    children: [
                                                        seller.displayName || shortAddress(seller.sellerAddress),
                                                        seller.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                            className: "ml-1 inline h-3.5 w-3.5 text-sky-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 980,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 978,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: [
                                                        formatSol(seller.totalVolume),
                                                        " - ",
                                                        seller.salesCount,
                                                        " sales"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 977,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, seller.sellerAddress, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 966,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 956,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mt-4 h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] text-sm font-bold text-white",
                        children: "View All Rankings"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 989,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 954,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-lg font-black text-white",
                        children: "Recent Sales"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            analytics.recentSales.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-lg border border-dashed border-white/10 bg-black/20 p-4 text-sm font-semibold text-slate-400",
                                children: loadingAnalytics ? "Loading recent sales..." : "No recent local sales yet."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 998,
                                columnNumber: 13
                            }, this),
                            analytics.recentSales.map((sale, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border-b border-white/10 pb-3 last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                            imageUrl: sale.imageUrl,
                                            accent: artPalettes[(index + 2) % artPalettes.length],
                                            label: sale.nftName.slice(0, 2).toUpperCase(),
                                            className: "h-11 w-11 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-xs font-black text-white",
                                                    children: sale.nftName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: timeAgo(sale.soldAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-slate-300",
                                            children: formatSol(sale.price)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1020,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, sale.id, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 996,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 994,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(MarketplaceSidePanel, "1zm60DMlSwxE47CaJeC4zCsV5kQ=", false, function() {
    return [
        useMarketplaceAnalytics
    ];
});
_c4 = MarketplaceSidePanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MiniArt");
__turbopack_context__.k.register(_c1, "ArtTile");
__turbopack_context__.k.register(_c2, "EmptyState");
__turbopack_context__.k.register(_c3, "MarketplaceTab");
__turbopack_context__.k.register(_c4, "MarketplaceSidePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-client] (ecmascript) <export default as WalletCards>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
function CollectionTab({ nfts, loadingNfts, publicKey, listingNFT, listPrice, loading, setListingNFT, setListPrice, handleListNFT, handleImageError, getNFTImage, getNFTName, nftMetadata = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",
                                children: "Wallet collection"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
                                children: "Manage owned NFTs"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
                                children: "Review NFTs in your connected wallet and list selected items on the marketplace."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        disabled: loadingNfts,
                        className: "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: `h-4 w-4 ${loadingNfts ? "animate-spin" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            "Refresh"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 grid gap-3 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-slate-200 bg-slate-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                children: "Owned NFTs"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-2xl font-black text-slate-950",
                                children: nfts.length
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-slate-200 bg-slate-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                children: "Wallet"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 truncate font-mono text-sm font-bold text-slate-950",
                                children: publicKey ? `${publicKey.slice(0, 6)}...${publicKey.slice(-6)}` : "Not connected"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-slate-200 bg-slate-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                children: "Listing status"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-2xl font-black text-slate-950",
                                children: listingNFT ? "Editing" : "Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            !publicKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mt-4 text-xl font-black text-slate-950",
                        children: "Connect a wallet"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 max-w-md text-sm leading-6 text-slate-600",
                        children: "Your collection appears here after a wallet is connected."
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this) : loadingNfts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm font-semibold text-slate-700",
                        children: "Loading collection"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this) : nfts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mt-4 text-xl font-black text-slate-950",
                        children: "No NFTs found"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 max-w-md text-sm leading-6 text-slate-600",
                        children: "NFTs held by this wallet will show up here. Listed NFTs may be held in escrow while they are on the marketplace."
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: nfts.map((nft)=>{
                    const fallbackMetadata = nftMetadata[nft.id];
                    const imageUrl = getNFTImage(nft, fallbackMetadata);
                    const nftName = getNFTName(nft, fallbackMetadata);
                    const isListing = listingNFT === nft.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square bg-slate-100",
                                children: [
                                    imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imageUrl,
                                        alt: nftName,
                                        className: "h-full w-full object-cover",
                                        onError: handleImageError
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-slate-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                            className: "h-10 w-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur",
                                        children: "In wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "truncate text-base font-black text-slate-950",
                                        children: nftName
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this),
                                    nft.content?.metadata?.symbol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 truncate text-xs text-slate-500",
                                        children: nft.content.metadata.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 21
                                    }, this),
                                    isListing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.1",
                                                        min: "0",
                                                        value: listPrice,
                                                        onChange: (e)=>setListPrice(e.target.value),
                                                        placeholder: "Price",
                                                        className: "h-10 w-full rounded-lg border border-slate-300 px-3 pr-12 text-sm outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500",
                                                        children: "SOL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleListNFT(nft.id, listPrice),
                                                        disabled: loading || !listPrice,
                                                        className: "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300",
                                                        children: [
                                                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-4 w-4 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 29
                                                            }, this),
                                                            "List"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setListingNFT(null),
                                                        disabled: loading,
                                                        className: "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Cancel"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setListingNFT(nft.id);
                                            setListPrice("1.0");
                                        },
                                        className: "mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, this),
                                            "List for sale"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                                lineNumber: 170,
                                columnNumber: 17
                            }, this)
                        ]
                    }, nft.id, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                        lineNumber: 148,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = CollectionTab;
var _c;
__turbopack_context__.k.register(_c, "CollectionTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MintTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MintTab({ name, description, price, attributes, loading, status, error, mintedNFT, walletConnected, setName, setDescription, setPrice, setImageFile, updateAttribute, addAttribute, handleMintAndList }) {
    _s();
    const [selectedImageName, setSelectedImageName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",
                                        children: "Creator flow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-2 text-3xl font-black tracking-tight text-slate-950",
                                        children: "Mint and list an NFT"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl text-sm leading-6 text-slate-600",
                                        children: "Add metadata, upload artwork to IPFS, mint on devnet, and list the asset in one transaction flow."
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-slate-800",
                                        children: "NFT name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100",
                                        placeholder: "Example: Neon Atlas #01",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-slate-800",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "min-h-32 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100",
                                        placeholder: "Tell buyers what makes this NFT distinct.",
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-slate-800",
                                        children: "Artwork"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-slate-400 hover:bg-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: (e)=>{
                                                    const file = e.target.files?.[0] || null;
                                                    setImageFile(file);
                                                    setSelectedImageName(file?.name || "");
                                                },
                                                className: "absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                className: "mb-3 h-8 w-8 text-slate-500 transition group-hover:text-slate-950"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-slate-800",
                                                children: selectedImageName || "Upload PNG, JPG, GIF, or WEBP"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Recommended square artwork for best cards."
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-slate-800",
                                        children: "Listing price"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.1",
                                                min: "0",
                                                className: "h-12 w-full rounded-lg border border-slate-300 bg-white px-4 pr-16 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100",
                                                placeholder: "0.00",
                                                value: price,
                                                onChange: (e)=>setPrice(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-700",
                                                children: "SOL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-slate-200 bg-slate-50 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                        className: "h-4 w-4 text-slate-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-800",
                                                        children: "Attributes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addAttribute,
                                                className: "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: attributes.map((attr, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100",
                                                        placeholder: "Trait, e.g. Background",
                                                        value: attr.trait_type,
                                                        onChange: (e)=>updateAttribute(index, "trait_type", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100",
                                                        placeholder: "Value, e.g. Midnight",
                                                        value: attr.value,
                                                        onChange: (e)=>updateAttribute(index, "value", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleMintAndList,
                                disabled: loading || !walletConnected,
                                className: "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        "Processing"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        "Mint and list NFT"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "grid content-start gap-4",
                children: [
                    !walletConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "mt-0.5 h-5 w-5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold",
                                            children: "Wallet required"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm leading-6",
                                            children: "Connect a Solana wallet before minting or listing NFTs."
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    (loading || status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-sky-200 bg-sky-50 p-5 text-sky-950",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mt-0.5 h-5 w-5 shrink-0 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "mt-0.5 h-5 w-5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold",
                                            children: "Transaction status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm leading-6",
                                            children: status || "Waiting for wallet confirmation..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-red-200 bg-red-50 p-5 text-red-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "mt-0.5 h-5 w-5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold",
                                            children: "Transaction failed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm leading-6",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    mintedNFT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-emerald-200 bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-slate-950",
                                                children: "NFT created"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "Minted and listed successfully."
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-slate-50 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                                children: "Mint address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 break-all font-mono text-xs text-slate-700",
                                                children: mintedNFT.mintAddress
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    mintedNFT.escrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-slate-50 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase tracking-wide text-slate-500",
                                                children: "Escrow address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 break-all font-mono text-xs text-slate-700",
                                                children: mintedNFT.escrow
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: mintedNFT.imageUri || "#",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Image"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: mintedNFT.metadataUri || "#",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50",
                                                children: "Metadata"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    !loading && !status && !error && !mintedNFT && walletConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-slate-200 bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-slate-950",
                                children: "Mint checklist"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-3 text-sm text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            "Use clear square artwork."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            "Add attributes buyers can scan quickly."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            "Set a realistic opening price in SOL."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(MintTab, "gkLPcAh/aaUGPFYLSfounQMboho=");
_c = MintTab;
var _c;
__turbopack_context__.k.register(_c, "MintTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePlus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/badge-plus.js [app-client] (ecmascript) <export default as BadgePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/list-plus.js [app-client] (ecmascript) <export default as ListPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-client] (ecmascript) <export default as WalletCards>");
"use client";
;
;
const navGroups = [
    {
        title: "Marketplace",
        items: [
            {
                label: "Explore",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
                tab: "marketplace"
            },
            {
                label: "Trending",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
            },
            {
                label: "Top",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
            },
            {
                label: "New",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"]
            }
        ]
    },
    {
        title: "Collections",
        items: [
            {
                label: "All Collections",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                tab: "marketplace"
            },
            {
                label: "My Collections",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"],
                tab: "collection"
            },
            {
                label: "Create Collection",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePlus$3e$__["BadgePlus"],
                tab: "mint"
            }
        ]
    },
    {
        title: "Create",
        items: [
            {
                label: "Mint NFT",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"],
                tab: "mint"
            },
            {
                label: "List NFT",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__["ListPlus"],
                tab: "collection"
            }
        ]
    },
    {
        title: "Account",
        items: [
            {
                label: "My NFTs",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"],
                tab: "collection"
            },
            {
                label: "Activity",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            },
            {
                label: "Watchlist",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
            }
        ]
    }
];
function Header({ activeTab, setActiveTab, listedNFTsCount, nftsCount }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "space-y-7 xl:sticky xl:top-28",
        children: [
            navGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-3 px-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500",
                            children: group.title
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: group.items.map((item)=>{
                                const Icon = item.icon;
                                const isActive = item.tab === activeTab;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>item.tab && setActiveTab(item.tab),
                                    className: `flex h-10 items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white shadow-[0_14px_34px_rgba(126,34,206,0.32)]" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex h-6 w-6 items-center justify-center rounded-md border ${isActive ? "border-white/20 bg-white/10" : "border-white/10 bg-white/[0.04]"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        item.label
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, group.title, true, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-black text-white",
                                children: "Live Floor Tracker"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "h-4 w-4 text-emerald-300"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 font-bold text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            "$157.23"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-300",
                                        children: "+2.45%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 font-bold text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-7 w-7 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            listedNFTsCount,
                                            " listed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Live"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 font-bold text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-7 w-7 rounded-lg bg-gradient-to-br from-orange-300 to-amber-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            nftsCount,
                                            " owned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-300",
                                        children: "Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("marketplace"),
                        className: "mt-5 w-full text-right text-sm font-bold text-fuchsia-300",
                        children: "View All"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/logic/buyNft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buyNFT",
    ()=>buyNFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript) <export * as web3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
"use client";
;
;
;
const ASSOCIATED_TOKEN_PROGRAM = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
async function buyNFT({ program, walletPublicKey, listing }) {
    try {
        const nftMintPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.mint);
        const escrowPda = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.escrowAddress);
        const sellerPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.seller);
        console.log("Starting NFT purchase...");
        console.log("Mint:", nftMintPubkey.toString());
        console.log("Escrow:", escrowPda.toString());
        console.log("Seller:", sellerPubkey.toString());
        console.log("Buyer:", walletPublicKey.toString());
        // Check wallet balance first
        const balance = await program.provider.connection.getBalance(walletPublicKey);
        const priceInLamports = listing.price * __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL;
        // Add buffer for transaction fees (0.01 SOL)
        const requiredBalance = priceInLamports + 0.01 * __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL;
        console.log("Wallet balance:", balance / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL, "SOL");
        console.log("NFT price:", listing.price, "SOL");
        console.log("Required (with fees):", requiredBalance / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL, "SOL");
        if (balance < requiredBalance) {
            const shortfall = (requiredBalance - balance) / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL;
            throw new Error(`Insufficient SOL. You have ${(balance / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL).toFixed(4)} SOL but need ${(requiredBalance / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL).toFixed(4)} SOL (${shortfall.toFixed(4)} SOL short)`);
        }
        // Buyer ATA
        const buyerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, walletPublicKey, false, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]);
        console.log("Buyer ATA:", buyerAta.toString());
        // Escrow ATA
        const escrowAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, escrowPda, true, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]);
        console.log("Escrow ATA:", escrowAta.toString());
        // Check if buyer ATA exists, log for debugging
        try {
            const buyerAtaInfo = await program.provider.connection.getAccountInfo(buyerAta);
            if (!buyerAtaInfo) {
                console.log("Buyer ATA does not exist yet, will be created by the program");
            } else {
                console.log("Buyer ATA already exists");
            }
        } catch (error) {
            console.log("Could not check buyer ATA, will be created if needed");
        }
        console.log("Sending buy transaction...");
        // Execute buy transaction with proper options
        const tx = await program.methods.buynft().accounts({
            escrow: escrowPda,
            seller: sellerPubkey,
            buyer: walletPublicKey,
            mint: nftMintPubkey,
            escrowNft: escrowAta,
            buyerNftAta: buyerAta,
            tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM,
            systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].SystemProgram.programId
        }).rpc({
            skipPreflight: false,
            commitment: "confirmed",
            maxRetries: 3
        });
        console.log("Transaction signature:", tx);
        // Wait for confirmation with timeout
        const latestBlockhash = await program.provider.connection.getLatestBlockhash();
        console.log("Waiting for transaction confirmation...");
        const confirmation = await program.provider.connection.confirmTransaction({
            signature: tx,
            blockhash: latestBlockhash.blockhash,
            lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
        }, "confirmed");
        if (confirmation.value.err) {
            throw new Error(`Transaction failed: ${JSON.stringify(confirmation.value.err)}`);
        }
        console.log("Transaction confirmed successfully!");
        console.log("Explorer URL:", `https://explorer.solana.com/tx/${tx}?cluster=devnet`);
        return {
            success: true,
            tx,
            explorerUrl: `https://explorer.solana.com/tx/${tx}?cluster=devnet`
        };
    } catch (error) {
        console.error("Buy NFT Error:", error);
        // Extract detailed error information
        let errorMessage = "Buy NFT failed";
        let errorDetails = "";
        if (error.message?.includes("insufficient lamports")) {
            errorMessage = "Insufficient SOL balance";
            errorDetails = "Please add more SOL to your wallet to cover the NFT price and transaction fees.";
        } else if (error.message?.includes("Insufficient SOL")) {
            errorMessage = error.message;
            errorDetails = "Please add more SOL to your wallet.";
        } else if (error.message?.includes("already been processed")) {
            errorMessage = "Transaction already processed";
            errorDetails = "This transaction may have already succeeded. Please refresh the page to see your NFT.";
        } else if (error.message?.includes("User rejected")) {
            errorMessage = "Transaction cancelled";
            errorDetails = "You rejected the transaction in your wallet.";
        } else if (error.message?.includes("Blockhash not found")) {
            errorMessage = "Network timeout";
            errorDetails = "The transaction took too long. Please try again.";
        } else if (error.logs) {
            // Parse program logs for specific errors
            const logs = error.logs.join("\n");
            console.error("Transaction logs:", logs);
            if (logs.includes("insufficient lamports")) {
                errorMessage = "Insufficient SOL balance";
                errorDetails = "Your wallet doesn't have enough SOL for this transaction.";
            } else if (logs.includes("custom program error")) {
                errorMessage = "Program execution failed";
                errorDetails = "The smart contract rejected this transaction. The NFT may no longer be available.";
            }
        } else if (error.message) {
            errorMessage = error.message;
        }
        return {
            success: false,
            error: errorMessage,
            errorDetails: errorDetails || errorMessage,
            logs: error.logs || []
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/logic/cancelListing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelListing",
    ()=>cancelListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript) <export * as web3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
"use client";
;
;
;
const ASSOCIATED_TOKEN_PROGRAM = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"]("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
async function cancelListing({ program, listing }) {
    try {
        const nftMintPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.mint);
        const escrowPda = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.escrowAddress);
        const sellerPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](listing.seller);
        // Seller ATA
        const sellerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, sellerPubkey, false, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]);
        // Escrow ATA
        const escrowAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, escrowPda, true);
        const tx = await program.methods.listbacknft().accounts({
            escrow: escrowPda,
            seller: sellerPubkey,
            mint: nftMintPubkey,
            escrowNft: escrowAta,
            sellerNftAta: sellerAta,
            tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM,
            systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].SystemProgram.programId
        }).rpc();
        return {
            success: true,
            tx
        };
    } catch (error) {
        console.error("Cancel Listing Logic Error:", error);
        return {
            success: false,
            error: error.message || "Cancel listing failed"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/logic/listNft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listNFT",
    ()=>listNFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript) <export * as web3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
"use client";
;
;
;
async function listNFT({ program, walletPublicKey, mintAddress, priceSOL }) {
    try {
        const nftMintPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](mintAddress);
        // Seller ATA
        const sellerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, walletPublicKey, false, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]);
        // Escrow PDA
        const [escrow] = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("nftescrow"),
            walletPublicKey.toBuffer(),
            nftMintPubkey.toBuffer()
        ], program.programId);
        // Escrow ATA
        const escrowAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(nftMintPubkey, escrow, true);
        const priceLamports = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](parseFloat(priceSOL) * __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL);
        const tx = await program.methods.listnft(priceLamports).accounts({
            escrow,
            seller: walletPublicKey,
            mint: nftMintPubkey,
            sellerNftAta: sellerAta,
            escrowNft: escrowAta,
            tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
        }).rpc();
        return {
            success: true,
            tx,
            escrow: escrow.toBase58()
        };
    } catch (error) {
        console.error("List NFT Logic Error:", error);
        return {
            success: false,
            error: error.message || "NFT listing failed"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/logic/marketplace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadMarketplaceListings",
    ()=>loadMarketplaceListings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript) <export * as web3>");
"use client";
;
async function loadMarketplaceListings({ program, heliusApiKey }) {
    try {
        // Fetch all escrow accounts
        const escrows = await program.account.nftEscrow.all();
        const listings = await Promise.all(escrows.map(async (escrow)=>{
            try {
                const mintAddress = escrow.account.mint.toString();
                // Fetch metadata from Helius DAS
                const response = await fetch(`https://devnet.helius-rpc.com/?api-key=${heliusApiKey}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        jsonrpc: "2.0",
                        id: "nft-fetch",
                        method: "getAsset",
                        params: {
                            id: mintAddress
                        }
                    })
                });
                const data = await response.json();
                let metadata = null;
                if (data.result) {
                    const nftData = data.result;
                    // Fallback metadata fetch
                    if (!nftData.content?.links?.image && nftData.content?.json_uri) {
                        const uri = nftData.content.json_uri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
                        const metaRes = await fetch(uri);
                        metadata = await metaRes.json();
                    }
                    return {
                        escrowAddress: escrow.publicKey.toString(),
                        mint: mintAddress,
                        seller: escrow.account.seller.toString(),
                        price: escrow.account.price.toNumber() / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__web3$3e$__["web3"].LAMPORTS_PER_SOL,
                        isSold: escrow.account.isSold,
                        name: nftData.content?.metadata?.name || metadata?.name || "Unnamed NFT",
                        image: nftData.content?.links?.image || metadata?.image || null,
                        metadata: nftData.content?.metadata || metadata
                    };
                }
                return null;
            } catch (err) {
                console.error("Listing parse error:", err);
                return null;
            }
        }));
        return {
            success: true,
            listings: listings.filter((l)=>l !== null)
        };
    } catch (error) {
        console.error("Marketplace Logic Error:", error);
        return {
            success: false,
            error: error.message || "Marketplace fetch failed"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/logic/mintNft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mintNFT",
    ()=>mintNFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-bundle-defaults/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-signer-wallet-adapters/dist/esm/plugins.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Amount.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Keypair.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/* ---------------- PINATA HELPERS ---------------- */ const uploadToPinata = async (file, jwt)=>{
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        body: formData
    });
    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};
const uploadJsonToPinata = async (json, jwt)=>{
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
            pinataContent: json
        })
    });
    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};
async function mintNFT({ wallet, name, description, imageFile, attributes, pinataJwt }) {
    try {
        if (!wallet.publicKey) {
            throw new Error("Wallet not connected");
        }
        // Upload image
        const imageUri = await uploadToPinata(imageFile, pinataJwt);
        // Create metadata
        const metadata = {
            name,
            symbol: "NNFT",
            description,
            image: imageUri,
            attributes: attributes.filter((a)=>a.trait_type && a.value)
        };
        // Upload metadata
        const metadataUri = await uploadJsonToPinata(metadata, pinataJwt);
        // Setup UMI
        const umi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUmi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clusterApiUrl"])("devnet")).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletAdapterIdentity"])(wallet)).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mplTokenMetadata"])());
        const mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSigner"])(umi);
        // Mint NFT
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNft"])(umi, {
            mint,
            name,
            uri: metadataUri,
            sellerFeeBasisPoints: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentAmount"])(5),
            tokenOwner: umi.identity.publicKey,
            isMutable: false
        }).sendAndConfirm(umi);
        return {
            success: true,
            mintAddress: mint.publicKey.toString(),
            imageUri,
            metadataUri
        };
    } catch (error) {
        console.error("Mint NFT Logic Error:", error);
        return {
            success: false,
            error: error.message || "Mint NFT failed"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/utils/metadata.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchMetadataFromUri",
    ()=>fetchMetadataFromUri,
    "getNFTImage",
    ()=>getNFTImage,
    "getNFTName",
    ()=>getNFTName,
    "normalizeIpfsUrl",
    ()=>normalizeIpfsUrl
]);
/* ================================
   IPFS NORMALIZER
================================ */ "use client";
const normalizeIpfsUrl = (uri)=>{
    if (!uri) return null;
    if (uri.startsWith("ipfs://")) {
        return uri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
    }
    return uri;
};
const fetchMetadataFromUri = async (uri)=>{
    try {
        const fetchUrl = normalizeIpfsUrl(uri);
        if (!fetchUrl) return null;
        const response = await fetch(fetchUrl);
        if (!response.ok) {
            throw new Error("Metadata fetch failed");
        }
        return await response.json();
    } catch (error) {
        console.error("Metadata Fetch Error:", error);
        return null;
    }
};
const getNFTImage = (nft, fallbackMetadata)=>{
    return nft?.content?.links?.image || nft?.content?.files?.[0]?.uri || fallbackMetadata?.image || null;
};
const getNFTName = (nft, fallbackMetadata)=>{
    return nft?.content?.metadata?.name || fallbackMetadata?.name || "Unnamed NFT";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/utils/pinata.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFileToPinata",
    ()=>uploadFileToPinata,
    "uploadJsonToPinata",
    ()=>uploadJsonToPinata
]);
/* ================================
   PINATA FILE UPLOAD
================================ */ "use client";
const uploadFileToPinata = async (file, pinataJwt)=>{
    try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${pinataJwt}`
            },
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Pinata file upload failed`);
        }
        const data = await response.json();
        return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
    } catch (error) {
        console.error("Pinata File Upload Error:", error);
        throw error;
    }
};
const uploadJsonToPinata = async (json, pinataJwt)=>{
    try {
        const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pinataJwt}`
            },
            body: JSON.stringify({
                pinataContent: json
            })
        });
        if (!response.ok) {
            throw new Error(`Pinata JSON upload failed`);
        }
        const data = await response.json();
        return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
    } catch (error) {
        console.error("Pinata JSON Upload Error:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/idl/idlnft/nft_escrow.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"address":"2BwDyx8kFk5sEgAo9ddzsXGVze7V1zdTEtrdKnPtGFmh","metadata":{"name":"Nftescrow","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"Listbacknft","discriminator":[30,141,76,228,66,4,10,198],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[110,102,116,101,115,99,114,111,119]},{"kind":"account","path":"seller"},{"kind":"account","path":"mint"}]}},{"name":"seller","writable":true,"signer":true},{"name":"mint"},{"name":"escrow_nft","writable":true},{"name":"seller_nft_ata","writable":true},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"buynft","discriminator":[145,30,59,179,112,217,202,54],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[110,102,116,101,115,99,114,111,119]},{"kind":"account","path":"seller"},{"kind":"account","path":"mint"}]}},{"name":"seller","writable":true},{"name":"buyer","writable":true,"signer":true},{"name":"mint"},{"name":"escrow_nft","writable":true},{"name":"buyer_nft_ata","writable":true,"pda":{"seeds":[{"kind":"account","path":"buyer"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"listnft","discriminator":[33,0,3,136,125,195,39,96],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[110,102,116,101,115,99,114,111,119]},{"kind":"account","path":"seller"},{"kind":"account","path":"mint"}]}},{"name":"seller","writable":true,"signer":true},{"name":"mint"},{"name":"seller_nft_ata","writable":true},{"name":"escrow_nft","writable":true,"pda":{"seeds":[{"kind":"account","path":"escrow"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"price","type":"u64"}]}],"accounts":[{"name":"NftEscrow","discriminator":[57,233,220,115,252,74,56,49]}],"events":[{"name":"Nftlisted","discriminator":[235,53,158,80,131,145,211,190]},{"name":"Nftsolded","discriminator":[225,150,245,213,109,215,183,30]}],"errors":[{"code":6000,"name":"PriceError","msg":"price need to more than 0"},{"code":6001,"name":"AlreadySold","msg":"nft already sold "}],"types":[{"name":"NftEscrow","type":{"kind":"struct","fields":[{"name":"seller","type":"pubkey"},{"name":"mint","type":"pubkey"},{"name":"price","type":"u64"},{"name":"bump","type":"u8"},{"name":"is_sold","type":"bool"}]}},{"name":"Nftlisted","type":{"kind":"struct","fields":[{"name":"seller","type":"pubkey"},{"name":"mint","type":"pubkey"},{"name":"price","type":"u64"}]}},{"name":"Nftsolded","type":{"kind":"struct","fields":[{"name":"seller","type":"pubkey"},{"name":"buyer","type":"pubkey"},{"name":"mint","type":"pubkey"},{"name":"price","type":"u64"}]}}]});}),
"[project]/app/frontend/app/nft_logic/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NFTMarketplace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-bundle-defaults/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-signer-wallet-adapters/dist/esm/plugins.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Amount.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Keypair.mjs [app-client] (ecmascript)");
//design and component proping
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketplaceTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$CollectionTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/CollectionTab/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MintTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/MintTab/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$Layout$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$buyNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/buyNft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$cancelListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/cancelListing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$listNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/listNft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$marketplace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/marketplace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$mintNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/mintNft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$metadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/utils/metadata.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$pinata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/utils/pinata.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlnft$2f$nft_escrow$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/frontend/app/idl/idlnft/nft_escrow.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjODVhNTcyOC1iYThiLTQ3MmMtYThlZi1lZDcyMTAyM2QyZDIiLCJlbWFpbCI6ImFkaXR5YS52bjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI2YTU0YTIxYjI1OWUwMzFkN2IwZCIsInNjb3BlZEtleVNlY3JldCI6ImVjZjc1NGEyZTc0NWQ0MTk0OWIzZmNiNWY3OTJmOTlkZGQ4YjQxYzM4N2I0MjI5OTgyNDU1YzQ0MzkzZjg0YTUiLCJleHAiOjE3OTc5MjM2Mzl9.DHmndCayocaYZ6gQ2xnxkX-eKkvKpwoPT5abFuCMOxE";
function NFTMarketplace() {
    _s();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    // Tab state
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("marketplace");
    // NFT Metadata
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1.0");
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            trait_type: "",
            value: ""
        }
    ]);
    // State
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mintedNFT, setMintedNFT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // NFT Collection state
    const [nfts, setNfts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingNfts, setLoadingNfts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nftMetadata, setNftMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Marketplace state
    const [listedNFTs, setListedNFTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingMarketplace, setLoadingMarketplace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listing state for collection NFTs
    const [listingNFT, setListingNFT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [listPrice, setListPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1.0");
    // Canceling state
    const [cancelingListing, setCancelingListing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Smart contract setup
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
        commitment: "confirmed"
    });
    const program = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlnft$2f$nft_escrow$2e$json__$28$json$29$__["default"], provider);
    const program_id = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlnft$2f$nft_escrow$2e$json__$28$json$29$__["default"].address);
    /* =====================================================
     FETCH METADATA FROM URI
  ===================================================== */ const fetchMetadataFromUri = async (uri)=>{
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
  ===================================================== */ const loadMarketplace = async ()=>{
        try {
            setLoadingMarketplace(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$marketplace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadMarketplaceListings"])({
                program,
                heliusApiKey: "a2d0cfd1-c261-4063-8549-0df94bbf1a35"
            });
            if (!result.success) {
                throw new Error(result.error);
            }
            if (!result.listings) {
                throw new Error(result.error);
            }
            setListedNFTs(result.listings);
        } catch (err) {
            console.error("Marketplace Handler Error:", err);
        } finally{
            setLoadingMarketplace(false);
        }
    };
    // Load marketplace when tab is opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NFTMarketplace.useEffect": ()=>{
            if (activeTab === "marketplace") {
                loadMarketplace();
            }
        }
    }["NFTMarketplace.useEffect"], [
        activeTab
    ]);
    // Load NFTs when wallet connects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NFTMarketplace.useEffect": ()=>{
            async function loadNFTs() {
                if (!publicKey) {
                    setNfts([]);
                    return;
                }
                setLoadingNfts(true);
                try {
                    const response = await fetch(`https://devnet.helius-rpc.com/?api-key=a2d0cfd1-c261-4063-8549-0df94bbf1a35`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            id: "nft-fetch",
                            method: "getAssetsByOwner",
                            params: {
                                ownerAddress: publicKey.toString(),
                                page: 1,
                                limit: 1000
                            }
                        })
                    });
                    const data = await response.json();
                    if (data.result && data.result.items) {
                        const nftItems = data.result.items.filter({
                            "NFTMarketplace.useEffect.loadNFTs.nftItems": (item)=>item.interface === "V1_NFT" || item.interface === "ProgrammableNFT" || !item.interface
                        }["NFTMarketplace.useEffect.loadNFTs.nftItems"]);
                        setNfts(nftItems);
                        // Fetch metadata for NFTs without images
                        for (const nft of nftItems){
                            const hasImage = nft.content?.links?.image || nft.content?.files?.[0]?.uri;
                            if (!hasImage && nft.content?.json_uri) {
                                const metadata = await fetchMetadataFromUri(nft.content.json_uri);
                                if (metadata) {
                                    setNftMetadata({
                                        "NFTMarketplace.useEffect.loadNFTs": (prev)=>({
                                                ...prev,
                                                [nft.id]: metadata
                                            })
                                    }["NFTMarketplace.useEffect.loadNFTs"]);
                                }
                            }
                        }
                    } else {
                        setNfts([]);
                    }
                } catch (error) {
                    console.error("Failed to load NFTs:", error);
                    setNfts([]);
                } finally{
                    setLoadingNfts(false);
                }
            }
            loadNFTs();
        }
    }["NFTMarketplace.useEffect"], [
        publicKey
    ]);
    const handleImageError = (e)=>{
        const target = e.target;
        target.style.display = "none";
        if (target.parentElement) {
            target.parentElement.innerHTML = '<div class="flex h-full items-center justify-center text-sm font-semibold text-slate-400">Image unavailable</div>';
        }
    };
    /* =====================================================
     ATTRIBUTE HANDLERS
  ===================================================== */ const updateAttribute = (index, field, value)=>{
        const updated = [
            ...attributes
        ];
        updated[index][field] = value;
        setAttributes(updated);
    };
    const addAttribute = ()=>{
        setAttributes([
            ...attributes,
            {
                trait_type: "",
                value: ""
            }
        ]);
    };
    /* =====================================================
     PINATA UPLOAD FUNCTIONS
  ===================================================== */ /* =====================================================
     MINT NFT WITH METADATA
  ===================================================== */ const mintNFTWithMetadata = async ()=>{
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
        const imageUri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$pinata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFileToPinata"])(imageFile, PINATA_JWT);
        console.log("Image uploaded:", imageUri);
        setStatus("Uploading metadata to IPFS...");
        const metadata = {
            name,
            symbol: "NNFT",
            description,
            image: imageUri,
            attributes: attributes.filter((a)=>a.trait_type && a.value)
        };
        const metadataUri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$pinata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadJsonToPinata"])(metadata, PINATA_JWT);
        console.log("Metadata uploaded:", metadataUri);
        setStatus("Creating NFT with Metaplex...");
        const umi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUmi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clusterApiUrl"])("devnet")).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletAdapterIdentity"])(wallet)).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mplTokenMetadata"])());
        const mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSigner"])(umi);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNft"])(umi, {
            mint,
            name,
            uri: metadataUri,
            sellerFeeBasisPoints: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentAmount"])(5),
            tokenOwner: umi.identity.publicKey,
            isMutable: false
        }).sendAndConfirm(umi);
        console.log("NFT minted:", mint.publicKey.toString());
        return {
            mintAddress: mint.publicKey.toString(),
            imageUri,
            metadataUri
        };
    };
    /* =====================================================
     MINT AND LIST
  ===================================================== */ const handleMintAndList = async ()=>{
        try {
            setLoading(true);
            setError(null);
            setStatus("Minting NFT...");
            const mintResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$mintNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mintNFT"])({
                wallet,
                name,
                description,
                imageFile: imageFile,
                attributes,
                pinataJwt: PINATA_JWT
            });
            if (!mintResult.success) {
                throw new Error(mintResult.error);
            }
            setStatus("Listing NFT...");
            const listResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$listNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listNFT"])({
                program,
                walletPublicKey: wallet.publicKey,
                mintAddress: mintResult.mintAddress,
                priceSOL: price
            });
            if (!listResult.success) {
                throw new Error(listResult.error);
            }
            setMintedNFT({
                mintAddress: mintResult.mintAddress,
                imageUri: mintResult.imageUri,
                metadataUri: mintResult.metadataUri,
                escrow: listResult.escrow
            });
            setStatus("NFT minted and listed successfully.");
            loadMarketplace();
        } catch (err) {
            console.error("Mint Handler Error:", err);
            setError(err.message || "Mint failed");
            setStatus("");
        } finally{
            setLoading(false);
        }
    };
    /* =====================================================
     BUY NFT FUNCTION
  ===================================================== */ const handleBuyNFT = async (listing)=>{
        try {
            if (!wallet.publicKey) {
                throw new Error("Wallet not connected");
            }
            setLoading(true);
            setError(null);
            setStatus("Processing NFT purchase...");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$buyNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buyNFT"])({
                program,
                walletPublicKey: wallet.publicKey,
                listing
            });
            if (!result.success) {
                throw new Error(result.error);
            }
            console.log("NFT Purchased TX:", result.tx);
            const mintAddress = listing.mintAddress || listing.mint;
            await fetch("/api/marketplace/sales", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    txSignature: result.tx,
                    escrowAddress: listing.escrowAddress,
                    mintAddress,
                    nftName: listing.name,
                    imageUrl: listing.image,
                    price: listing.price,
                    sellerAddress: listing.seller,
                    buyerAddress: wallet.publicKey.toString()
                })
            }).catch((recordError)=>{
                console.error("Failed to record marketplace sale:", recordError);
            });
            window.dispatchEvent(new Event("marketplace-analytics-updated"));
            setStatus("NFT purchased successfully.");
            // Refresh marketplace
            setTimeout(()=>{
                loadMarketplace();
            }, 2000);
        } catch (err) {
            console.error("Buy Handler Error:", err);
            setError(err.message || "Purchase failed");
            setStatus("");
        } finally{
            setLoading(false);
        }
    };
    const handleListNFT = async (mintAddress, priceSOL)=>{
        try {
            if (!wallet.publicKey) {
                throw new Error("Wallet not connected");
            }
            setLoading(true);
            setError(null);
            setStatus("Listing NFT on marketplace...");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$listNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listNFT"])({
                program,
                walletPublicKey: wallet.publicKey,
                mintAddress,
                priceSOL
            });
            if (!result.success) {
                throw new Error(result.error);
            }
            console.log("NFT Listed TX:", result.tx);
            setStatus("NFT listed successfully.");
            setListingNFT(null);
            // Refresh marketplace
            setTimeout(()=>{
                loadMarketplace();
            }, 2000);
        } catch (err) {
            console.error("List Handler Error:", err);
            setError(err.message || "Listing failed");
            setStatus("");
        } finally{
            setLoading(false);
        }
    };
    /* =====================================================
     CANCEL LISTING FUNCTION (NEW)
  ===================================================== */ const handleCancelListing = async (listing)=>{
        try {
            setCancelingListing(listing.escrowAddress);
            setError(null);
            setStatus("Canceling listing...");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$cancelListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelListing"])({
                program,
                listing
            });
            if (!result.success) {
                throw new Error(result.error);
            }
            console.log("Listing canceled TX:", result.tx);
            setStatus("Listing canceled. NFT returned to your wallet.");
            // Refresh marketplace
            setTimeout(()=>{
                loadMarketplace();
            }, 2000);
        } catch (err) {
            console.error("Cancel Handler Error:", err);
            setError(err.message || "Cancel listing failed");
            setStatus("");
        } finally{
            setCancelingListing(null);
        }
    };
    /* =====================================================
     UI
  ===================================================== */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#020412] px-4 py-6 text-white sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(88,28,135,0.34),transparent_32%),radial-gradient(circle_at_26%_78%,rgba(14,165,233,0.12),transparent_25%),linear-gradient(180deg,#020412_0%,#050617_45%,#020412_100%)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-[100rem] gap-5 xl:grid-cols-[13rem_minmax(0,1fr)_16rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$Layout$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeTab: activeTab,
                        setActiveTab: setActiveTab,
                        listedNFTsCount: listedNFTs.length,
                        nftsCount: nfts.length
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "min-w-0",
                        children: [
                            activeTab === "mint" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MintTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: name,
                                    description: description,
                                    price: price,
                                    attributes: attributes,
                                    loading: loading,
                                    status: status,
                                    error: error,
                                    mintedNFT: mintedNFT,
                                    walletConnected: wallet.connected,
                                    setName: setName,
                                    setDescription: setDescription,
                                    setPrice: setPrice,
                                    setImageFile: setImageFile,
                                    updateAttribute: updateAttribute,
                                    addAttribute: addAttribute,
                                    handleMintAndList: handleMintAndList
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this),
                            activeTab === "marketplace" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketplaceTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                listedNFTs: listedNFTs,
                                loadingMarketplace: loadingMarketplace,
                                loadMarketplace: loadMarketplace,
                                handleBuyNFT: handleBuyNFT,
                                handleCancelListing: handleCancelListing,
                                publicKey: publicKey?.toString(),
                                walletConnected: wallet.connected,
                                loading: loading,
                                cancelingListing: cancelingListing
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this),
                            activeTab === "collection" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$CollectionTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    nfts: nfts,
                                    loadingNfts: loadingNfts,
                                    publicKey: publicKey?.toString(),
                                    listingNFT: listingNFT,
                                    listPrice: listPrice,
                                    loading: loading,
                                    setListingNFT: setListingNFT,
                                    setListPrice: setListPrice,
                                    handleListNFT: handleListNFT,
                                    handleImageError: handleImageError,
                                    getNFTImage: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$metadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNFTImage"],
                                    getNFTName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$metadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNFTName"],
                                    nftMetadata: nftMetadata
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden space-y-5 xl:block xl:sticky xl:top-28 xl:self-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketplaceTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketplaceSidePanel"], {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
        lineNumber: 525,
        columnNumber: 5
    }, this);
}
_s(NFTMarketplace, "Y7lQ7w5VIGRyOEsle/FE931+keE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = NFTMarketplace;
var _c;
__turbopack_context__.k.register(_c, "NFTMarketplace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/LandingPage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Main
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletMultiButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gallery$2d$vertical$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryVerticalEnd$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/gallery-vertical-end.js [app-client] (ecmascript) <export default as GalleryVerticalEnd>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/repeat-2.js [app-client] (ecmascript) <export default as Repeat2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$TokenSwap$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/TokenSwap/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$nft_logic$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/nft_logic/page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navItems = [
    {
        label: "Home",
        view: "dashboard"
    },
    {
        label: "Swap",
        view: "swap"
    },
    {
        label: "NFT Market",
        view: "nft"
    },
    {
        label: "How it Works"
    },
    {
        label: "Docs"
    },
    {
        label: "Stats"
    }
];
const metrics = [
    {
        label: "Swaps Completed",
        value: "1.2M+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "text-orange-300"
    },
    {
        label: "NFTs Minted",
        value: "45K+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
        color: "text-violet-300"
    },
    {
        label: "Active Users",
        value: "12K+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "text-fuchsia-300"
    }
];
const benefits = [
    {
        title: "Lightning Fast",
        description: "Built on Solana's high-speed infrastructure",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        title: "Very Low Fees",
        description: "Minimal transaction costs for maximum savings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"]
    },
    {
        title: "Secure by Design",
        description: "Audited smart contracts and escrow protection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        title: "Creator First",
        description: "Empowering creators with royalty and ownership flows",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"]
    }
];
function WalletButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletMultiButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletMultiButton"], {
        className: "!h-11 !rounded-lg !bg-gradient-to-r !from-violet-500 !to-fuchsia-600 !px-5 !text-sm !font-bold !text-white !shadow-[0_12px_32px_rgba(147,51,234,0.35)] transition hover:!from-violet-400 hover:!to-fuchsia-500"
    }, void 0, false, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c = WalletButton;
function BrandMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 text-sm font-black text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]",
                children: "SD"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-black tracking-tight text-white",
                children: "Solana DApp"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c1 = BrandMark;
function ShellHeader({ activeView, onNavigate, onBack }) {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-4 z-50 mx-auto w-[min(88rem,calc(100%-2rem))] rounded-2xl border border-white/10 bg-[#08091a]/80 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center justify-between gap-4 px-4 py-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: activeView === "dashboard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandMark, {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onBack,
                                    className: "inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-bold text-white transition hover:border-violet-300/50 hover:bg-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        "Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandMark, {}, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-8 text-sm font-bold lg:flex",
                        children: navItems.map((item)=>{
                            const isActive = item.view === activeView;
                            return item.view ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate(item.view),
                                className: `transition hover:text-fuchsia-300 ${isActive ? "text-fuchsia-300" : "text-white"}`,
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white transition hover:text-fuchsia-300",
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen((open)=>!open),
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden",
                        "aria-label": "Toggle menu",
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 153,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 153,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 px-4 pb-4 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 py-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (item.view) onNavigate(item.view);
                                    setMenuOpen(false);
                                },
                                className: `rounded-lg px-3 py-2 text-left text-sm font-bold ${item.view === activeView ? "bg-white/10 text-fuchsia-300" : "text-white hover:bg-white/5"}`,
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(ShellHeader, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c2 = ShellHeader;
function HeroArtwork() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[28rem] overflow-hidden lg:min-h-[34rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(147,51,234,0.36),transparent_28%),radial-gradient(circle_at_56%_75%,rgba(217,70,239,0.28),transparent_24%),radial-gradient(circle_at_95%_40%,rgba(37,99,235,0.2),transparent_22%)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 top-4 h-72 w-72 rounded-full border border-violet-500/20 blur-sm"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 right-8 h-28 w-[26rem] max-w-[72vw] rounded-[50%] border border-fuchsia-300/40 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.65),inset_0_0_40px_rgba(168,85,247,0.45)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 right-16 h-12 w-[20rem] max-w-[58vw] rounded-[50%] border border-violet-300/50 bg-violet-500/20 blur-[1px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 right-28 h-8 w-[14rem] max-w-[42vw] rounded-[50%] bg-fuchsia-300/70 blur-xl"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[20%] top-[16%] hidden h-16 w-16 rotate-12 rounded-2xl border border-violet-300/30 bg-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:block"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[7%] top-[18%] h-12 w-12 rotate-45 rounded-lg border border-cyan-300/30 bg-indigo-500/30 shadow-[0_0_24px_rgba(99,102,241,0.45)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[18%] top-[42%] h-7 w-7 rotate-12 rounded-md border border-violet-200/40 bg-fuchsia-500/30"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[36%] top-[12%] hidden h-24 w-24 rounded-full border border-violet-300/30 bg-[#171044] shadow-[0_0_40px_rgba(147,51,234,0.45)] md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                    className: "absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-fuchsia-300"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[2%] top-[31%] hidden h-28 w-28 rounded-full border border-cyan-300/30 bg-[#171044] shadow-[0_0_46px_rgba(34,211,238,0.35)] sm:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-5 rotate-[-18deg] rounded-md bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-8 top-8 h-5 rotate-[-18deg] rounded bg-[#171044]"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-8 bottom-8 h-5 rotate-[-18deg] rounded bg-[#171044]"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[8.3rem] right-[25%] h-64 w-40 -rotate-6 rounded-[1.5rem] border border-violet-200/50 bg-gradient-to-b from-violet-500/70 via-[#32106f]/90 to-[#160833] p-4 shadow-[0_35px_70px_rgba(0,0,0,0.5),0_0_44px_rgba(168,85,247,0.65)] sm:h-72 sm:w-48",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                            className: "mb-5 h-12 w-12 text-violet-200"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-black uppercase tracking-wide text-white sm:text-base",
                            children: "Token Swap"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[8.6rem] right-[8%] h-56 w-36 rotate-7 rounded-[1.35rem] border border-violet-200/35 bg-gradient-to-b from-[#20135b]/95 via-[#160c3c]/95 to-[#090819] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.45),0_0_36px_rgba(99,102,241,0.45)] sm:h-64 sm:w-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/15 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                            className: "mb-5 h-11 w-11 text-violet-200"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-black uppercase tracking-wide text-white",
                            children: "NFT Market"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_c3 = HeroArtwork;
function Dashboard({ onNavigate }) {
    _s1();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10 sm:pt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative grid min-h-[34rem] items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-4 w-4 rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    "Built on Solana",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl",
                                children: [
                                    "Backing the Builders of the",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent",
                                        children: "New Open Internet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 max-w-2xl text-lg leading-8 text-slate-300",
                                children: "Empowering decentralized trading with lightning-fast swaps and a seamless NFT marketplace, built for creators and traders."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-9 flex flex-col gap-4 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("swap"),
                                        className: "inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-8 text-base font-black text-white shadow-[0_18px_45px_rgba(168,85,247,0.35)] transition hover:scale-[1.02] hover:from-violet-400 hover:to-fuchsia-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this),
                                            "Launch App"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("nft"),
                                        className: "inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-8 text-base font-black text-white transition hover:border-violet-300/50 hover:bg-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            "Explore Market"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid max-w-2xl gap-5 sm:grid-cols-3",
                                children: metrics.map((metric)=>{
                                    const Icon = metric.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 border-white/10 sm:border-r last:sm:border-r-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `h-7 w-7 ${metric.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-black text-white",
                                                        children: metric.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-400",
                                                        children: metric.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, metric.label, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroArtwork, {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 mb-5 flex flex-col gap-4 rounded-2xl border border-violet-400/20 bg-white/[0.04] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 text-base font-bold text-violet-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                className: "h-7 w-7 text-violet-300"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Fast"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-violet-400",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Secure"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-violet-400",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Decentralized"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-4 py-2 text-sm text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                className: "h-4 w-4 text-emerald-300"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            "Audited & Secure",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate("swap"),
                        className: "group grid min-h-56 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.07] md:grid-cols-[1fr_0.9fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/50 to-violet-950 text-violet-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                                                    className: "h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "Token Swap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 max-w-xs leading-6 text-slate-300",
                                                        children: "Secure, escrow-based peer-to-peer SPL token swaps."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-3 text-sm font-black text-white",
                                        children: [
                                            "Start Swapping",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 transition group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex min-h-44 items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.06] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "You Send"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"], {
                                                                className: "h-5 w-5 text-cyan-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 19
                                                            }, this),
                                                            "SOL"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#211049] text-violet-200 shadow-[0_0_26px_rgba(168,85,247,0.5)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.06] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "You Receive"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "245.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                                className: "h-5 w-5 text-blue-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 19
                                                            }, this),
                                                            "USDC"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate("nft"),
                        className: "group grid min-h-56 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.07] md:grid-cols-[1fr_0.86fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400/45 to-violet-950 text-pink-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gallery$2d$vertical$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryVerticalEnd$3e$__["GalleryVerticalEnd"], {
                                                    className: "h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "NFT Market"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 max-w-xs leading-6 text-slate-300",
                                                        children: "Mint, buy, and trade unique digital collectibles instantly."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-3 text-sm font-black text-white",
                                        children: [
                                            "Explore NFTs",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 transition group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/25 to-fuchsia-950/30 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-4 aspect-[1.35] overflow-hidden rounded-lg border border-white/10 bg-[#08091a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(217,70,239,0.55),transparent_28%),radial-gradient(circle_at_50%_38%,rgba(34,211,238,0.36),transparent_24%),linear-gradient(135deg,rgba(88,28,135,0.9),rgba(2,6,23,0.95))]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.9)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black text-white",
                                        children: "Cosmic Genesis #7321"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-black text-white",
                                                children: "2.45 SOL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/70 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-7 grid gap-4 rounded-2xl border border-violet-400/20 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:grid-cols-2 xl:grid-cols-4",
                children: benefits.map((benefit)=>{
                    const Icon = benefit.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black text-white",
                                        children: benefit.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm leading-5 text-slate-300",
                                        children: benefit.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 406,
                                columnNumber: 15
                            }, this)
                        ]
                    }, benefit.title, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            !wallet.publicKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-7 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-amber-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold",
                                    children: "Connect Phantom or another Solana wallet to unlock minting, listing, buying, and swapping."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 417,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 416,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s1(Dashboard, "i+/qxb0flJRE8MgvazOGMkNRtsk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c4 = Dashboard;
function Main() {
    _s2();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    if (activeView === "swap") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#020412] text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellHeader, {
                    activeView: activeView,
                    onNavigate: setActiveView,
                    onBack: ()=>setActiveView("dashboard")
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto w-[min(88rem,calc(100%-2rem))] py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$TokenSwap$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 438,
            columnNumber: 7
        }, this);
    }
    if (activeView === "nft") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#020412] text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellHeader, {
                    activeView: activeView,
                    onNavigate: setActiveView,
                    onBack: ()=>setActiveView("dashboard")
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$nft_logic$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 459,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 453,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-hidden bg-[#020412] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(88,28,135,0.42),transparent_34%),radial-gradient(circle_at_30%_78%,rgba(37,99,235,0.18),transparent_28%),linear-gradient(180deg,#020412_0%,#050619_44%,#020412_100%)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellHeader, {
                        activeView: activeView,
                        onNavigate: setActiveView
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {
                        onNavigate: setActiveView
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 465,
        columnNumber: 5
    }, this);
}
_s2(Main, "XwNR4FjxKHPH8zHpNRRjAqfD2l4=");
_c5 = Main;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "WalletButton");
__turbopack_context__.k.register(_c1, "BrandMark");
__turbopack_context__.k.register(_c2, "ShellHeader");
__turbopack_context__.k.register(_c3, "HeroArtwork");
__turbopack_context__.k.register(_c4, "Dashboard");
__turbopack_context__.k.register(_c5, "Main");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/wallethandler/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wallethandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$LandingPage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/LandingPage/page.tsx [app-client] (ecmascript)");
"use client";
;
;
function Wallethandler() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$LandingPage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/frontend/app/wallethandler/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Wallethandler;
var _c;
__turbopack_context__.k.register(_c, "Wallethandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/frontend/app/wallethandler/page.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/frontend/app/wallethandler/page.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=app_frontend_b2d51b49._.js.map