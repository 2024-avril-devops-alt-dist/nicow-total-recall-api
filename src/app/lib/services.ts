import { Prisma, PrismaClient } from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {getRequiredFields} from "@/app/lib/utils";

const prisma = new PrismaClient();
type PrismaModels = Prisma.ModelName;

const prismaModelMapper: Record<PrismaModels, any> = {
    User: prisma.user,
    Airport : prisma.airport,
    AirportsOnLocations: prisma.airportsOnLocations,
    AirlineCompany : prisma.airlineCompany,
    Location : prisma.location,
    Flight : prisma.flight,
    Passenger : prisma.passenger,
    Stopover : prisma.stopover,
    FlightsOnStopovers : prisma.flightsOnStopovers,
    Booking : prisma.booking,
    BookingsOnPassengers : prisma.bookingsOnPassengers,

};

export function isSetDatabase () {

    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }

}

/**
 * Check if entity exists.
 * @param entity
 */
export function validateEntity(entity: string): PrismaModels | null {
    const validEntities = Object.values(Prisma.ModelName);
    if (validEntities.includes(entity as PrismaModels)) {
        return entity as PrismaModels;
    }
    return null;
}

/**
 * Check if the entity required fields are missing.
 * @param entity
 * @param data
 */
export async function validateEntityFields(entity: Prisma.ModelName, data: Record<string, any>) {
    try {
        const requiredFields = getRequiredFields(entity);

        const missingFields = requiredFields.filter((field) => !(field in data));
        if (missingFields.length > 0) {
            return NextResponse.json(
                { error: `Missing required fields: ${missingFields.join(", ")}` },
                { status: 400 }
            );
        }

        return null;
    } catch (error) {
        console.error("Validation error:", error);
        return NextResponse.json(
            { error: "Entity validation failed" },
            { status: 500 }
        );
    }
}

/**
 * Prisma findMany() dynamic method.
 * @param entity
 */
export async function prismaFindMany (entity: PrismaModels) {

    try {
        const model = prismaModelMapper[entity];
        const currentEntity = await model.findMany();
        return NextResponse.json(currentEntity ?? []);
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to fetch ${entity}` },
            { status: 500 }
        );
    }

}

/**
 * Prisma create() dynamic method.
 * @param entity
 * @param req
 */
export async function prismaCreate (entity: PrismaModels, req: NextRequest) {

    try {
        const model = prismaModelMapper[entity];
        const body = await req.json();

        const validationError = await validateEntityFields(entity, body);
        if (validationError) return validationError;

        const createdEntity = await model.create({
            data: body,
        });

        return NextResponse.json(createdEntity, { status: 201 });
    } catch (error) {
        console.error(`Error during ${entity} creation:`, error);
        return NextResponse.json(
            { error: "Entity creation failed" },
            { status: 500 }
        );
    }

}

export default prisma;