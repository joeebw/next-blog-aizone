import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

// ? In here initialice to call the database and interact with it

if (process.env.NODE_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

// ? a constant that holds an instance of PrismaClient
export const prisma = prismaInit;
