import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

    try {
        const departure = req.nextUrl.searchParams.get("departure");
        const arrival = req.nextUrl.searchParams.get("arrival");
        const departureDate = req.nextUrl.searchParams.get("departureDate");
        const arrivalDate = req.nextUrl.searchParams.get("arrivalDate");
        const page = Number(req.nextUrl.searchParams.get("page")) || 1;
        const pageSize = 10;

        const where: any = {};

        if (departure) where.departureAirportId = departure;
        if (arrival) where.arrivalAirportId = arrival;
        if (departureDate) where.departureDate = new Date(departureDate);
        if (arrivalDate) where.arrivalDate = new Date(arrivalDate);

        const flights = await prisma.flight.findMany({
            where,
            take: pageSize,
            skip: (page - 1) * pageSize,
            include: {
                departureAirport: {
                    include: {
                        location : true,
                    },
                },
                arrivalAirport: {
                    include: {
                        location : true,
                    }
                },
                airlineCompany: true,
                stopovers: true,
            },
        });

        return NextResponse.json(flights);
    } catch (error) {
        console.error("Error details:", error);
        return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 });
    }
}
