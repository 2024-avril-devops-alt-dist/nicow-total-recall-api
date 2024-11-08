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
        const { city, country } = body;

        if (!city || !country) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const location = await prisma.location.create({
            data: {
                city,
                country,
            },
        });

        return NextResponse.json(location, { status: 201 });
    } catch (error) {
        console.error("Error during location creation:", error);
        return NextResponse.json(
            { error: "Location creation failed" },
            { status: 400 }
        );
    }
}