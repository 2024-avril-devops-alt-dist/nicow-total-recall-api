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

    // Create some airport
    const airport1 = await prisma.airport.create({
        data: {
            airportName: 'Charles de Gaulle Airport',
            locationId: location1.id,
        },
    });

    const airport2 = await prisma.airport.create({
        data: {
            airportName: 'JFK International Airport',
            locationId: location2.id,
        },
    });
    const airport3 = await prisma.airport.create({
        data: {
            airportName: 'Bastia Airport',
            locationId: location3.id,
        },
    });

    const airport4 = await prisma.airport.create({
        data: {
            airportName: 'São Paulo/Guarulhos–Governador André Franco Montoro International Airport',
            locationId: location4.id,
        },
    });

    // Define served cities via AirportLocation
    await prisma.airportsOnLocations.createMany({
        data: [
            { airportId: airport1.id, locationId: location1.id }, // Paris served by Charles de Gaulle
            { airportId: airport2.id, locationId: location2.id }, // New York served by JFK
            { airportId: airport3.id, locationId: location3.id }, // Corsica served by Bastia Airport
            { airportId: airport4.id, locationId: location4.id }, // Brazil served by São Paulo Airport
        ],
    });

    // Create some airlineCompany
    const airlineCompany = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air France',
        },
    });

    const airlineCompany2 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Air Corsica',
        },
    });

    // Create a flight
    const flight1 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirport: airport1.airportName,
            arrivalAirport: airport2.airportName,
            departureDate: new Date('2024-12-15T10:00:00Z'),
            arrivalDate: new Date('2024-12-15T18:00:00Z'),
            airlineCompanyId: airlineCompany.id,
        },
    });

    const flight2 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirport: airport3.airportName,
            arrivalAirport: airport4.airportName,
            departureDate: new Date('2025-01-15T10:00:00Z'),
            arrivalDate: new Date('2025-01-15T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    // Create some stopover
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

    // Link flight & stopover
    await prisma.flightsOnStopovers.create({
        data: {
            flightId: flight1.id,
            stopoverId: stopover1.id,
        },
    });

    await prisma.flightsOnStopovers.create({
        data: {
            flightId: flight2.id,
            stopoverId: stopover2.id,
        },
    });

    // Create a user
    const user = await prisma.user.create({
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
    const booking1 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user.id,
            flightId: flight1.id,
        },
    });

    const booking2 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user2.id,
            flightId: flight2.id,
        },
    });

    await prisma.bookingsOnPassengers.create({
        data: {
            bookingId: booking1.id,
            passengerId: passenger1.id,
        },
    });

    await prisma.bookingsOnPassengers.create({
        data: {
            bookingId: booking2.id,
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
