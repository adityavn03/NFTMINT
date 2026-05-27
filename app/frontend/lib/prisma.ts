type PrismaClientLike = {
  sellerProfile: {
    findMany(args?: unknown): Promise<unknown[]>;
    upsert(args: unknown): Promise<unknown>;
  };
  nftCollection: {
    findMany(args?: unknown): Promise<unknown[]>;
    upsert(args: unknown): Promise<unknown>;
  };
  nftDrop: {
    findMany(args?: unknown): Promise<unknown[]>;
    findUnique(args?: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
    upsert(args: unknown): Promise<unknown>;
  };
  nftDropMint: {
    findMany(args?: unknown): Promise<unknown[]>;
    create(args: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
    findUnique(args?: unknown): Promise<unknown>;
  };
  marketplaceSale: {
    findMany(args?: unknown): Promise<unknown[]>;
    groupBy(args: unknown): Promise<unknown[]>;
    upsert(args: unknown): Promise<unknown>;
  };
  $transaction(actions: Promise<unknown>[]): Promise<unknown[]>;
};

type PrismaClientConstructor = new (options?: {
  log?: Array<"query" | "info" | "warn" | "error">;
}) => PrismaClientLike;

type PrismaModule = {
  PrismaClient: PrismaClientConstructor;
};

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClientLike;
};

function loadPrismaClient() {
  const runtimeRequire = createRequire(import.meta.url);
  return (runtimeRequire("@prisma/client") as PrismaModule).PrismaClient;
}

const PrismaClient = loadPrismaClient();

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
import { createRequire } from "node:module";
