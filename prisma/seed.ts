import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // Create locations
    const location1 = await prisma.location.create({
        data: {
            city: 'Paris',
            planet: 'Earth',
        },
    });

    const location2 = await prisma.location.create({
        data: {
            city: 'New York',
            planet: 'Earth',
        },
    });

    const location3 = await prisma.location.create({
        data: {
            city: 'New Paris',
            planet: 'Mars',
        },
    });

    const location4 = await prisma.location.create({
        data: {
            city: 'New New Yor',
            planet: 'Mars',
        },
    });

    // Create airline companies
    const airlineCompany1 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air Planet',
        },
    });

    const airlineCompany2 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Mars Attack',
        },
    });

    // Create airports
    const airport1 = await prisma.airport.create({
        data: {
            airportName: 'Earth Aerobase',
            locationId: location1.id,
        },
    });

    const airport2 = await prisma.airport.create({
        data: {
            airportName: 'Mars Aerobase',
            locationId: location2.id,
        },
    });

    const airport3 = await prisma.airport.create({
        data: {
            airportName: 'Jupiter Port',
            locationId: location3.id,
        },
    });

    const airport4 = await prisma.airport.create({
        data: {
            airportName: 'Uranus Station',
            locationId: location4.id,
        },
    });

    // Create flights
    const flight1 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport1.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2024-12-15T10:00:00Z'),
            arrivalDate: new Date('2024-12-15T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight2 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport3.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2025-01-15T10:00:00Z'),
            arrivalDate: new Date('2025-01-15T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    // Create stopovers
    const stopover1 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2024-12-15T13:00:00Z'),
            departureDate: new Date('2024-12-15T14:30:00Z'),
            locationId: location1.id,
        },
    });

    const stopover2 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-01-15T13:00:00Z'),
            departureDate: new Date('2025-01-15T14:30:00Z'),
            locationId: location2.id,
        },
    });

    // Create users
    const user1 = await prisma.user.create({
        data: {
            email: 'admin@admin.com',
            role: 'ADMIN',
            phoneNotification: true,
            phoneNumber: '2345678900',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user@example.com',
            phoneNotification: true,
            phoneNumber: '1234567890',
        },
    });

    // Create passengers
    const passenger1 = await prisma.passenger.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
        },
    });

    const passenger2 = await prisma.passenger.create({
        data: {
            firstName: 'Jane',
            lastName: 'Smith',
            age: 28,
        },
    });

    const passenger3 = await prisma.passenger.create({
        data: {
            firstName: 'Alice',
            lastName: 'Johnson',
            age: 25,
        },
    });

    const passenger4 = await prisma.passenger.create({
        data: {
            firstName: 'Bob',
            lastName: 'Brown',
            age: 35,
        },
    });

    // Create bookings
    const booking1 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user1.id,
            flightId: flight1.id,
            passengers: {
                connect: [
                    { id: passenger1.id },
                    { id: passenger2.id },
                ],
            },
        },
    });

    const booking2 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user2.id,
            flightId: flight2.id,
            passengers: {
                connect: [
                    { id: passenger3.id },
                    { id: passenger4.id },
                ],
            },
        },
    });

    console.log('Seed data inserted successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
