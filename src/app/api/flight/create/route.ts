import {NextRequest, NextResponse} from "next/server";
import prisma from "@/app/lib/services";

export async function POST(req: NextRequest) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }
    try {
        const body = await req.json();
        const { bookingOpenStatus,
            flightStatus,
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
            airlineCompanyId,
        } = body;

        if (!bookingOpenStatus
            || !departureAirport
            || !arrivalAirport
            || !departureDate
            || !arrivalDate
            || !airlineCompanyId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const flight = await prisma.flight.create({
            data: {
                bookingOpenStatus,
                flightStatus,
                departureAirport,
                arrivalAirport,
                departureDate,
                arrivalDate,
                airlineCompanyId,
            },
        });

        return NextResponse.json(flight, { status: 201 });
    } catch (error) {
        console.error("Error during flight creation:", error);
        return NextResponse.json(
            { error: "Location creation failed" },
            { status: 400 }
        );
    }
}