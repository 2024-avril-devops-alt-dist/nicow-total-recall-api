import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

    try {
        const departureAirport = req.nextUrl.searchParams.get("departureAirport");
        const arrivalAirport = req.nextUrl.searchParams.get("arrivalAirport");
        const departureDate = req.nextUrl.searchParams.get("departureDate");
        const arrivalDate = req.nextUrl.searchParams.get("arrivalDate");
        const page = Number(req.nextUrl.searchParams.get("page")) || 1;
        const pageSize = 10;
        console.log(departureAirport);
        console.log(arrivalAirport);
        console.log(departureDate);
        console.log(arrivalDate)

        const where: any = {};

        if (departureAirport) where.departureAirportId = departureAirport;
        if (arrivalAirport) where.arrivalAirportId = arrivalAirport;
        if (departureDate) {
            const parsedDate = new Date(departureDate);
            where.departureDate = {
                gte: new Date(parsedDate.setHours(0, 0, 0, 0)),  // Start of the day
                lt: new Date(parsedDate.setHours(23, 59, 59, 999)) // End of the day
            };
        }
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
