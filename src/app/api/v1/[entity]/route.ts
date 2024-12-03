import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import {
    isSetDatabase,
    prismaCreate,
    prismaFindMany,
    validateEntity,
} from "@/app/lib/services";

/**
 *
 * @param req
 * @param params
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaFindMany
 */
export async function GET(req: NextRequest, { params } : { params: { entity: string } }) {

    const { entity } = params;

    const dbCheck = isSetDatabase();
    if(dbCheck) {
        return dbCheck;
    }

    const validatedEntity = validateEntity(entity);
    if (!validatedEntity) {
        return NextResponse.json(
            { error: `Entity ${entity} is invalid` },
            { status: 400 }
        );
    }

    return prismaFindMany(validatedEntity)
}

export async function POST(req: NextRequest, { params }: { params: { entity: string } }) {


    const { entity } = params;

    const dbCheck = isSetDatabase();
    if(dbCheck) {
        return dbCheck;
    }

    const validatedEntity = validateEntity(entity);
    if (!validatedEntity) {
        return NextResponse.json(
            { error: `Entity ${entity} is invalid` },
            { status: 400 }
        );
    }

    return prismaCreate(validatedEntity, req)

}