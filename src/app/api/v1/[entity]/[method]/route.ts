import { NextRequest, NextResponse } from "next/server";
import prisma, {isEntityExist, isSetDatabase} from "@/app/lib/services";
import {z} from "zod";

/**
 *
 * @param req
 * @param params
 * @method isSetDatabase
 * @method isEntityExist
 */
export async function GET(req: NextRequest, { params } : { params: { entity: string, method: string } }) {

    const { entity, method } = params;

    isSetDatabase();
    isEntityExist(entity);


}