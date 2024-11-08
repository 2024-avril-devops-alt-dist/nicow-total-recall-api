import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req: NextRequest) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            {error: "DATABASE_URL is not set"},
            {status: 500}
        );
    }

    try {
        const airports = await prisma.airport.findMany({
            include: {
                location: true,
            }
        });
        return NextResponse.json(airports ?? []);
    } catch (error) {
        return NextResponse.json(
            {error: "Failed to fetch airports"},
            {status: 500}
        );
    }
}