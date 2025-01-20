import { PrismaClient } from "@prisma/client";

let prisma;

try {
    prisma = new PrismaClient({
        datasources: { db: { url: process.env.DATABASE_URL } }
    });
} catch (error) {
    console.log("Primary database connection failed, trying fallback...");
    prisma = new PrismaClient({
        datasources: { db: { url: process.env.DATABASE_URL_FALLBACK } }
    });
}
