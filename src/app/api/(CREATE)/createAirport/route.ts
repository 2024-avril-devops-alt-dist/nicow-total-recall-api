import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: NextRequest) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }
    try {
        const body = await req.json();
        const { airportName, locationId, servedCityIds } = body;

        if (!airportName || !locationId || !servedCityIds || !servedCityIds.length) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const locationExists = await prisma.location.findUnique({
            where: {id: locationId},
        })
        if (!locationExists) {
            return NextResponse.json(
                { error: "Location does not exist." },
                { status: 404 },
            );
        }

        const airport = await prisma.airport.create({
            data: {
                airportName,
                location: {
                    connect: {
                        id: locationId,
                    }
                }
            },
        });

        await prisma.airportsOnLocations.createMany({
            data: servedCityIds.map((cityId: string) => ({
                airportId: airport.id,
                locationId: cityId,
            })),
        });

        return NextResponse.json(airport, { status: 201 });
    } catch (error) {
        console.error("Error during location creation:", error);
        return NextResponse.json(
            { error: "Location creation failed" },
            { status: 400 }
        );
    }
}