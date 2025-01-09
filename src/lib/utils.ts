import { Prisma } from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {getToken} from "@auth/core/jwt";

/**
 * Check if database url is set.
 */
export function isSetDatabase () {

    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }

}

/**
 * Get required fields for an entity in prisma schema.
 * @param modelName
 * @returns required fields.
 */
export function getRequiredFields(modelName: Prisma.ModelName): string[] {
    const modelMeta = Prisma.dmmf.datamodel.models.find(
        (model) => model.name === modelName
    );

    if (!modelMeta) {
        throw new Error(`Model ${modelName} not found in Prisma schema`);
    }

    // Filter required fields.
    return modelMeta.fields
        .filter((field) => field.isRequired && !field.isId && !field.hasDefaultValue && !field.relationName)
        .map((field) => field.name);
}

/**
 * Check if user is authenticated.
 * @param req
 */
export async function isAuthenticated (req: NextRequest) {

    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401, headers: { "Content-Type": "application/json" }}
        );
    }
    return null;
}