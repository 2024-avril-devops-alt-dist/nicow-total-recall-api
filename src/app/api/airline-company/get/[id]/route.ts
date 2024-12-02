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
        const airlineCompany = await services.airlineCompany.findUnique({
            where: {
                id: id,
            },
            include: {
                flights: true,
            }
        });
        return NextResponse.json(airlineCompany ?? []);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch airport" },
            { status: 500 }
        );
    }
}