import { Prisma, PrismaClient } from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();
type PrismaModels = Prisma.ModelName;

export function isSetDatabase () {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }
}

export function isEntityExist (entity: string ) {

    if (!(entity in prisma)) {
        return NextResponse.json(
            { error: `Entity ${entity} does not exist` },
            { status: 400 }
        );
    }
}

export async function prismaFindMany (entity: PrismaModels) {
    try {
        const currentEntity = await prisma[entity].findMany();
        return NextResponse.json(currentEntity ?? []);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch flights" },
            { status: 500 }
        );
    }
}
