import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient


const createPrismaClient = async()=> {
    try {
        prisma = new PrismaClient({
            datasources: { db: { url: process.env.DATABASE_URL } }
        });
        await prisma.$connect()
        console.log("Connected to primary database")
    } catch (error) {
        console.log("Primary database connection failed, trying fallback...");
        prisma = new PrismaClient({
            datasources: { db: { url: process.env.DATABASE_URL_FALLBACK } }
        });
        await prisma.$connect()
        console.log("Connected to fallback database")
    }
}

createPrismaClient()


export {prisma}