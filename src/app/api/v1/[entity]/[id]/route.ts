import { NextRequest, NextResponse } from "next/server";
import {isAuthenticated, isSetDatabase} from "@/app/lib/utils";
import {
    prismaDelete,
    prismaFindById,
    prismaUpdate,
    validateEntity,
} from "@/app/lib/services";

/**
 * Get entity with [id] in database.
 * @param req
 * @param params
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaFindById
 */
export async function GET(req: NextRequest, { params }: { params: { entity: string, id: string } }) {

    const { entity, id } = await params;

    if (entity !== "Booking" && entity !== "Flight") {
        const isAuth = isAuthenticated(req);
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

    return prismaFindById(validatedEntity, id);
}

/**
 * Update entity with [id] in database.
 * @param req
 * @param params
 * @param id
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaUpdate
 */
export async function PUT(req: NextRequest, { params }: { params: { entity: string, id: string } }) {

    const { entity, id } = await params;

    const isAuth = isAuthenticated(req);
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

    return prismaUpdate(validatedEntity, req, id);
}

/**
 * Delete entity with [id] in database.
 * @param req
 * @param params
 * @method isSetDatabase
 * @method validateEntity
 * @method prismaDelete
 */
export async function DELETE(req: NextRequest, { params }: { params: { entity: string, id: string } }) {

    const { entity, id } = await params;

    const isAuth = isAuthenticated(req);
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

    return prismaDelete(validatedEntity, id);
}