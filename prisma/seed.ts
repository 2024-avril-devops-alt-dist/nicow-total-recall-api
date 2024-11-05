import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create some location
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

    // Create some airport
    const airport1 = await prisma.airport.create({
        data: {
            airportName: 'Charles de Gaulle Airport',
            servedCities: 'Paris',
            locationId: location1.id,
        },
    });

    const airport2 = await prisma.airport.create({
        data: {
            airportName: 'JFK International Airport',
            servedCities: 'New York',
            locationId: location2.id,
        },
    });

    // Create some airlineCompany
    const airlineCompany = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air France',
        },
    });

    // Create a flight
    const flight = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: 'Scheduled',
            departureAirport: airport1.airportName,
            arrivalAirport: airport2.airportName,
            departureDate: new Date('2024-12-15T10:00:00Z'),
            arrivalDate: new Date('2024-12-15T18:00:00Z'),
            airlineCompanyId: airlineCompany.id,
        },
    });

    // Create a stopover
    const stopover = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2024-12-15T13:00:00Z'),
            departureDate: new Date('2024-12-15T14:30:00Z'),
            locationId: location1.id,
        },
    });

    // Link flight & stopover
    await prisma.flightStopover.create({
        data: {
            flightId: flight.id,
            stopoverId: stopover.id,
        },
    });

    // Create a user
    const user = await prisma.user.create({
        data: {
            email: 'user@example.com',
            password: 'password123',
            phoneNotification: true,
            phoneNumber: '1234567890',
        },
    });

    // Create some passengers
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

    // Create a booking & link passengers
    const booking = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user.id,
            flightId: flight.id,
        },
    });

    await prisma.bookingPassenger.create({
        data: {
            bookingId: booking.id,
            passengerId: passenger1.id,
        },
    });

    await prisma.bookingPassenger.create({
        data: {
            bookingId: booking.id,
            passengerId: passenger2.id,
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
