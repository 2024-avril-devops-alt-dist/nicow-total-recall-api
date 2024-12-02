import { NextRequest, NextResponse } from "next/server";
import services from "@/app/lib/services";

export async function GET(req: NextRequest, { params }: {params: {id: string } }) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }

    try {
        const { id } = params;
        const flight = await services.flight.findUnique({
            where: {
                id: id,
            },
            include: {
                airlineCompany: true,
            }
        });
        return NextResponse.json(flight ?? []);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch flights" },
            { status: 500 }
        );
    }
}