import { NextRequest, NextResponse } from "next/server";
import {isAuthenticated, isSetDatabase} from "@/app/lib/utils";
import {
    prismaCreate,
    prismaFindMany,
    validateEntity,
} from "@/app/lib/services";

/**
 * Get entity in database.
 * @param req
 * @param params
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaFindMany
 */
export async function GET(req: NextRequest, { params } : { params: { entity: string } }) {

    const { entity } = params;

    if (entity !== "Flight" && entity !== "Booking") {
        const isAuth = await isAuthenticated(req);
        if (isAuth) return isAuth;
    }

    const dbCheck = isSetDatabase();
    if(dbCheck) return dbCheck;

    const validatedEntity = validateEntity(entity);
    if (!validatedEntity) {
        return NextResponse.json(
            { error: `Entity ${entity} is invalid` },
            { status: 400 }
        );
    }

    return prismaFindMany(validatedEntity)
}

/**
 * Create entity in database.
 * @param req
 * @param params
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaCreate
 */
export async function POST(req: NextRequest, { params }: { params: { entity: string } }) {

    const { entity } = params;

    const isAuth = await isAuthenticated(req);
    if (isAuth) return isAuth;

    const dbCheck = isSetDatabase();
    if(dbCheck) return dbCheck;

    const validatedEntity = validateEntity(entity);
    if (!validatedEntity) {
        return NextResponse.json(
            { error: `Entity ${entity} is invalid` },
            { status: 400 }
        );
    }

    return prismaCreate(validatedEntity, req)

}