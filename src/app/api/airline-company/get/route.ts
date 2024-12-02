import { NextRequest, NextResponse } from "next/server";
import services from "@/app/lib/services";

export async function GET(req: NextRequest) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            {error: "DATABASE_URL is not set"},
            {status: 500}
        );
    }

    try {
        const airlineCompanies = await services.airlineCompany.findMany({
            include: {
                flights: true,
            }
        });
        return NextResponse.json(airlineCompanies ?? []);
    } catch (error) {
        return NextResponse.json(
            {error: "Failed to fetch airline companies"},
            {status: 500}
        );
    }
}