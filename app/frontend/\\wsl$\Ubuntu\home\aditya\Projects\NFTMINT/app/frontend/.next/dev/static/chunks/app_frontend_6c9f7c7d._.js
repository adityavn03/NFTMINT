(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/frontend/app/idl/idlswap/escrow_application.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"address":"6YVxaXeFLifNp3Di9yjzKJVqr6DwgtQyuJCn32oP3A73","metadata":{"name":"escrow_application","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"deposit_maker","discriminator":[209,15,104,211,158,87,124,211],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"maker","writable":true,"signer":true},{"name":"maker_ata","writable":true},{"name":"escrow_maker_ata","writable":true,"pda":{"seeds":[{"kind":"account","path":"escrow"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint_maker"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"mint_maker"},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"execute","discriminator":[130,221,242,154,13,193,189,29],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"maker","writable":true,"signer":true},{"name":"taker","writable":true},{"name":"maker_receive_ata","writable":true},{"name":"taker_receive_ata","writable":true},{"name":"escrow_maker_ata","writable":true},{"name":"escrow_taker_ata","writable":true},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"}],"args":[]},{"name":"inizialise_escrow","discriminator":[81,167,225,90,105,44,30,141],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"maker"},{"kind":"account","path":"mint_maker"},{"kind":"arg","path":"escrow_id"}]}},{"name":"maker","writable":true,"signer":true},{"name":"mint_maker"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"escrow_id","type":"u64"},{"name":"amount_maker","type":"u64"}]},{"name":"reject_offer","discriminator":[154,107,238,8,171,64,222,56],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"maker","writable":true,"signer":true},{"name":"taker","writable":true},{"name":"taker_ata","writable":true},{"name":"escrow_taker_ata","writable":true},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"}],"args":[]},{"name":"take_escrow","discriminator":[7,228,175,217,157,122,44,79],"accounts":[{"name":"escrow","writable":true,"pda":{"seeds":[{"kind":"const","value":[101,115,99,114,111,119]},{"kind":"account","path":"escrow.maker","account":"Escrow"},{"kind":"account","path":"escrow.mint_maker","account":"Escrow"},{"kind":"account","path":"escrow.escrow_id","account":"Escrow"}]}},{"name":"taker","writable":true,"signer":true},{"name":"mint_taker"},{"name":"taker_ata","writable":true},{"name":"escrow_taker_ata","writable":true,"pda":{"seeds":[{"kind":"account","path":"escrow"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint_taker"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"token_program","address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"associated_token_program","address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"amount_taker","type":"u64"}]}],"accounts":[{"name":"Escrow","discriminator":[31,213,123,187,186,22,218,155]}],"errors":[{"code":6000,"name":"InvalidAmount","msg":"Invalid amount"},{"code":6001,"name":"SameMint","msg":"Maker and taker mints cannot be the same"},{"code":6002,"name":"AlreadyDeposited","msg":"Tokens are already deposited"},{"code":6003,"name":"MakerNotDeposited","msg":"Maker has not deposited yet"},{"code":6004,"name":"AlreadyTaken","msg":"Escrow has already been taken"},{"code":6005,"name":"MakerCannotBeTaker","msg":"Maker cannot also be taker"},{"code":6006,"name":"EscrowNotReady","msg":"Escrow is not ready"},{"code":6007,"name":"TakerMissing","msg":"Taker is missing"},{"code":6008,"name":"Unauthorized","msg":"Unauthorized account"},{"code":6009,"name":"InvalidMint","msg":"Invalid mint"},{"code":6010,"name":"InvalidTokenAccount","msg":"Invalid token account"}],"types":[{"name":"Escrow","type":{"kind":"struct","fields":[{"name":"maker","type":"pubkey"},{"name":"taker","type":"pubkey"},{"name":"mint_maker","type":"pubkey"},{"name":"mint_taker","type":"pubkey"},{"name":"amount_maker","type":"u64"},{"name":"amount_taker","type":"u64"},{"name":"deposit_maker","type":"bool"},{"name":"deposit_taker","type":"bool"},{"name":"bump","type":"u8"},{"name":"escrow_id","type":"u64"}]}}]});}),
"[project]/app/frontend/app/TokenSwap/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EscrowUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@coral-xyz/anchor/dist/browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-bundle-defaults/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Signer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Signer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$web3js$2d$adapters$2f$dist$2f$esm$2f$PublicKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$web3js$2d$adapters$2f$dist$2f$esm$2f$Instruction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Instruction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$initializeMint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/initializeMint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$mintTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/instructions/mintTo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-client] (ecmascript) <export default as WalletCards>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
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
;
;
;
;
;
const DECIMALS = 9;
const EXPLORER_CLUSTER = "devnet";
const ZERO_PUBKEY = "11111111111111111111111111111111";
const MAX_METADATA_NAME_LENGTH = 32;
const MAX_METADATA_SYMBOL_LENGTH = 10;
const emptyTokenForm = {
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
    txSig: ""
};
const uploadFileToPinata = async (file, pinataJwt)=>{
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
        throw new Error(`Pinata image upload failed: ${response.statusText}`);
    }
    const data = await response.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};
const uploadJsonToPinata = async (json, pinataJwt)=>{
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
        throw new Error(`Pinata metadata upload failed: ${response.statusText}`);
    }
    const data = await response.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};
const shortenKey = (key)=>{
    if (!key) return "Not connected";
    const value = typeof key === "string" ? key : key.toBase58();
    return `${value.slice(0, 5)}...${value.slice(-5)}`;
};
const explorerUrl = (path, value)=>`https://explorer.solana.com/${path}/${value}?cluster=${EXPLORER_CLUSTER}`;
const toRawAmount = (value, decimals = DECIMALS)=>{
    const normalized = value.trim();
    if (!normalized || Number(normalized) <= 0) {
        throw new Error("Amount must be greater than 0");
    }
    const [whole, fraction = ""] = normalized.split(".");
    if (fraction.length > decimals) {
        throw new Error(`Use at most ${decimals} decimal places`);
    }
    const paddedFraction = fraction.padEnd(decimals, "0");
    return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](`${whole || "0"}${paddedFraction}`);
};
const formatRawUnits = (amount, decimals = DECIMALS)=>{
    const raw = amount.padStart(decimals + 1, "0");
    const whole = raw.slice(0, -decimals);
    const fraction = raw.slice(-decimals).replace(/0+$/, "");
    return fraction ? `${whole}.${fraction}` : whole;
};
const formatRawAmount = (amount, decimals = DECIMALS)=>formatRawUnits(amount.toString(), decimals);
const getEscrowPda = (maker, mintMaker, escrowId, programId)=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from("escrow"),
        maker.toBuffer(),
        mintMaker.toBuffer(),
        escrowId.toArrayLike(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"], "le", 8)
    ], programId)[0];
const formatActionError = (message)=>{
    if (message.includes("AccountDidNotDeserialize")) {
        return "This escrow account is stale or from an older program version. Refresh escrows and select a newly created escrow.";
    }
    if (message.includes("SameMint") || message.includes("Maker and taker mints cannot be the same")) {
        return "Choose a different taker token. The maker token and taker offer token cannot be the same mint.";
    }
    return message;
};
function EscrowUI() {
    _s();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"])();
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const pinataJwt = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2NmQxMzUzMC00NDE4LTQ5ODYtYmE4Mi04OGVhMjEwZWU5NjUiLCJlbWFpbCI6IjEwLmEuZC5pLnQueS5hLjMwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzMWI1YTk4M2VlNzU5MTdhNzZlYSIsInNjb3BlZEtleVNlY3JldCI6IjFlNGFkMWRjZjkxZTA3OThjNDMzOGQ1MGZjM2I2OTE4NjhhYmQ4NjIwYWUzOTI0ODk5YTZiMzhlNDExYWE3YTUiLCJleHAiOjE4MDA4OTMwOTd9.KWbvaNWyjBbBM15JpjMLB4TcJuxFyNrPqUUPK33dL8w");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("maker");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [solBalance, setSolBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [escrows, setEscrows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [walletTokens, setWalletTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedEscrow, setSelectedEscrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [makerToken, setMakerToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...emptyTokenForm,
        name: "Maker Token",
        symbol: "MAKER",
        amount: "1000"
    });
    const [takerToken, setTakerToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...emptyTokenForm,
        name: "Taker Token",
        symbol: "TAKER",
        amount: "1000"
    });
    const [escrowId, setEscrowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const [makerAmount, setMakerAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [takerAmount, setTakerAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [createdEscrow, setCreatedEscrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EscrowUI.useMemo[provider]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnchorProvider"](connection, wallet, {
                commitment: "processed"
            })
    }["EscrowUI.useMemo[provider]"], [
        connection,
        wallet
    ]);
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EscrowUI.useMemo[program]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$idl$2f$idlswap$2f$escrow_application$2e$json__$28$json$29$__["default"], provider)
    }["EscrowUI.useMemo[program]"], [
        provider
    ]);
    const umi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EscrowUI.useMemo[umi]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUmi"])(connection).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mplTokenMetadata"])())
    }["EscrowUI.useMemo[umi]"], [
        connection
    ]);
    const escrowClient = program.account;
    const makerEscrows = wallet.publicKey ? escrows.filter((escrow)=>escrow.account.maker.equals(wallet.publicKey)) : [];
    const joinableEscrows = escrows.filter((escrow)=>escrow.account.depositMaker && !escrow.account.depositTaker && escrow.account.taker.toBase58() === ZERO_PUBKEY && !escrow.account.maker.equals(wallet.publicKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].default));
    const activeEscrowCount = escrows.filter((escrow)=>!escrow.account.depositMaker || !escrow.account.depositTaker).length;
    const selectedOfferUsesSameMint = Boolean(selectedEscrow && takerToken.mintAddress) && selectedEscrow?.account.mintMaker.toBase58() === takerToken.mintAddress;
    const fetchEscrows = async ()=>{
        try {
            const accounts = await escrowClient.escrow.all();
            setEscrows(accounts);
            setSelectedEscrow((current)=>current && accounts.some((account)=>account.publicKey.equals(current.publicKey)) ? current : null);
        } catch (err) {
            console.error("Fetch escrow error:", err);
        }
    };
    const fetchFreshEscrow = async (escrow)=>{
        try {
            const account = await escrowClient.escrow.fetchNullable(escrow);
            if (!account) {
                throw new Error("This escrow no longer exists. Refresh escrows and select a current one.");
            }
            return account;
        } catch (err) {
            console.error("Fresh escrow fetch error:", err);
            throw new Error("This escrow account is stale or from an older program version. Refresh escrows and select a newly created escrow.");
        }
    };
    const fetchWalletTokens = async ()=>{
        if (!wallet.publicKey) return;
        try {
            const accounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
                programId: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            });
            const tokens = accounts.value.reduce((items, { account, pubkey })=>{
                const parsed = account.data.parsed;
                const { mint, tokenAmount } = parsed.info;
                if (tokenAmount.amount === "0") {
                    return items;
                }
                items.push({
                    mintAddress: mint,
                    ataAddress: pubkey.toBase58(),
                    balance: tokenAmount.uiAmountString ?? formatRawUnits(tokenAmount.amount, tokenAmount.decimals),
                    decimals: tokenAmount.decimals
                });
                return items;
            }, []);
            setWalletTokens(tokens);
        } catch (err) {
            console.error("Fetch wallet tokens error:", err);
            setWalletTokens([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EscrowUI.useEffect": ()=>{
            if (!wallet.publicKey) {
                setSolBalance(null);
                setEscrows([]);
                setWalletTokens([]);
                return;
            }
            fetchEscrows();
            fetchWalletTokens();
            connection.getBalance(wallet.publicKey).then({
                "EscrowUI.useEffect": (lamports)=>setSolBalance(lamports / __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"])
            }["EscrowUI.useEffect"]).catch({
                "EscrowUI.useEffect": ()=>setSolBalance(null)
            }["EscrowUI.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EscrowUI.useEffect"], [
        connection,
        wallet.publicKey
    ]);
    const updateToken = (side, patch)=>{
        if (side === "maker") {
            setMakerToken((current)=>({
                    ...current,
                    ...patch
                }));
            return;
        }
        setTakerToken((current)=>({
                ...current,
                ...patch
            }));
    };
    const handleImageChange = (side)=>(event)=>{
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onloadend = ()=>{
                updateToken(side, {
                    imageFile: file,
                    imagePreview: reader.result
                });
            };
            reader.readAsDataURL(file);
        };
    const clearImage = (side)=>updateToken(side, {
            imageFile: null,
            imagePreview: ""
        });
    const clearSelectedToken = (side)=>updateToken(side, {
            mintAddress: "",
            tokenAccountAddress: "",
            metadataUri: "",
            txSig: "",
            existingMintInput: "",
            decimals: DECIMALS
        });
    const copyText = async (value)=>{
        await navigator.clipboard.writeText(value);
    };
    const selectWalletToken = (side, token)=>{
        updateToken(side, {
            mintAddress: token.mintAddress,
            tokenAccountAddress: token.ataAddress,
            existingMintInput: token.mintAddress,
            decimals: token.decimals
        });
    };
    const selectExistingMint = async (side)=>{
        const token = side === "maker" ? makerToken : takerToken;
        await runAction("Selecting existing token mint...", async ()=>{
            const mint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](token.existingMintInput.trim());
            const mintAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMint"])(connection, mint, "confirmed", __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]);
            updateToken(side, {
                mintAddress: mint.toBase58(),
                tokenAccountAddress: "",
                decimals: mintAccount.decimals
            });
        });
    };
    const runAction = async (label, action)=>{
        setLoading(true);
        setStatus(label);
        setError("");
        try {
            await action();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Transaction failed";
            console.error(err);
            setError(formatActionError(message));
        } finally{
            setLoading(false);
            setStatus("");
        }
    };
    const launchToken = async (side)=>{
        await runAction(`Launching ${side} token...`, async ()=>{
            if (!wallet.publicKey) throw new Error("Connect your wallet first");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const token = side === "maker" ? makerToken : takerToken;
            if (!token.name || !token.symbol || !token.amount || !token.imageFile) {
                throw new Error("Fill token name, symbol, supply, and image");
            }
            const balance = await connection.getBalance(wallet.publicKey);
            if (balance < 0.03 * __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"]) {
                throw new Error("Not enough SOL for mint rent and transaction fees");
            }
            setStatus("Uploading token image to IPFS...");
            const imageUrl = await uploadFileToPinata(token.imageFile, pinataJwt);
            setStatus("Uploading token metadata to IPFS...");
            const metadataUri = await uploadJsonToPinata({
                name: token.name,
                symbol: token.symbol,
                description: token.description || `${token.name} (${token.symbol}) launched for escrow swapping`,
                image: imageUrl,
                attributes: [],
                properties: {
                    files: [
                        {
                            uri: imageUrl,
                            type: token.imageFile.type
                        }
                    ],
                    category: "fungible"
                }
            }, pinataJwt);
            setStatus("Creating SPL token mint...");
            const mintKeypair = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].generate();
            const rent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinimumBalanceForRentExemptMint"])(connection);
            const mint = mintKeypair.publicKey;
            const ata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(mint, wallet.publicKey);
            const rawAmount = BigInt(toRawAmount(token.amount).toString());
            const payer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Signer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoopSigner"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$web3js$2d$adapters$2f$dist$2f$esm$2f$PublicKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromWeb3JsPublicKey"])(wallet.publicKey));
            const metadataInstructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMetadataAccountV3"])(umi, {
                mint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$web3js$2d$adapters$2f$dist$2f$esm$2f$PublicKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromWeb3JsPublicKey"])(mint),
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
                    uses: null
                },
                isMutable: true,
                collectionDetails: null
            }).getInstructions().map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$web3js$2d$adapters$2f$dist$2f$esm$2f$Instruction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toWeb3JsInstruction"]);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]().add(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mint,
                space: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MINT_SIZE"],
                lamports: rent,
                programId: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$initializeMint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitializeMintInstruction"])(mint, DECIMALS, wallet.publicKey, wallet.publicKey, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, ata, wallet.publicKey, mint, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$mintTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMintToInstruction"])(mint, ata, wallet.publicKey, rawAmount, [], __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]), ...metadataInstructions);
            const signature = await wallet.sendTransaction(tx, connection, {
                signers: [
                    mintKeypair
                ]
            });
            const latest = await connection.getLatestBlockhash();
            await connection.confirmTransaction({
                signature,
                ...latest
            }, "confirmed");
            updateToken(side, {
                mintAddress: mint.toBase58(),
                tokenAccountAddress: ata.toBase58(),
                metadataUri,
                txSig: signature,
                decimals: DECIMALS
            });
            await fetchWalletTokens();
            await fetchEscrows();
        });
    };
    const initializeEscrow = async ()=>{
        await runAction("Creating escrow...", async ()=>{
            if (!wallet.publicKey) throw new Error("Connect your wallet first");
            if (!makerToken.mintAddress) throw new Error("Select or launch a maker token first");
            const makerMint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](makerToken.mintAddress);
            const escrowIdBn = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](escrowId || "0");
            const escrowPda = getEscrowPda(wallet.publicKey, makerMint, escrowIdBn, program.programId);
            await program.methods.inizialiseEscrow(escrowIdBn, toRawAmount(makerAmount, makerToken.decimals)).accounts({
                escrow: escrowPda,
                maker: wallet.publicKey,
                mintMaker: makerMint,
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            setCreatedEscrow(escrowPda);
            await fetchEscrows();
        });
    };
    const depositMakerTokens = async ()=>{
        await runAction("Depositing maker tokens...", async ()=>{
            if (!wallet.publicKey) throw new Error("Connect your wallet first");
            if (!makerToken.mintAddress) throw new Error("Select or launch a maker token first");
            const makerMint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](makerToken.mintAddress);
            const escrowIdBn = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](escrowId || "0");
            const escrowPda = createdEscrow ?? getEscrowPda(wallet.publicKey, makerMint, escrowIdBn, program.programId);
            const makerAta = makerToken.tokenAccountAddress ? new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](makerToken.tokenAccountAddress) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMint, wallet.publicKey);
            const escrowMakeAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(makerMint, escrowPda, true);
            await program.methods.depositMaker().accounts({
                escrow: escrowPda,
                maker: wallet.publicKey,
                makerAta,
                escrowMakerAta: escrowMakeAta,
                mintMaker: makerMint,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                associatedTokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSOCIATED_TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            await fetchEscrows();
        });
    };
    const depositTakerTokens = async ()=>{
        await runAction("Depositing taker tokens...", async ()=>{
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
            const takerMint = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](takerToken.mintAddress);
            if (escrowData.mintMaker.equals(takerMint)) {
                throw new Error("Choose a different taker token. The maker token and taker offer token cannot be the same mint.");
            }
            const payAta = takerToken.tokenAccountAddress ? new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](takerToken.tokenAccountAddress) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, wallet.publicKey);
            const payAtaAccount = await connection.getAccountInfo(payAta);
            if (!payAtaAccount) {
                throw new Error("Your wallet does not have a token account for this taker mint");
            }
            const escrowTakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(takerMint, escrow, true);
            await program.methods.takeEscrow(toRawAmount(takerAmount, takerToken.decimals)).accounts({
                escrow,
                taker: wallet.publicKey,
                mintTaker: takerMint,
                takerAta: payAta,
                escrowTakerAta,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"],
                associatedTokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSOCIATED_TOKEN_PROGRAM_ID"],
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            await fetchEscrows();
        });
    };
    const executeSwap = async (escrowToExecute)=>{
        await runAction("Executing escrow swap...", async ()=>{
            if (!wallet.publicKey) throw new Error("Connect your wallet first");
            const escrow = escrowToExecute.publicKey;
            const data = await fetchFreshEscrow(escrow);
            if (!data.maker.equals(wallet.publicKey)) {
                throw new Error("Only the maker can execute this escrow");
            }
            if (data.taker.toBase58() === ZERO_PUBKEY) {
                throw new Error("Taker has not joined this escrow yet");
            }
            const makerReceiveAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintTaker, data.maker);
            const takerReceiveAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintMaker, data.taker);
            const setupTx = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
            const makerReceiveExists = await connection.getAccountInfo(makerReceiveAta);
            if (!makerReceiveExists) {
                setupTx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, makerReceiveAta, data.maker, data.mintTaker, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]));
            }
            const takerReceiveExists = await connection.getAccountInfo(takerReceiveAta);
            if (!takerReceiveExists) {
                setupTx.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(wallet.publicKey, takerReceiveAta, data.taker, data.mintMaker, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]));
            }
            if (setupTx.instructions.length > 0) {
                const signature = await wallet.sendTransaction(setupTx, connection);
                const latest = await connection.getLatestBlockhash();
                await connection.confirmTransaction({
                    signature,
                    ...latest
                }, "confirmed");
            }
            const escrowMakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintMaker, escrow, true);
            const escrowTakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintTaker, escrow, true);
            await program.methods.execute().accounts({
                escrow,
                maker: wallet.publicKey,
                taker: data.taker,
                makerReceiveAta,
                takerReceiveAta,
                escrowMakerAta,
                escrowTakerAta,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }).rpc();
            setSelectedEscrow(null);
            await fetchEscrows();
        });
    };
    const rejectOffer = async (escrowToReject)=>{
        await runAction("Rejecting taker offer...", async ()=>{
            if (!wallet.publicKey) throw new Error("Connect your wallet first");
            if (!wallet.publicKey.equals(escrowToReject.account.maker)) {
                throw new Error("Only the maker can reject this offer");
            }
            const escrow = escrowToReject.publicKey;
            const data = await fetchFreshEscrow(escrow);
            if (data.taker.toBase58() === ZERO_PUBKEY) {
                throw new Error("No taker offer exists on this escrow");
            }
            const takerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintTaker, data.taker);
            const escrowTakerAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(data.mintTaker, escrow, true);
            await program.methods.rejectOffer().accounts({
                escrow,
                maker: wallet.publicKey,
                taker: data.taker,
                takerAta,
                escrowTakerAta,
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }).rpc();
            await fetchEscrows();
        });
    };
    const renderTokenLaunchpad = (side)=>{
        const token = side === "maker" ? makerToken : takerToken;
        const title = side === "maker" ? "Maker Token Launchpad" : "Taker Token Launchpad";
        const copy = side === "maker" ? "Create the token you will lock into escrow." : "Create or select the token you want to offer to the maker.";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-[0_0_28px_rgba(168,85,247,0.45)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 849,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 853,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-300",
                                            children: copy
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 854,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 852,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this),
                        token.mintAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 859,
                                    columnNumber: 15
                                }, this),
                                "Token selected"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 858,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                    lineNumber: 847,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-white/10 bg-[#080a1d]/55 p-4",
                            children: [
                                walletTokens.length > 0 && !token.mintAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-black text-slate-100",
                                                    children: "Use Coins From Your Wallet"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: fetchWalletTokens,
                                                    disabled: loading || !wallet.publicKey,
                                                    className: "text-xs font-bold text-violet-200 transition hover:text-white disabled:opacity-45",
                                                    children: "Refresh"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 869,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid max-h-64 gap-2 overflow-y-auto pr-1",
                                            children: walletTokens.map((walletToken)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>selectWalletToken(side, walletToken),
                                                    disabled: loading,
                                                    className: "grid gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-3 text-left transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45 sm:grid-cols-[1fr_auto] sm:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-mono text-xs text-slate-400",
                                                                    children: shortenKey(walletToken.mintAddress)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 888,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-1 block break-all font-mono text-[11px] font-normal text-slate-500",
                                                                    children: walletToken.mintAddress
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                    lineNumber: 891,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-200",
                                                            children: walletToken.balance
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, `${side}-${walletToken.ataAddress}`, true, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 879,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 868,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "grid flex-1 gap-2 text-sm font-bold text-slate-200",
                                            children: [
                                                "Paste Any SPL Token Mint",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: token.existingMintInput,
                                                    onChange: (event)=>updateToken(side, {
                                                            existingMintInput: event.target.value
                                                        }),
                                                    disabled: loading || Boolean(token.mintAddress),
                                                    placeholder: "Paste an existing Tokenkeg mint address",
                                                    className: "min-h-11 rounded-lg border border-white/10 bg-[#050719]/75 px-4 font-mono text-xs text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 905,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>selectExistingMint(side),
                                            disabled: loading || Boolean(token.mintAddress) || !token.existingMintInput,
                                            className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 17
                                                }, this),
                                                "Use Mint"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-xs leading-5 text-slate-400",
                                    children: "You do not need to own the mint authority. You only need a token account with balance when depositing."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 926,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 866,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "grid gap-2 text-sm font-bold text-slate-200",
                                    children: [
                                        "Token Name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: token.name,
                                            onChange: (event)=>updateToken(side, {
                                                    name: event.target.value
                                                }),
                                            disabled: loading || Boolean(token.mintAddress),
                                            placeholder: "e.g. Community Coin",
                                            className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 934,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 932,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "grid gap-2 text-sm font-bold text-slate-200",
                                    children: [
                                        "Symbol",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: token.symbol,
                                            onChange: (event)=>updateToken(side, {
                                                    symbol: event.target.value.toUpperCase()
                                                }),
                                            disabled: loading || Boolean(token.mintAddress),
                                            maxLength: 10,
                                            placeholder: "e.g. COM",
                                            className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm uppercase text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 942,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 931,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "grid gap-2 text-sm font-bold text-slate-200",
                            children: [
                                "Description",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: token.description,
                                    onChange: (event)=>updateToken(side, {
                                            description: event.target.value
                                        }),
                                    disabled: loading || Boolean(token.mintAddress),
                                    rows: 3,
                                    placeholder: "What is this token for?",
                                    className: "resize-none rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 957,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "grid gap-2 text-sm font-bold text-slate-200",
                            children: [
                                "Initial Supply",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "1",
                                    value: token.amount,
                                    onChange: (event)=>updateToken(side, {
                                            amount: event.target.value
                                        }),
                                    disabled: loading || Boolean(token.mintAddress),
                                    placeholder: "1000000",
                                    className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 971,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 969,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2 text-sm font-bold text-slate-200",
                            children: [
                                "Token Image",
                                !token.imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "grid cursor-pointer place-items-center rounded-lg border border-dashed border-white/15 bg-[#080a1d]/55 px-4 py-8 text-center transition hover:border-violet-300/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            className: "hidden",
                                            disabled: loading || Boolean(token.mintAddress),
                                            onChange: handleImageChange(side)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 986,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "mb-3 h-9 w-9 text-violet-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 993,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-200",
                                            children: "Upload token artwork"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 994,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 text-xs font-normal text-slate-500",
                                            children: "PNG or JPG recommended"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 995,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-lg border border-white/10 bg-[#080a1d]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 bg-cover bg-center",
                                            style: {
                                                backgroundImage: `url(${token.imagePreview})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 17
                                        }, this),
                                        !token.mintAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>clearImage(side),
                                            disabled: loading,
                                            className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-red-300 transition hover:bg-red-950",
                                            "aria-label": "Remove token image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1006,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 982,
                            columnNumber: 11
                        }, this),
                        token.mintAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-emerald-300/20 bg-emerald-400/10 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-black text-emerald-200",
                                            children: "Selected Mint"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>copyText(token.mintAddress),
                                            className: "text-violet-200 transition hover:text-white",
                                            "aria-label": "Copy mint address",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1023,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 break-all font-mono text-xs leading-5 text-slate-300",
                                    children: token.mintAddress
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs text-slate-400",
                                    children: [
                                        "Decimals: ",
                                        token.decimals
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1034,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: explorerUrl("address", token.mintAddress),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white",
                                            children: [
                                                "View Mint ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, this),
                                        token.txSig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: explorerUrl("tx", token.txSig),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white",
                                            children: [
                                                "View Tx ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>clearSelectedToken(side),
                                            disabled: loading,
                                            className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-45",
                                            children: "Change Token"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1020,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>launchToken(side),
                            disabled: loading || !wallet.publicKey || Boolean(token.mintAddress) || !token.name || !token.symbol || !token.amount || !token.imageFile,
                            className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(168,85,247,0.34)] transition hover:from-violet-400 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-45",
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 71
                                }, this),
                                token.mintAddress ? "Token Launched" : "Launch SPL Token"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1067,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                    lineNumber: 865,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
            lineNumber: 846,
            columnNumber: 7
        }, this);
    };
    const renderEscrowCard = (escrow, mode)=>{
        const isSelected = selectedEscrow?.publicKey.equals(escrow.publicKey);
        const takerJoined = escrow.account.taker.toBase58() !== ZERO_PUBKEY;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `rounded-lg border p-4 transition ${isSelected ? "border-violet-300/70 bg-violet-500/15" : "border-white/10 bg-white/[0.04]"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs text-slate-400",
                                children: [
                                    "ID ",
                                    escrow.account.escrowId.toString(),
                                    " | ",
                                    shortenKey(escrow.publicKey)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-slate-200",
                                children: [
                                    "Maker offers",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-white",
                                        children: formatRawAmount(escrow.account.amountMaker)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 15
                                    }, this),
                                    takerJoined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " ",
                                            "for taker offer",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-white",
                                                children: formatRawAmount(escrow.account.amountTaker)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: " and is waiting for a taker offer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2 text-xs font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2",
                                        children: [
                                            "Maker: ",
                                            escrow.account.depositMaker ? "Deposited" : "Pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2",
                                        children: [
                                            "Taker: ",
                                            escrow.account.depositTaker ? "Deposited" : "Pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2",
                                        children: [
                                            "Joined: ",
                                            takerJoined ? shortenKey(escrow.account.taker) : "No"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1102,
                        columnNumber: 11
                    }, this),
                    mode === "maker" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>rejectOffer(escrow),
                                disabled: loading || !wallet.publicKey?.equals(escrow.account.maker) || !escrow.account.depositTaker,
                                className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-red-300/40 disabled:cursor-not-allowed disabled:opacity-45",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 17
                                    }, this),
                                    "Reject"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>executeSwap(escrow),
                                disabled: loading || !wallet.publicKey?.equals(escrow.account.maker) || !escrow.account.depositMaker || !escrow.account.depositTaker,
                                className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-45",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 17
                                    }, this),
                                    "Execute"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1136,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedEscrow(escrow),
                        disabled: loading || escrow.account.depositTaker,
                        className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1169,
                                columnNumber: 15
                            }, this),
                            isSelected ? "Selected" : "Select"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1164,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1101,
                columnNumber: 9
            }, this)
        }, escrow.publicKey.toBase58(), false, {
            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
            lineNumber: 1093,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[#020412] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_8%,rgba(124,58,237,0.30),transparent_27%),radial-gradient(circle_at_16%_22%,rgba(126,34,206,0.28),transparent_24%),radial-gradient(circle_at_86%_84%,rgba(37,99,235,0.14),transparent_24%),linear-gradient(180deg,#020412_0%,#06071c_45%,#020412_100%)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:70px_70px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto w-full max-w-[92rem] px-4 pb-10 pt-6 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 shadow-[0_0_44px_rgba(168,85,247,0.35)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                                    className: "h-10 w-10 text-fuchsia-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl",
                                                        children: "Token Swap Launchpad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1191,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-base text-slate-300 sm:text-lg",
                                                        children: "Launch classic SPL tokens, lock them in escrow, and swap peer to peer."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid max-w-2xl grid-cols-3 gap-2 rounded-lg border border-white/10 bg-[#07081b]/70 p-1",
                                        children: [
                                            {
                                                key: "maker",
                                                label: "Maker",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"]
                                            },
                                            {
                                                key: "taker",
                                                label: "Taker",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
                                            },
                                            {
                                                key: "escrows",
                                                label: "Escrows",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
                                            }
                                        ].map((item)=>{
                                            const Icon = item.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(item.key),
                                                className: `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-black transition ${activeTab === item.key ? "bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-[0_12px_32px_rgba(168,85,247,0.35)]" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1217,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.label
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1208,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black",
                                                children: "Swap Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: "Wallet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1235,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-black",
                                                        children: shortenKey(wallet.publicKey)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1236,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: "Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black",
                                                        children: [
                                                            solBalance === null ? "--" : solBalance.toFixed(3),
                                                            " SOL"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1242,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1240,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: "Network"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-4 w-4 text-cyan-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1249,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Solana ",
                                                            EXPLORER_CLUSTER
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1248,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300",
                                                        children: "Escrows"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black text-emerald-300",
                                                        children: [
                                                            activeEscrowCount,
                                                            " Active"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1255,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: fetchEscrows,
                                        disabled: !wallet.publicKey || loading,
                                        className: "mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-violet-400/45 bg-violet-500/10 text-sm font-black text-violet-200 transition hover:bg-violet-500/18 disabled:cursor-not-allowed disabled:opacity-45",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1264,
                                                columnNumber: 15
                                            }, this),
                                            "Refresh Escrows"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1184,
                        columnNumber: 9
                    }, this),
                    (error || status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6",
                        children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-red-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1274,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1273,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-lg border border-violet-300/25 bg-violet-500/10 p-4 text-violet-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-5 w-5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1279,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold",
                                    children: status
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                            lineNumber: 1278,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6 grid gap-5 xl:grid-cols-[1fr_22rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-5",
                                children: [
                                    activeTab === "maker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            renderTokenLaunchpad("maker"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 border-b border-white/10 pb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-black",
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1294,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-black",
                                                                        children: "Create Escrow Terms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1298,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-slate-300",
                                                                        children: "Initialize with your token only. Takers choose their token when they join."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1299,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1297,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 grid gap-4 md:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "grid gap-2 text-sm font-bold text-slate-200",
                                                                children: [
                                                                    "Escrow ID",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: escrowId,
                                                                        onChange: (event)=>setEscrowId(event.target.value),
                                                                        disabled: loading,
                                                                        className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1308,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1306,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "grid gap-2 text-sm font-bold text-slate-200",
                                                                children: [
                                                                    "Maker Deposit Amount",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: makerAmount,
                                                                        onChange: (event)=>setMakerAmount(event.target.value),
                                                                        disabled: loading,
                                                                        className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1318,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1316,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 grid gap-3 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: initializeEscrow,
                                                                disabled: loading || !wallet.publicKey || !makerToken.mintAddress,
                                                                className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-5 text-sm font-black text-white transition hover:border-violet-300/50 disabled:cursor-not-allowed disabled:opacity-45",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1338,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Initialize Escrow"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: depositMakerTokens,
                                                                disabled: loading || !wallet.publicKey || !makerToken.mintAddress,
                                                                className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(168,85,247,0.34)] transition hover:from-violet-400 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-45",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1346,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Deposit Maker Tokens"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1292,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === "taker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            renderTokenLaunchpad("taker"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 border-b border-white/10 pb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-black",
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-black",
                                                                        children: "Join an Escrow"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1364,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-slate-300",
                                                                        children: "Select a maker escrow, choose your token, and propose your amount."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1365,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1363,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 grid gap-3",
                                                        children: joinableEscrows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400",
                                                            children: "No joinable escrows found."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                            lineNumber: 1373,
                                                            columnNumber: 23
                                                        }, this) : joinableEscrows.map((escrow)=>renderEscrowCard(escrow, "taker"))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 19
                                                    }, this),
                                                    selectedEscrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 rounded-lg border border-fuchsia-400/25 bg-fuchsia-500/10 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-black",
                                                                children: "Your Offer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs leading-5 text-slate-300",
                                                                children: "The maker will review your token mint and amount before executing."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1384,
                                                                columnNumber: 23
                                                            }, this),
                                                            selectedOfferUsesSameMint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 rounded-lg border border-amber-300/30 bg-amber-400/10 p-3 text-xs font-bold leading-5 text-amber-100",
                                                                children: "Select a different taker token. This escrow already locks the same mint from the maker side."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "mt-4 grid gap-2 text-sm font-bold text-slate-200",
                                                                children: [
                                                                    "Taker Offer Amount",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: takerAmount,
                                                                        onChange: (event)=>setTakerAmount(event.target.value),
                                                                        disabled: loading,
                                                                        className: "min-h-11 rounded-lg border border-white/10 bg-[#080a1d]/75 px-4 text-sm text-white outline-none focus:border-violet-300/60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1394,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1392,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: depositTakerTokens,
                                                                disabled: loading || selectedEscrow.account.depositTaker || !takerToken.mintAddress || selectedOfferUsesSameMint,
                                                                className: "mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-45",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                        lineNumber: 1412,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Deposit Taker Tokens"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1402,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1382,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === "escrows" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-black",
                                                                children: "Your Maker Escrows"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1425,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-slate-300",
                                                                children: "Review taker offers, then execute or reject them."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1426,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black",
                                                        children: [
                                                            makerEscrows.length,
                                                            " Created"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1430,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 grid gap-3",
                                                children: makerEscrows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400",
                                                    children: "No escrows created by this wallet yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 21
                                                }, this) : makerEscrows.map((escrow)=>renderEscrowCard(escrow, "maker"))
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "grid h-fit gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black",
                                                children: "Flow"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 grid gap-4",
                                                children: [
                                                    "Maker launches a classic SPL token.",
                                                    "Maker initializes escrow with only their token and amount.",
                                                    "Maker deposits tokens into the escrow vault.",
                                                    "Taker selects an escrow, chooses any SPL token, and deposits an offer.",
                                                    "Maker executes the swap or rejects the taker offer."
                                                ].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-black text-violet-100",
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1460,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-6 text-slate-300",
                                                                children: step
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1463,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, step, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1451,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black",
                                                children: "Contract Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 grid gap-4 text-sm leading-6 text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "mt-0.5 h-5 w-5 shrink-0 text-violet-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 19
                                                            }, this),
                                                            "The current IDL uses the classic SPL Token program, so this launchpad creates Tokenkeg mints."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                className: "mt-0.5 h-5 w-5 shrink-0 text-violet-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1477,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Image and JSON metadata are uploaded to Pinata, but this contract does not store metadata on-chain."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1476,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "mt-0.5 h-5 w-5 shrink-0 text-violet-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                                lineNumber: 1481,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Amounts use 9 decimals and are converted to raw token units before Anchor calls."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                        lineNumber: 1480,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                        lineNumber: 1469,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                                lineNumber: 1448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                        lineNumber: 1286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
                lineNumber: 1183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/TokenSwap/page.tsx",
        lineNumber: 1179,
        columnNumber: 5
    }, this);
}
_s(EscrowUI, "1k4AcR5HuhhFRUkysIJ3NbdBsZU=", false, function() {
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
"[project]/app/frontend/app/logic/mintDropNft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mintDropNFT",
    ()=>mintDropNFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-bundle-defaults/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi-signer-wallet-adapters/dist/esm/plugins.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Amount.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/node_modules/@metaplex-foundation/umi/dist/esm/Keypair.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$pinata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/utils/pinata.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
async function mintDropNFT({ wallet, drop, mintNumber, pinataJwt }) {
    try {
        if (!wallet.publicKey) {
            throw new Error("Wallet not connected");
        }
        const metadata = {
            name: `${drop.name} #${mintNumber}`,
            symbol: drop.symbol || "NNFT",
            description: drop.description || `Limited drop mint #${mintNumber} from ${drop.name}.`,
            image: drop.imageUrl || "",
            attributes: [
                ...Array.isArray(drop.attributes) ? drop.attributes : [],
                {
                    trait_type: "Drop",
                    value: drop.name
                },
                {
                    trait_type: "Mint Number",
                    value: String(mintNumber)
                }
            ]
        };
        const metadataUri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$utils$2f$pinata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadJsonToPinata"])(metadata, pinataJwt);
        const umi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$bundle$2d$defaults$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUmi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clusterApiUrl"])("devnet")).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2d$signer$2d$wallet$2d$adapters$2f$dist$2f$esm$2f$plugins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletAdapterIdentity"])(wallet)).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mplTokenMetadata"])());
        const mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Keypair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSigner"])(umi);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$mpl$2d$token$2d$metadata$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNft"])(umi, {
            mint,
            name: metadata.name,
            uri: metadataUri,
            sellerFeeBasisPoints: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$metaplex$2d$foundation$2f$umi$2f$dist$2f$esm$2f$Amount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentAmount"])(5),
            tokenOwner: umi.identity.publicKey,
            isMutable: false
        }).sendAndConfirm(umi);
        return {
            success: true,
            mintAddress: mint.publicKey.toString(),
            metadataUri
        };
    } catch (error) {
        console.error("Drop mint logic error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Drop mint failed"
        };
    }
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$mintDropNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/app/logic/mintDropNft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketPlaceCard$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketPlaceCard/page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const emptyAnalytics = {
    featuredCollections: [],
    collectionSections: [],
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
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-[clamp(0.6rem,1.5vw,1.25rem)] font-black text-white shadow-[0_0_40px_rgba(255,255,255,0.22)] backdrop-blur-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40"
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 236,
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
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
        accent: accent,
        label: label,
        className: className
    }, void 0, false, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 273,
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
                            collectionSections: data.collectionSections || [],
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
function getListingPrice(listing) {
    const price = Number(listing.price || 0);
    return Number.isFinite(price) ? price : 0;
}
function getMarketViewLabel(view) {
    if (view === "trending") return "Trending";
    if (view === "top") return "Top";
    if (view === "new") return "New";
    return "Explore";
}
function getMarketViewDescription(view) {
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
                    lineNumber: 492,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm font-semibold text-slate-300",
                    children: "Loading marketplace listings"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 491,
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
                        lineNumber: 506,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mt-4 text-xl font-black text-white",
                    children: watchlistedCount > 0 ? "No watched listings are live" : "Your watchlist is empty"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-md text-sm leading-6 text-slate-400",
                    children: watchlistedCount > 0 ? "Watched NFTs stay saved, and they will reappear here when matching listings are live." : "Tap the heart on any live listing to track it here for this wallet."
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
            lineNumber: 504,
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
                    lineNumber: 523,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "mt-4 text-xl font-black text-white",
                children: "No live listings yet"
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-md text-sm leading-6 text-slate-400",
                children: "Mint an NFT or list one from your collection to populate the live escrow-backed marketplace."
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 521,
        columnNumber: 5
    }, this);
}
_c2 = EmptyState;
function MarketplaceTab({ listedNFTs, loadingMarketplace, loadMarketplace, handleBuyNFT, handleCancelListing, publicKey, walletConnected, wallet, pinataJwt, marketView, showWatchlistOnly, setShowWatchlistOnly, loading, cancelingListing }) {
    _s1();
    const totalVolume = listedNFTs.reduce((sum, nft)=>sum + Number(nft.price || 0), 0);
    const floorPrice = listedNFTs.length > 0 ? Math.min(...listedNFTs.map((nft)=>Number(nft.price || 0))) : 2.45;
    const { analytics, loadingAnalytics } = useMarketplaceAnalytics(listedNFTs.length);
    const collectionSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[collectionSections]": ()=>analytics.collectionSections
    }["MarketplaceTab.useMemo[collectionSections]"], [
        analytics.collectionSections
    ]);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MarketplaceTab.useState": ()=>Date.now()
    }["MarketplaceTab.useState"]);
    const [dynamicDrops, setDynamicDrops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingDrops, setLoadingDrops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mintingDropId, setMintingDropId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropMintError, setDropMintError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const recentSalesByMint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[recentSalesByMint]": ()=>{
            const salesMap = new Map();
            analytics.recentSales.forEach({
                "MarketplaceTab.useMemo[recentSalesByMint]": (sale)=>{
                    const existing = salesMap.get(sale.mintAddress) || {
                        count: 0,
                        volume: 0,
                        latestSaleAt: 0
                    };
                    const soldAt = sale.soldAt ? new Date(sale.soldAt).getTime() : 0;
                    existing.count += 1;
                    existing.volume += sale.price;
                    existing.latestSaleAt = Math.max(existing.latestSaleAt, soldAt);
                    salesMap.set(sale.mintAddress, existing);
                }
            }["MarketplaceTab.useMemo[recentSalesByMint]"]);
            return salesMap;
        }
    }["MarketplaceTab.useMemo[recentSalesByMint]"], [
        analytics.recentSales
    ]);
    const marketListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[marketListings]": ()=>{
            const indexedListings = listedNFTs.map({
                "MarketplaceTab.useMemo[marketListings].indexedListings": (listing, index)=>({
                        listing,
                        index
                    })
            }["MarketplaceTab.useMemo[marketListings].indexedListings"]);
            if (marketView === "top") {
                return indexedListings.sort({
                    "MarketplaceTab.useMemo[marketListings]": (a, b)=>getListingPrice(b.listing) - getListingPrice(a.listing)
                }["MarketplaceTab.useMemo[marketListings]"]).map({
                    "MarketplaceTab.useMemo[marketListings]": ({ listing })=>listing
                }["MarketplaceTab.useMemo[marketListings]"]);
            }
            if (marketView === "new") {
                return indexedListings.sort({
                    "MarketplaceTab.useMemo[marketListings]": (a, b)=>b.index - a.index
                }["MarketplaceTab.useMemo[marketListings]"]).map({
                    "MarketplaceTab.useMemo[marketListings]": ({ listing })=>listing
                }["MarketplaceTab.useMemo[marketListings]"]);
            }
            if (marketView === "trending") {
                return indexedListings.sort({
                    "MarketplaceTab.useMemo[marketListings]": (a, b)=>{
                        const aSales = recentSalesByMint.get(a.listing.mintAddress);
                        const bSales = recentSalesByMint.get(b.listing.mintAddress);
                        const aScore = (aSales?.count || 0) * 10 + (aSales?.volume || 0) + getListingPrice(a.listing) * 0.25 + (aSales?.latestSaleAt || 0) / 1_000_000_000_000;
                        const bScore = (bSales?.count || 0) * 10 + (bSales?.volume || 0) + getListingPrice(b.listing) * 0.25 + (bSales?.latestSaleAt || 0) / 1_000_000_000_000;
                        return bScore - aScore;
                    }
                }["MarketplaceTab.useMemo[marketListings]"]).map({
                    "MarketplaceTab.useMemo[marketListings]": ({ listing })=>listing
                }["MarketplaceTab.useMemo[marketListings]"]);
            }
            return listedNFTs;
        }
    }["MarketplaceTab.useMemo[marketListings]"], [
        listedNFTs,
        marketView,
        recentSalesByMint
    ]);
    const visibleListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceTab.useMemo[visibleListings]": ()=>showWatchlistOnly ? marketListings.filter({
                "MarketplaceTab.useMemo[visibleListings]": (listing)=>watchlistedSet.has(getListingKey(listing))
            }["MarketplaceTab.useMemo[visibleListings]"]) : marketListings
    }["MarketplaceTab.useMemo[visibleListings]"], [
        marketListings,
        showWatchlistOnly,
        watchlistedSet
    ]);
    const loadDynamicDrops = async ()=>{
        try {
            setLoadingDrops(true);
            const response = await fetch("/api/nft-drops", {
                cache: "no-store"
            });
            if (!response.ok) {
                throw new Error("Failed to load NFT drops");
            }
            const data = await response.json();
            setDynamicDrops((data.drops || []).map(normalizeApiDrop));
        } catch (error) {
            console.error("NFT drops load error:", error);
            setDropMintError("Could not load NFT drops from the database.");
        } finally{
            setLoadingDrops(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceTab.useEffect": ()=>{
            const timer = window.setInterval({
                "MarketplaceTab.useEffect.timer": ()=>{
                    const nextNow = Date.now();
                    setNow(nextNow);
                }
            }["MarketplaceTab.useEffect.timer"], 1000);
            return ({
                "MarketplaceTab.useEffect": ()=>window.clearInterval(timer)
            })["MarketplaceTab.useEffect"];
        }
    }["MarketplaceTab.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceTab.useEffect": ()=>{
            loadDynamicDrops();
        }
    }["MarketplaceTab.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceTab.useEffect": ()=>{
            if (dynamicDrops.some({
                "MarketplaceTab.useEffect": (drop)=>getDynamicDropStatus(drop, now) === "ended"
            }["MarketplaceTab.useEffect"])) {
                loadDynamicDrops();
            }
        }
    }["MarketplaceTab.useEffect"], [
        now,
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
        void mintDrop(dropId);
    };
    const mintDrop = async (dropId)=>{
        const drop = dynamicDrops.find((item)=>item.id === dropId);
        if (!drop || !wallet?.publicKey) {
            setDropMintError("Connect your wallet before minting a drop.");
            return;
        }
        setMintingDropId(dropId);
        setDropMintError(null);
        let mintRecordId;
        try {
            const reserveResponse = await fetch(`/api/nft-drops/${dropId}/mint`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    walletAddress: wallet.publicKey.toString()
                })
            });
            const reserveData = await reserveResponse.json();
            if (!reserveResponse.ok) {
                throw new Error(reserveData.error || "Could not reserve drop supply");
            }
            mintRecordId = reserveData.mintRecord?.id;
            const reservedDrop = normalizeApiDrop(reserveData.drop, 0);
            setDynamicDrops((current)=>current.map((item)=>item.id === dropId ? reservedDrop : item));
            const mintResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$logic$2f$mintDropNft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mintDropNFT"])({
                wallet,
                drop,
                mintNumber: reserveData.mintNumber,
                pinataJwt
            });
            if (!mintResult.success) {
                throw new Error(mintResult.error || "Drop mint failed");
            }
            await fetch(`/api/nft-drops/${dropId}/mint`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mintRecordId,
                    mintAddress: mintResult.mintAddress,
                    metadataUri: mintResult.metadataUri
                })
            });
            await loadDynamicDrops();
        } catch (error) {
            console.error("Drop mint error:", error);
            setDropMintError(error instanceof Error ? error.message : "Drop mint failed");
            if (mintRecordId) {
                await fetch(`/api/nft-drops/${dropId}/mint`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        mintRecordId,
                        failed: true
                    })
                }).catch((rollbackError)=>{
                    console.error("Drop mint rollback error:", rollbackError);
                });
                await loadDynamicDrops();
            }
        } finally{
            setMintingDropId(null);
        }
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
                        lineNumber: 782,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-24 hidden h-60 w-[34rem] rounded-[50%] border border-fuchsia-300/25 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.45)] lg:block"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 783,
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
                                                lineNumber: 788,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-base text-slate-300",
                                        children: "The best NFT marketplace on Solana"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 792,
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
                                                        lineNumber: 801,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Explore NFTs"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 796,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-black/20 px-7 text-sm font-black text-white transition hover:bg-white/10",
                                                children: "Create NFT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 785,
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
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-32 top-0 h-48 w-32 rotate-6 rounded-2xl border border-fuchsia-300/35 bg-gradient-to-br from-violet-500/80 to-black p-3 shadow-[0_20px_55px_rgba(217,70,239,0.28)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
                                            accent: "from-violet-900 via-fuchsia-600 to-cyan-300",
                                            label: "NFT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 814,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-12 h-44 w-32 rotate-12 rounded-2xl border border-violet-300/35 bg-gradient-to-br from-slate-900 to-fuchsia-900 p-3 shadow-[0_20px_50px_rgba(139,92,246,0.28)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniArt, {
                                            accent: "from-amber-200 via-violet-600 to-slate-950",
                                            label: "PFP"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 810,
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
                                                    lineNumber: 834,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-black text-white",
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 830,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 784,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 781,
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
                                    lineNumber: 858,
                                    columnNumber: 15
                                }, this),
                                category.label
                            ]
                        }, category.label, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                            lineNumber: 850,
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
                                lineNumber: 865,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 863,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 846,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black text-white",
                                        children: "Featured Collections"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-slate-400",
                                        children: "Trending, fresh, high-volume, and editor-curated collections from the database."
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden gap-2 sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 879,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 878,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 877,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 870,
                        columnNumber: 9
                    }, this),
                    collectionSections.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-dashed border-white/10 bg-black/20 p-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-slate-300",
                            children: loadingAnalytics ? "Loading featured collections..." : "No collection data in the local database yet."
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this),
                    collectionSections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-black text-white",
                                                    children: section.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold uppercase text-slate-500",
                                                    children: section.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 900,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-fuchsia-300",
                                            children: [
                                                section.collections.length,
                                                " collections"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 906,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 899,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
                                    children: section.collections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "group overflow-hidden rounded-xl border border-white/10 bg-black/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[1.06]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                                        imageUrl: collection.imageUrl,
                                                        accent: artPalettes[(sectionIndex + index) % artPalettes.length],
                                                        label: collection.name.slice(0, 3).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-3 top-3 rounded-full bg-violet-600/80 px-3 py-1 text-xs font-black text-white",
                                                        children: collection.metricLabel || section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "flex items-center gap-1 text-sm font-black text-white",
                                                                children: [
                                                                    collection.name,
                                                                    collection.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                        className: "h-4 w-4 text-sky-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                        lineNumber: 929,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 927,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-slate-300",
                                                                children: [
                                                                    "Floor: ",
                                                                    formatSol(collection.floorPrice)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center justify-between gap-2 text-xs text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            collection.itemCount.toLocaleString(),
                                                                            " items"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                        lineNumber: 935,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    collection.metricValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-black text-emerald-300",
                                                                        children: collection.metricValue
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                        lineNumber: 937,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 19
                                            }, this)
                                        }, `${section.id}-${collection.id}`, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, section.id, true, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 869,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "marketplace-listings",
                className: "scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black text-white",
                                                children: [
                                                    getMarketViewLabel(marketView),
                                                    " Marketplace Listings"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 958,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs font-semibold text-slate-500",
                                                children: getMarketViewDescription(marketView)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 961,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 957,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300",
                                        children: [
                                            visibleListings.length,
                                            " shown"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 965,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 956,
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
                                                lineNumber: 980,
                                                columnNumber: 15
                                            }, this),
                                            "Watchlist",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-white/10 px-2 py-0.5 text-xs",
                                                children: watchlistedIds.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 982,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 970,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4 text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 987,
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
                                                lineNumber: 988,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 986,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 969,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 955,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                        loadingMarketplace: loadingMarketplace,
                        listedNFTs: visibleListings,
                        showWatchlistOnly: showWatchlistOnly,
                        watchlistedCount: watchlistedIds.length
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 995,
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
                                lineNumber: 1005,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1003,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 951,
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
                                        lineNumber: 1025,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1027,
                                                columnNumber: 15
                                            }, this),
                                            "Hot Mints"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 1024,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-bold uppercase text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "h-4 w-4 text-emerald-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 13
                                    }, this),
                                    "4 rotating drops, 100 supply each"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 1031,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1023,
                        columnNumber: 9
                    }, this),
                    dropMintError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200",
                        children: dropMintError
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1038,
                        columnNumber: 11
                    }, this),
                    loadingDrops && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-dashed border-white/10 bg-black/20 p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mx-auto h-6 w-6 animate-spin text-amber-200"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm font-bold text-slate-300",
                                children: "Loading live drops from the database"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 1046,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1044,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                        children: !loadingDrops && dynamicDrops.map((drop, index)=>{
                            const status = getDynamicDropStatus(drop, now);
                            const countdownPrefix = getDropCountdownPrefix(status);
                            const countdown = formatDropCountdown(drop, now, status);
                            const mintedPercent = Math.round(drop.mintedCount / drop.totalSupply * 100);
                            const isSoldOut = status === "sold-out";
                            const isMinting = mintingDropId === drop.id;
                            const isMintDisabled = !walletConnected || status !== "live" || isMinting;
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
                                                lineNumber: 1068,
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
                                                        lineNumber: 1074,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-violet-300/30 bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-100",
                                                        children: drop.blockchain
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1073,
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
                                                        lineNumber: 1086,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-1 truncate text-base font-black text-white",
                                                        children: drop.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1089,
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
                                                        lineNumber: 1092,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 1067,
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
                                                                lineNumber: 1099,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-lg font-black text-white",
                                                                children: formatSol(drop.mintPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 1102,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1098,
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
                                                                lineNumber: 1107,
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
                                                                lineNumber: 1110,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1106,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1097,
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
                                                                lineNumber: 1118,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    mintedPercent,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                                lineNumber: 1119,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1117,
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
                                                            lineNumber: 1122,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1116,
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
                                                                lineNumber: 1135,
                                                                columnNumber: 23
                                                            }, this),
                                                            countdownPrefix || "Drop Result"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-mono text-xl font-black text-white",
                                                        children: countdown
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1133,
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
                                                        lineNumber: 1153,
                                                        columnNumber: 21
                                                    }, this),
                                                    isMinting ? "Minting" : !walletConnected ? "Connect Wallet" : getDropActionLabel(status)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                lineNumber: 1143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, drop.id, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                lineNumber: 1063,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 1022,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 xl:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplaceSidePanel, {
                    analytics: analytics,
                    loadingAnalytics: loadingAnalytics
                }, void 0, false, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                    lineNumber: 1168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 1167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
        lineNumber: 780,
        columnNumber: 5
    }, this);
}
_s1(MarketplaceTab, "GyCery8RX3JQv1R+5d+aW/Ga9gU=", false, function() {
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
                        lineNumber: 1188,
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
                                lineNumber: 1191,
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
                                            lineNumber: 1203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtTile, {
                                            imageUrl: seller.avatarUrl,
                                            accent: artPalettes[index % artPalettes.length],
                                            label: (seller.displayName || seller.sellerAddress).slice(0, 2).toUpperCase(),
                                            className: "h-11 w-11 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1204,
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
                                                            lineNumber: 1213,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 1211,
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
                                                    lineNumber: 1215,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, seller.sellerAddress, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mt-4 h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] text-sm font-bold text-white",
                        children: "View All Rankings"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 1187,
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
                        lineNumber: 1228,
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
                                lineNumber: 1231,
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
                                            lineNumber: 1243,
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
                                                    lineNumber: 1250,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: timeAgo(sale.soldAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-slate-300",
                                            children: formatSol(sale.price)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, sale.id, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                                    lineNumber: 1239,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                        lineNumber: 1229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/MarketplaceTab/page.tsx",
                lineNumber: 1227,
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
                tab: "marketplace",
                marketView: "explore"
            },
            {
                label: "Trending",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
                tab: "marketplace",
                marketView: "trending"
            },
            {
                label: "Top",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                tab: "marketplace",
                marketView: "top"
            },
            {
                label: "New",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"],
                tab: "marketplace",
                marketView: "new"
            }
        ]
    },
    {
        title: "Collections",
        items: [
            {
                label: "All Collections",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                tab: "marketplace",
                marketView: "explore"
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                tab: "marketplace",
                watchlist: true
            }
        ]
    }
];
function Header({ activeTab, setActiveTab, activeMarketView, setActiveMarketView, showWatchlistOnly, setShowWatchlistOnly, listedNFTsCount, nftsCount }) {
    const scrollToMarketplaceListings = ()=>{
        window.requestAnimationFrame(()=>{
            window.setTimeout(()=>{
                document.getElementById("marketplace-listings")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 0);
        });
    };
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
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: group.items.map((item)=>{
                                const Icon = item.icon;
                                const isActive = item.watchlist ? activeTab === "marketplace" && showWatchlistOnly : item.marketView ? activeTab === "marketplace" && activeMarketView === item.marketView : item.tab === activeTab;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
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
                                    },
                                    className: `flex h-10 items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white shadow-[0_14px_34px_rgba(126,34,206,0.32)]" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex h-6 w-6 items-center justify-center rounded-md border ${isActive ? "border-white/20 bg-white/10" : "border-white/10 bg-white/[0.04]"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        item.label
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, group.title, true, {
                    fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                    lineNumber: 103,
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
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "h-4 w-4 text-emerald-300"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 162,
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
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            "$157.23"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-300",
                                        children: "+2.45%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 167,
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
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            listedNFTsCount,
                                            " listed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Live"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 174,
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
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            nftsCount,
                                            " owned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-300",
                                        children: "Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("marketplace"),
                        className: "mt-5 w-full text-right text-sm font-bold text-fuchsia-300",
                        children: "View All"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/NFTLOGIC_SUBMODULE/Layout/page.tsx",
        lineNumber: 101,
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
    const [activeMarketView, setActiveMarketView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("explore");
    const [showWatchlistOnly, setShowWatchlistOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-[100rem] gap-5 xl:grid-cols-[13rem_minmax(0,1fr)_16rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$Layout$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeTab: activeTab,
                        setActiveTab: setActiveTab,
                        activeMarketView: activeMarketView,
                        setActiveMarketView: setActiveMarketView,
                        showWatchlistOnly: showWatchlistOnly,
                        setShowWatchlistOnly: setShowWatchlistOnly,
                        listedNFTsCount: listedNFTs.length,
                        nftsCount: nfts.length
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 532,
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
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 545,
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
                                wallet: wallet,
                                pinataJwt: PINATA_JWT,
                                marketView: activeMarketView,
                                showWatchlistOnly: showWatchlistOnly,
                                setShowWatchlistOnly: setShowWatchlistOnly,
                                loading: loading,
                                cancelingListing: cancelingListing
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 568,
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
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden space-y-5 xl:block xl:sticky xl:top-28 xl:self-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$NFTLOGIC_SUBMODULE$2f$MarketplaceTab$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketplaceSidePanel"], {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/nft_logic/page.tsx",
        lineNumber: 527,
        columnNumber: 5
    }, this);
}
_s(NFTMarketplace, "ZMD2TyJ03/H8TOM6gfGtZ3Nbw4Y=", false, function() {
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
        label: "How it Works",
        view: "how"
    },
    {
        label: "Docs",
        view: "docs"
    },
    {
        label: "Stats",
        view: "stats"
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
const workflowSteps = [
    {
        title: "Connect Wallet",
        description: "Use a Solana wallet on devnet to create tokens, fund escrows, mint NFTs, and buy listings.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        title: "Create or Select Assets",
        description: "Launch a new SPL token with metadata, choose an existing wallet token, or mint an NFT for the market.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        title: "Lock Value in Escrow",
        description: "Makers initialize a trade and deposit tokens into a PDA-owned vault controlled by the program.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"]
    },
    {
        title: "Join and Settle",
        description: "Takers choose a different SPL token, deposit their offer, and the maker executes or rejects the swap.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"]
    }
];
const docSections = [
    {
        title: "Token Swap",
        points: [
            "Escrows are PDA accounts seeded by maker, maker mint, and escrow id.",
            "Makers deposit the offered SPL token before takers can join.",
            "Takers must offer a different SPL token mint.",
            "The maker reviews the offer, then executes or rejects it."
        ]
    },
    {
        title: "Token Launchpad",
        points: [
            "Creates classic Tokenkeg SPL mints so the escrow program can transfer them.",
            "Uploads image and JSON metadata to Pinata/IPFS.",
            "Creates Metaplex metadata accounts for wallet-readable name, symbol, and image.",
            "Wallet-held SPL tokens can be selected without mint authority."
        ]
    },
    {
        title: "NFT Market",
        points: [
            "Mint NFTs with metadata and image assets.",
            "List owned NFTs through the marketplace escrow program.",
            "Buy active listings with SOL on devnet.",
            "Cancel listings you created before sale."
        ]
    }
];
const statCards = [
    {
        label: "Escrow Swaps",
        value: "32",
        detail: "active devnet escrows",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"]
    },
    {
        label: "Listed NFTs",
        value: "45K+",
        detail: "marketplace inventory",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"]
    },
    {
        label: "Volume",
        value: "1.2M+",
        detail: "simulated SOL volume",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"]
    },
    {
        label: "Users",
        value: "12K+",
        detail: "active traders",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
function WalletButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletMultiButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletMultiButton"], {
        className: "!h-11 !rounded-lg !bg-gradient-to-r !from-violet-500 !to-fuchsia-600 !px-5 !text-sm !font-bold !text-white !shadow-[0_12px_32px_rgba(147,51,234,0.35)] transition hover:!from-violet-400 hover:!to-fuchsia-500"
    }, void 0, false, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 131,
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
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl font-black tracking-tight text-white",
                children: "Solana DApp"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 137,
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
                            lineNumber: 162,
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
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        "Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandMark, {}, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-8 text-sm font-bold lg:flex",
                        children: navItems.map((item)=>{
                            const isActive = item.view === activeView;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate(item.view),
                                className: `transition hover:text-fuchsia-300 ${isActive ? "text-fuchsia-300" : "text-white"}`,
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 197,
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
                            lineNumber: 206,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 206,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 px-4 pb-4 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 py-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onNavigate(item.view);
                                    setMenuOpen(false);
                                },
                                className: `rounded-lg px-3 py-2 text-left text-sm font-bold ${item.view === activeView ? "bg-white/10 text-fuchsia-300" : "text-white hover:bg-white/5"}`,
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 158,
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
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 top-4 h-72 w-72 rounded-full border border-violet-500/20 blur-sm"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 right-8 h-28 w-[26rem] max-w-[72vw] rounded-[50%] border border-fuchsia-300/40 bg-fuchsia-500/10 shadow-[0_0_70px_rgba(217,70,239,0.65),inset_0_0_40px_rgba(168,85,247,0.45)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 right-16 h-12 w-[20rem] max-w-[58vw] rounded-[50%] border border-violet-300/50 bg-violet-500/20 blur-[1px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 right-28 h-8 w-[14rem] max-w-[42vw] rounded-[50%] bg-fuchsia-300/70 blur-xl"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[20%] top-[16%] hidden h-16 w-16 rotate-12 rounded-2xl border border-violet-300/30 bg-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:block"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[7%] top-[18%] h-12 w-12 rotate-45 rounded-lg border border-cyan-300/30 bg-indigo-500/30 shadow-[0_0_24px_rgba(99,102,241,0.45)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[18%] top-[42%] h-7 w-7 rotate-12 rounded-md border border-violet-200/40 bg-fuchsia-500/30"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[36%] top-[12%] hidden h-24 w-24 rounded-full border border-violet-300/30 bg-[#171044] shadow-[0_0_40px_rgba(147,51,234,0.45)] md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                    className: "absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-fuchsia-300"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[2%] top-[31%] hidden h-28 w-28 rounded-full border border-cyan-300/30 bg-[#171044] shadow-[0_0_46px_rgba(34,211,238,0.35)] sm:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-5 rotate-[-18deg] rounded-md bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-8 top-8 h-5 rotate-[-18deg] rounded bg-[#171044]"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-8 bottom-8 h-5 rotate-[-18deg] rounded bg-[#171044]"
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 254,
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
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-black uppercase tracking-wide text-white sm:text-base",
                            children: "Token Swap"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 260,
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
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-black uppercase tracking-wide text-white",
                            children: "NFT Market"
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 239,
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
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    "Built on Solana",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 288,
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
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 max-w-2xl text-lg leading-8 text-slate-300",
                                children: "Empowering decentralized trading with lightning-fast swaps and a seamless NFT marketplace, built for creators and traders."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 301,
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
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            "Launch App"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 307,
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
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            "Explore Market"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 306,
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
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-black text-white",
                                                        children: metric.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-400",
                                                        children: metric.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, metric.label, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroArtwork, {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 286,
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
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Fast"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-violet-400",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Secure"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-violet-400",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Decentralized"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-4 py-2 text-sm text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                className: "h-4 w-4 text-emerald-300"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            "Audited & Secure",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2 w-2 rounded-full bg-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 346,
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
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "Token Swap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 max-w-xs leading-6 text-slate-300",
                                                        children: "Secure, escrow-based peer-to-peer SPL token swaps."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 368,
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
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 367,
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
                                                lineNumber: 387,
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
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"], {
                                                                className: "h-5 w-5 text-cyan-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 19
                                                            }, this),
                                                            "SOL"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#211049] text-violet-200 shadow-[0_0_26px_rgba(168,85,247,0.5)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 396,
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
                                                lineNumber: 400,
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
                                                        lineNumber: 402,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                                className: "h-5 w-5 text-blue-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 19
                                                            }, this),
                                                            "USDC"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 363,
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
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-black text-white",
                                                        children: "NFT Market"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 max-w-xs leading-6 text-slate-300",
                                                        children: "Mint, buy, and trade unique digital collectibles instantly."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 417,
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
                                                lineNumber: 430,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 416,
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
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.9)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black text-white",
                                        children: "Cosmic Genesis #7321"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 439,
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
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/70 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 362,
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
                                    lineNumber: 457,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-black text-white",
                                        children: benefit.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm leading-5 text-slate-300",
                                        children: benefit.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this)
                        ]
                    }, benefit.title, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 455,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 450,
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
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold",
                                    children: "Connect Phantom or another Solana wallet to unlock minting, listing, buying, and swapping."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletButton, {}, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 478,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 470,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 469,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s1(Dashboard, "i+/qxb0flJRE8MgvazOGMkNRtsk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c4 = Dashboard;
function HowItWorksView({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300",
                                children: "How It Works"
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black leading-tight text-white sm:text-6xl",
                                children: "One wallet, two asset flows, escrow settlement."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 max-w-2xl text-lg leading-8 text-slate-300",
                                children: "The app combines SPL token escrow swaps and NFT marketplace actions behind one wallet-first interface."
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col gap-3 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("swap"),
                                        className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 text-sm font-black text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, this),
                                            "Start Swap"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate("nft"),
                                        className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 text-sm font-black text-white transition hover:border-violet-300/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this),
                                            "Open Market"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: workflowSteps.map((step, index)=>{
                            const Icon = step.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 rounded-xl border border-white/10 bg-[#090b1f]/75 p-5 sm:grid-cols-[auto_1fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-black text-violet-200",
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-black text-white",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 leading-7 text-slate-300",
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, step.title, true, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 523,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 grid gap-5 md:grid-cols-3",
                children: [
                    [
                        "Maker",
                        "Creates escrow terms and deposits their SPL token."
                    ],
                    [
                        "Taker",
                        "Chooses a different SPL token and deposits an offer."
                    ],
                    [
                        "Program",
                        "Transfers both vault balances atomically when maker executes."
                    ]
                ].map(([title, description])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-black text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 leading-6 text-slate-300",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, title, true, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_c5 = HowItWorksView;
function DocsView({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300",
                    children: "Docs"
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 568,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 lg:grid-cols-[0.78fr_1.22fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-black leading-tight text-white sm:text-6xl",
                                    children: "Build notes for the token swap and NFT market."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-lg leading-8 text-slate-300",
                                    children: "A compact reference for the current devnet implementation, the IDL-driven frontend, and the asset flows."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate("swap"),
                                            className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 text-sm font-black text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this),
                                                "Swap UI"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate("nft"),
                                            className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-black text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gallery$2d$vertical$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryVerticalEnd$3e$__["GalleryVerticalEnd"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 17
                                                }, this),
                                                "NFT Market"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: docSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-xl border border-white/10 bg-[#090b1f]/75 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-black text-white",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3",
                                            children: section.points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 text-sm leading-6 text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, point, true, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, section.title, true, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 571,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 567,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 566,
        columnNumber: 5
    }, this);
}
_c6 = DocsView;
function StatsView({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative mx-auto w-[min(88rem,calc(100%-2rem))] pb-12 pt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-sm font-black uppercase tracking-[0.25em] text-violet-300",
                                    children: "Stats"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 627,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-black text-white sm:text-6xl",
                                    children: "Protocol activity snapshot."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 max-w-3xl text-lg leading-8 text-slate-300",
                                    children: "Track the main surfaces of the app: escrow swaps, NFT listings, wallet activity, and marketplace volume."
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onNavigate("swap"),
                            className: "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 text-sm font-black text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                "Open Swap"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                    children: statCards.map((stat)=>{
                        const Icon = stat.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/10 bg-[#090b1f]/75 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 652,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-sm font-bold text-slate-400",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-4xl font-black text-white",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 656,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-400",
                                    children: stat.detail
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 651,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/10 bg-[#090b1f]/75 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-black text-white",
                                    children: "Weekly Flow"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-4",
                                    children: [
                                        [
                                            "Swaps",
                                            "86%"
                                        ],
                                        [
                                            "NFT Listings",
                                            "64%"
                                        ],
                                        [
                                            "Mints",
                                            "52%"
                                        ],
                                        [
                                            "Wallet Actions",
                                            "78%"
                                        ]
                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between text-sm font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-300",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-violet-200",
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 overflow-hidden rounded-full bg-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600",
                                                        style: {
                                                            width: value
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/10 bg-[#090b1f]/75 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-black text-white",
                                    children: "Network Health"
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-4",
                                    children: [
                                        [
                                            "Cluster",
                                            "Solana devnet"
                                        ],
                                        [
                                            "Swap Program",
                                            "IDL connected"
                                        ],
                                        [
                                            "NFT Program",
                                            "Marketplace active"
                                        ],
                                        [
                                            "Metadata",
                                            "Pinata + Metaplex"
                                        ]
                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-400",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-black text-white",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                                    lineNumber: 691,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 663,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 624,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 623,
        columnNumber: 5
    }, this);
}
_c7 = StatsView;
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
                    lineNumber: 717,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto w-[min(88rem,calc(100%-2rem))] py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$TokenSwap$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 723,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 722,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 716,
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
                    lineNumber: 732,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$app$2f$nft_logic$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                    lineNumber: 737,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 731,
            columnNumber: 7
        }, this);
    }
    const renderView = ()=>{
        if (activeView === "how") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HowItWorksView, {
                onNavigate: setActiveView
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 744,
                columnNumber: 14
            }, this);
        }
        if (activeView === "docs") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocsView, {
                onNavigate: setActiveView
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 748,
                columnNumber: 14
            }, this);
        }
        if (activeView === "stats") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsView, {
                onNavigate: setActiveView
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 752,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {
            onNavigate: setActiveView
        }, void 0, false, {
            fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
            lineNumber: 755,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-hidden bg-[#020412] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(88,28,135,0.42),transparent_34%),radial-gradient(circle_at_30%_78%,rgba(37,99,235,0.18),transparent_28%),linear-gradient(180deg,#020412_0%,#050619_44%,#020412_100%)]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]"
            }, void 0, false, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShellHeader, {
                        activeView: activeView,
                        onNavigate: setActiveView,
                        onBack: ()=>setActiveView("dashboard")
                    }, void 0, false, {
                        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                        lineNumber: 763,
                        columnNumber: 9
                    }, this),
                    renderView()
                ]
            }, void 0, true, {
                fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
                lineNumber: 762,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/frontend/app/LandingPage/page.tsx",
        lineNumber: 759,
        columnNumber: 5
    }, this);
}
_s2(Main, "XwNR4FjxKHPH8zHpNRRjAqfD2l4=");
_c8 = Main;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "WalletButton");
__turbopack_context__.k.register(_c1, "BrandMark");
__turbopack_context__.k.register(_c2, "ShellHeader");
__turbopack_context__.k.register(_c3, "HeroArtwork");
__turbopack_context__.k.register(_c4, "Dashboard");
__turbopack_context__.k.register(_c5, "HowItWorksView");
__turbopack_context__.k.register(_c6, "DocsView");
__turbopack_context__.k.register(_c7, "StatsView");
__turbopack_context__.k.register(_c8, "Main");
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

//# sourceMappingURL=app_frontend_6c9f7c7d._.js.map