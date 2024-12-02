import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/services";
import {z} from "zod";

const updateAirlineSchema = z.object({
    companyName: z.string().min(1, "Company name is required"),
});

export async function PUT(req: NextRequest, { params }: {params: {id: string } }) {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json(
            { error: "DATABASE_URL is not set" },
            { status: 500 }
        );
    }

    try {
        const { id } = params;
        const body = await req.json();
        const { companyName } = body;

        if (!companyName) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const airlineCompany = await prisma.airlineCompany.update({
            where: {
                id: id,
            },
            data: {
                companyName: companyName
            }
        });
        return NextResponse.json(airlineCompany, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: `Failed to update airline company: ${error.message}` },
            { status: 500 }
        );
    }
}