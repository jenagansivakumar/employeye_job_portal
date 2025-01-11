import { number, string } from "zod";
import { prisma } from "../../../utils/init.js";



export const findJobById = async(id: number) => {
    return await prisma.jobDetail.findUnique({
        where: {id: Number(id)}
    })
}