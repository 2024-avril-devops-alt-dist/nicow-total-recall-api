import {NextRequest, NextResponse} from "next/server";
import services from "@/app/lib/services";

export async function POST(req: NextRequest) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }
    try {
        const body = await req.json();
        const { companyName } = body;

        if (!companyName) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const airlineCompany = await services.airlineCompany.create({
            data: {
                companyName,
            },
        });

        return NextResponse.json(airlineCompany, { status: 201 });
    } catch (error) {
        console.error("Error during airline company creation:", error);
        return NextResponse.json(
            { error: "Airline company creation failed" },
            { status: 400 }
        );
    }
}