import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create some locations
    const location1 = await prisma.location.create({
        data: {
            city: 'Paris',
            country: 'France',
        },
    });

    const location2 = await prisma.location.create({
        data: {
            city: 'New York',
            country: 'USA',
        },
    });

    const location3 = await prisma.location.create({
        data: {
            city: 'Bastia',
            country: 'Corsica',
        },
    });

    const location4 = await prisma.location.create({
        data: {
            city: 'Sao Paulo',
            country: 'Brazil',
        },
    });

    // Create some airline companies
    const airlineCompany1 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air France',
        },
    });

    const airlineCompany2 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air Corsica',
        },
    });

    // Create some airports (not part of your schema but referenced in the seed)
    const airport1 = 'Charles de Gaulle Airport';
    const airport2 = 'JFK International Airport';
    const airport3 = 'Bastia Airport';
    const airport4 = 'São Paulo/Guarulhos–Governador André Franco Montoro International Airport';

    // Create flights
    const flight1 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirport: airport1,
            arrivalAirport: airport2,
            departureDate: new Date('2024-12-15T10:00:00Z'),
            arrivalDate: new Date('2024-12-15T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight2 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirport: airport3,
            arrivalAirport: airport4,
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
