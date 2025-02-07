import prisma from "@/services/QueryService";

export async function isUserExists(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        return user || null;
    } catch (error) {
        console.error("Can't verify if user exists :", error);
        return null;
    }
}