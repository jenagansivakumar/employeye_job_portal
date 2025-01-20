import { PrismaClient } from "@prisma/client";


const createPrismaClient = ()=> {
    try {
        return new PrismaClient({
            datasources: { db: { url: process.env.DATABASE_URL } }
        });
    } catch (error) {
        console.log("Primary database connection failed, trying fallback...");
        return new PrismaClient({
            datasources: { db: { url: process.env.DATABASE_URL_FALLBACK } }
        });
    }
}

export const prisma = createPrismaClient()