import { prisma } from "../../../utils/init.js"



export const findUserByEmail = async (email: string) => {
    return await prisma.userDetails.findUnique({
        where: {email}
    })
}