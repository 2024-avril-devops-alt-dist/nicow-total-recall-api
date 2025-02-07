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
            city: 'New New York',
            planet: 'Mars',
        },
    });

    const location5 = await prisma.location.create({
        data: {
            city: 'Tokyo',
            planet: 'Earth',
        },
    });

    const location6 = await prisma.location.create({
        data: {
            city: 'Londres',
            planet: 'Earth',
        },
    });

    const location7 = await prisma.location.create({
        data: {
            city: 'Berlin',
            planet: 'Earth',
        },
    });

    const location8 = await prisma.location.create({
        data: {
            city: 'Sydney',
            planet: 'Earth',
        },
    });

    const location9 = await prisma.location.create({
        data: {
            city: 'Los Angeles',
            planet: 'Earth',
        },
    });

    const location10 = await prisma.location.create({
        data: {
            city: 'Beijing',
            planet: 'Earth',
        },
    });

    const location11 = await prisma.location.create({
        data: {
            city: 'Moscow',
            planet: 'Earth',
        },
    });

    const location12 = await prisma.location.create({
        data: {
            city: 'Dubai',
            planet: 'Earth',
        },
    });

    const location13 = await prisma.location.create({
        data: {
            city: 'São Paulo',
            planet: 'Earth',
        },
    });

    const location14 = await prisma.location.create({
        data: {
            city: 'Mexico City',
            planet: 'Earth',
        },
    });

    const location15 = await prisma.location.create({
        data: {
            city: 'Alpha Station',
            planet: 'Mars',
        },
    });

    const location16 = await prisma.location.create({
        data: {
            city: 'Red Valley',
            planet: 'Mars',
        },
    });

    const location17 = await prisma.location.create({
        data: {
            city: 'Olympus Town',
            planet: 'Mars',
        },
    });

    const location18 = await prisma.location.create({
        data: {
            city: 'Cydonia Base',
            planet: 'Mars',
        },
    });

    const location19 = await prisma.location.create({
        data: {
            city: 'Titan Colony',
            planet: 'Titan',
        },
    });

    const location20 = await prisma.location.create({
        data: {
            city: 'Europa Hub',
            planet: 'Europa',
        },
    });

    const location21 = await prisma.location.create({
        data: {
            city: 'Ganymede Outpost',
            planet: 'Ganymede',
        },
    });

    const location22 = await prisma.location.create({
        data: {
            city: 'Io Station',
            planet: 'Io',
        },
    });

    const location23 = await prisma.location.create({
        data: {
            city: 'Neptune Dock',
            planet: 'Neptune',
        },
    });

    const location24 = await prisma.location.create({
        data: {
            city: 'Pluto Terminal',
            planet: 'Pluto',
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

    const airlineCompany3 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Galactic Express',
        },
    });

    const airlineCompany4 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Solar Wings',
        },
    });

    const airlineCompany5 = await prisma.airlineCompany.create({
        data: {
            companyName: 'CosmoFly',
        },
    });

    const airlineCompany6 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Nebula Air',
        },
    });

    const airlineCompany7 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Stellar Voyages',
        },
    });

    const airlineCompany8 = await prisma.airlineCompany.create({
        data: {
            companyName: 'AstroLink',
        },
    });

    const airlineCompany9 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Quantum Airways',
        },
    });

    const airlineCompany10 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Wormhole Travels',
        },
    });

    const airlineCompany11 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Lunar Airlines',
        },
    });

    const airlineCompany12 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Venus Shuttles',
        },
    });

    const airlineCompany13 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Saturn Rings Airlines',
        },
    });

    const airlineCompany14 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Titan Skies',
        },
    });

    const airlineCompany15 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Orion Jetliners',
        },
    });

    const airlineCompany16 = await prisma.airlineCompany.create({
        data: {
            companyName: 'HyperSpace Airlines',
        },
    });

    const airlineCompany17 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Dark Matter Flights',
        },
    });

    const airlineCompany18 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Antimatter Express',
        },
    });

    const airlineCompany19 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Intergalactic Cruisers',
        },
    });

    const airlineCompany20 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Andromeda Airways',
        },
    });

    const airlineCompany21 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Celestial Jet',
        },
    });

    const airlineCompany22 = await prisma.airlineCompany.create({
        data: {
            companyName: 'Asteroid Airlines',
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

    const airport5 = await prisma.airport.create({
        data: {
            airportName: 'Earth Central Hub',
            locationId: location5.id,
        },
    });

    const airport6 = await prisma.airport.create({
        data: {
            airportName: 'Lunar Gateway',
            locationId: location6.id,
        },
    });

    const airport7 = await prisma.airport.create({
        data: {
            airportName: 'Berlin Skyport',
            locationId: location7.id,
        },
    });

    const airport8 = await prisma.airport.create({
        data: {
            airportName: 'Sydney Spaceport',
            locationId: location8.id,
        },
    });

    const airport9 = await prisma.airport.create({
        data: {
            airportName: 'LA Hyperport',
            locationId: location9.id,
        },
    });

    const airport10 = await prisma.airport.create({
        data: {
            airportName: 'Beijing Orbit Station',
            locationId: location10.id,
        },
    });

    const airport11 = await prisma.airport.create({
        data: {
            airportName: 'Moscow Space Terminal',
            locationId: location11.id,
        },
    });

    const airport12 = await prisma.airport.create({
        data: {
            airportName: 'Dubai Starport',
            locationId: location12.id,
        },
    });

    const airport13 = await prisma.airport.create({
        data: {
            airportName: 'São Paulo Aeroport',
            locationId: location13.id,
        },
    });

    const airport14 = await prisma.airport.create({
        data: {
            airportName: 'Mexico City Skylines',
            locationId: location14.id,
        },
    });

    const airport15 = await prisma.airport.create({
        data: {
            airportName: 'Alpha Marsport',
            locationId: location15.id,
        },
    });

    const airport16 = await prisma.airport.create({
        data: {
            airportName: 'Red Valley Aerodrome',
            locationId: location16.id,
        },
    });

    const airport17 = await prisma.airport.create({
        data: {
            airportName: 'Olympus Landing Pad',
            locationId: location17.id,
        },
    });

    const airport18 = await prisma.airport.create({
        data: {
            airportName: 'Cydonia Central Port',
            locationId: location18.id,
        },
    });

    const airport19 = await prisma.airport.create({
        data: {
            airportName: 'Titan Shuttleport',
            locationId: location19.id,
        },
    });

    const airport20 = await prisma.airport.create({
        data: {
            airportName: 'Europa Gateway',
            locationId: location20.id,
        },
    });

    const airport21 = await prisma.airport.create({
        data: {
            airportName: 'Ganymede Space Terminal',
            locationId: location21.id,
        },
    });

    const airport22 = await prisma.airport.create({
        data: {
            airportName: 'Io Hyperstation',
            locationId: location22.id,
        },
    });

    const airport23 = await prisma.airport.create({
        data: {
            airportName: 'Neptune Hub',
            locationId: location23.id,
        },
    });

    const airport24 = await prisma.airport.create({
        data: {
            airportName: 'Pluto Outpost',
            locationId: location24.id,
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

    const flight3 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport5.id,
            arrivalAirportId: airport6.id,
            departureDate: new Date('2025-02-15T10:00:00Z'),
            arrivalDate: new Date('2025-02-15T18:00:00Z'),
            airlineCompanyId: airlineCompany3.id,
        },
    });

    const flight4 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport7.id,
            arrivalAirportId: airport8.id,
            departureDate: new Date('2025-03-01T10:00:00Z'),
            arrivalDate: new Date('2025-03-01T18:00:00Z'),
            airlineCompanyId: airlineCompany4.id,
        },
    });

    const flight5 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport9.id,
            arrivalAirportId: airport10.id,
            departureDate: new Date('2025-03-20T10:00:00Z'),
            arrivalDate: new Date('2025-03-20T18:00:00Z'),
            airlineCompanyId: airlineCompany5.id,
        },
    });

    const flight6 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport11.id,
            arrivalAirportId: airport12.id,
            departureDate: new Date('2025-04-10T10:00:00Z'),
            arrivalDate: new Date('2025-04-10T18:00:00Z'),
            airlineCompanyId: airlineCompany6.id,
        },
    });

    const flight7 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: false,
            departureAirportId: airport13.id,
            arrivalAirportId: airport14.id,
            departureDate: new Date('2025-05-01T10:00:00Z'),
            arrivalDate: new Date('2025-05-01T18:00:00Z'),
            airlineCompanyId: airlineCompany7.id,
        },
    });

    const flight8 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport15.id,
            arrivalAirportId: airport16.id,
            departureDate: new Date('2025-06-01T10:00:00Z'),
            arrivalDate: new Date('2025-06-01T18:00:00Z'),
            airlineCompanyId: airlineCompany8.id,
        },
    });

    const flight9 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport17.id,
            arrivalAirportId: airport18.id,
            departureDate: new Date('2025-07-10T10:00:00Z'),
            arrivalDate: new Date('2025-07-10T18:00:00Z'),
            airlineCompanyId: airlineCompany9.id,
        },
    });

    const flight10 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport19.id,
            arrivalAirportId: airport20.id,
            departureDate: new Date('2025-08-15T10:00:00Z'),
            arrivalDate: new Date('2025-08-15T18:00:00Z'),
            airlineCompanyId: airlineCompany10.id,
        },
    });

    const flight11 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: true,
            departureAirportId: airport21.id,
            arrivalAirportId: airport22.id,
            departureDate: new Date('2025-09-01T10:00:00Z'),
            arrivalDate: new Date('2025-09-01T18:00:00Z'),
            airlineCompanyId: airlineCompany11.id,
        },
    });

    const flight12 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport23.id,
            arrivalAirportId: airport24.id,
            departureDate: new Date('2025-09-15T10:00:00Z'),
            arrivalDate: new Date('2025-09-15T18:00:00Z'),
            airlineCompanyId: airlineCompany12.id,
        },
    });

    const flight13 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport5.id,
            arrivalAirportId: airport6.id,
            departureDate: new Date('2025-10-01T10:00:00Z'),
            arrivalDate: new Date('2025-10-01T18:00:00Z'),
            airlineCompanyId: airlineCompany13.id,
        },
    });

    const flight14 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: true,
            departureAirportId: airport7.id,
            arrivalAirportId: airport8.id,
            departureDate: new Date('2025-11-01T10:00:00Z'),
            arrivalDate: new Date('2025-11-01T18:00:00Z'),
            airlineCompanyId: airlineCompany14.id,
        },
    });

    const flight15 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport9.id,
            arrivalAirportId: airport10.id,
            departureDate: new Date('2025-12-01T10:00:00Z'),
            arrivalDate: new Date('2025-12-01T18:00:00Z'),
            airlineCompanyId: airlineCompany15.id,
        },
    });

    const flight16 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport11.id,
            arrivalAirportId: airport12.id,
            departureDate: new Date('2026-01-01T10:00:00Z'),
            arrivalDate: new Date('2026-01-01T18:00:00Z'),
            airlineCompanyId: airlineCompany16.id,
        },
    });

    const flight17 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport13.id,
            arrivalAirportId: airport14.id,
            departureDate: new Date('2026-02-01T10:00:00Z'),
            arrivalDate: new Date('2026-02-01T18:00:00Z'),
            airlineCompanyId: airlineCompany17.id,
        },
    });

    const flight18 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport15.id,
            arrivalAirportId: airport16.id,
            departureDate: new Date('2026-03-01T10:00:00Z'),
            arrivalDate: new Date('2026-03-01T18:00:00Z'),
            airlineCompanyId: airlineCompany18.id,
        },
    });

    const flight19 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: true,
            departureAirportId: airport17.id,
            arrivalAirportId: airport18.id,
            departureDate: new Date('2026-04-01T10:00:00Z'),
            arrivalDate: new Date('2026-04-01T18:00:00Z'),
            airlineCompanyId: airlineCompany19.id,
        },
    });

    const flight20 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport19.id,
            arrivalAirportId: airport20.id,
            departureDate: new Date('2026-05-01T10:00:00Z'),
            arrivalDate: new Date('2026-05-01T18:00:00Z'),
            airlineCompanyId: airlineCompany20.id,
        },
    });

    const flight21 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport1.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2025-02-20T10:00:00Z'),
            arrivalDate: new Date('2025-02-20T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight22 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: false,
            departureAirportId: airport3.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2025-03-10T10:00:00Z'),
            arrivalDate: new Date('2025-03-10T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight23 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport2.id,
            arrivalAirportId: airport3.id,
            departureDate: new Date('2025-04-12T10:00:00Z'),
            arrivalDate: new Date('2025-04-12T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight24 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport4.id,
            arrivalAirportId: airport1.id,
            departureDate: new Date('2025-05-15T10:00:00Z'),
            arrivalDate: new Date('2025-05-15T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight25 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport3.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2025-06-25T10:00:00Z'),
            arrivalDate: new Date('2025-06-25T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight26 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: false,
            departureAirportId: airport1.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2025-07-10T10:00:00Z'),
            arrivalDate: new Date('2025-07-10T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight27 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport2.id,
            arrivalAirportId: airport3.id,
            departureDate: new Date('2025-08-14T10:00:00Z'),
            arrivalDate: new Date('2025-08-14T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight28 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport4.id,
            arrivalAirportId: airport1.id,
            departureDate: new Date('2025-09-05T10:00:00Z'),
            arrivalDate: new Date('2025-09-05T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight29 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport1.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2025-10-01T10:00:00Z'),
            arrivalDate: new Date('2025-10-01T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight30 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport3.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2025-11-12T10:00:00Z'),
            arrivalDate: new Date('2025-11-12T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight31 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: false,
            departureAirportId: airport4.id,
            arrivalAirportId: airport1.id,
            departureDate: new Date('2025-12-20T10:00:00Z'),
            arrivalDate: new Date('2025-12-20T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight32 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport2.id,
            arrivalAirportId: airport3.id,
            departureDate: new Date('2026-01-25T10:00:00Z'),
            arrivalDate: new Date('2026-01-25T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight33 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: false,
            departureAirportId: airport1.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2026-02-28T10:00:00Z'),
            arrivalDate: new Date('2026-02-28T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight34 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport3.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2026-03-15T10:00:00Z'),
            arrivalDate: new Date('2026-03-15T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight35 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport4.id,
            arrivalAirportId: airport1.id,
            departureDate: new Date('2026-04-19T10:00:00Z'),
            arrivalDate: new Date('2026-04-19T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight36 = await prisma.flight.create({
        data: {
            bookingOpenStatus: false,
            flightStatus: false,
            departureAirportId: airport2.id,
            arrivalAirportId: airport3.id,
            departureDate: new Date('2026-05-22T10:00:00Z'),
            arrivalDate: new Date('2026-05-22T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });

    const flight37 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport1.id,
            arrivalAirportId: airport4.id,
            departureDate: new Date('2026-06-10T10:00:00Z'),
            arrivalDate: new Date('2026-06-10T18:00:00Z'),
            airlineCompanyId: airlineCompany1.id,
        },
    });

    const flight38 = await prisma.flight.create({
        data: {
            bookingOpenStatus: true,
            flightStatus: true,
            departureAirportId: airport3.id,
            arrivalAirportId: airport2.id,
            departureDate: new Date('2026-07-05T10:00:00Z'),
            arrivalDate: new Date('2026-07-05T18:00:00Z'),
            airlineCompanyId: airlineCompany2.id,
        },
    });


    // Create stopovers
    const stopover1 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2024-12-15T13:00:00Z'),
            departureDate: new Date('2024-12-15T14:30:00Z'),
            locationId: location3.id,
            flightId: flight1.id,
        },
    });

    const stopover2 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-01-15T13:00:00Z'),
            departureDate: new Date('2025-01-15T14:30:00Z'),
            locationId: location3.id,
            flightId: flight2.id
        },
    });

    const stopover3 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-02-15T12:00:00Z'),
            departureDate: new Date('2025-02-15T13:30:00Z'),
            locationId: location5.id,
            flightId: flight3.id,
        },
    });

    const stopover4 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-03-01T12:00:00Z'),
            departureDate: new Date('2025-03-01T13:30:00Z'),
            locationId: location6.id,
            flightId: flight4.id,
        },
    });

    const stopover5 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-03-20T12:00:00Z'),
            departureDate: new Date('2025-03-20T13:30:00Z'),
            locationId: location7.id,
            flightId: flight5.id,
        },
    });

    const stopover6 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-04-10T12:00:00Z'),
            departureDate: new Date('2025-04-10T13:30:00Z'),
            locationId: location8.id,
            flightId: flight6.id,
        },
    });

    const stopover7 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-05-01T12:00:00Z'),
            departureDate: new Date('2025-05-01T13:30:00Z'),
            locationId: location9.id,
            flightId: flight7.id,
        },
    });

    const stopover8 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-06-01T12:00:00Z'),
            departureDate: new Date('2025-06-01T13:30:00Z'),
            locationId: location10.id,
            flightId: flight8.id,
        },
    });

    const stopover9 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-07-10T12:00:00Z'),
            departureDate: new Date('2025-07-10T13:30:00Z'),
            locationId: location11.id,
            flightId: flight9.id,
        },
    });

    const stopover10 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-08-15T12:00:00Z'),
            departureDate: new Date('2025-08-15T13:30:00Z'),
            locationId: location12.id,
            flightId: flight10.id,
        },
    });

    const stopover11 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-09-01T12:00:00Z'),
            departureDate: new Date('2025-09-01T13:30:00Z'),
            locationId: location13.id,
            flightId: flight11.id,
        },
    });

    const stopover12 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-09-15T12:00:00Z'),
            departureDate: new Date('2025-09-15T13:30:00Z'),
            locationId: location14.id,
            flightId: flight12.id,
        },
    });

    const stopover13 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-10-01T12:00:00Z'),
            departureDate: new Date('2025-10-01T13:30:00Z'),
            locationId: location15.id,
            flightId: flight13.id,
        },
    });

    const stopover14 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-11-01T12:00:00Z'),
            departureDate: new Date('2025-11-01T13:30:00Z'),
            locationId: location16.id,
            flightId: flight14.id,
        },
    });

    const stopover15 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2025-12-01T12:00:00Z'),
            departureDate: new Date('2025-12-01T13:30:00Z'),
            locationId: location17.id,
            flightId: flight15.id,
        },
    });

    const stopover16 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2026-01-01T12:00:00Z'),
            departureDate: new Date('2026-01-01T13:30:00Z'),
            locationId: location18.id,
            flightId: flight16.id,
        },
    });

    const stopover17 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2026-02-01T12:00:00Z'),
            departureDate: new Date('2026-02-01T13:30:00Z'),
            locationId: location19.id,
            flightId: flight17.id,
        },
    });

    const stopover18 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2026-03-01T12:00:00Z'),
            departureDate: new Date('2026-03-01T13:30:00Z'),
            locationId: location20.id,
            flightId: flight18.id,
        },
    });

    const stopover19 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2026-04-01T12:00:00Z'),
            departureDate: new Date('2026-04-01T13:30:00Z'),
            locationId: location21.id,
            flightId: flight19.id,
        },
    });

    const stopover20 = await prisma.stopover.create({
        data: {
            arrivalDate: new Date('2026-05-01T12:00:00Z'),
            departureDate: new Date('2026-05-01T13:30:00Z'),
            locationId: location22.id,
            flightId: flight20.id,
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

    const user3 = await prisma.user.create({
        data: {
            email: 'user3@example.com',
            phoneNotification: true,
            phoneNumber: '3333333333',
        },
    });

    const user4 = await prisma.user.create({
        data: {
            email: 'user4@example.com',
            phoneNotification: false,
            phoneNumber: '4444444444',
        },
    });

    const user5 = await prisma.user.create({
        data: {
            email: 'user5@example.com',
            phoneNotification: true,
            phoneNumber: '5555555555',
        },
    });

    const user6 = await prisma.user.create({
        data: {
            email: 'user6@example.com',
            phoneNotification: false,
            phoneNumber: '6666666666',
        },
    });

    const user7 = await prisma.user.create({
        data: {
            email: 'user7@example.com',
            phoneNotification: true,
            phoneNumber: '7777777777',
        },
    });

    const user8 = await prisma.user.create({
        data: {
            email: 'user8@example.com',
            phoneNotification: false,
            phoneNumber: '8888888888',
        },
    });

    const user9 = await prisma.user.create({
        data: {
            email: 'user9@example.com',
            phoneNotification: true,
            phoneNumber: '9999999999',
        },
    });

    const user10 = await prisma.user.create({
        data: {
            email: 'user10@example.com',
            phoneNotification: false,
            phoneNumber: '1010101010',
        },
    });

    const user11 = await prisma.user.create({
        data: {
            email: 'user11@example.com',
            phoneNotification: true,
            phoneNumber: '1111111111',
        },
    });

    const user12 = await prisma.user.create({
        data: {
            email: 'user12@example.com',
            phoneNotification: false,
            phoneNumber: '1212121212',
        },
    });

    const user13 = await prisma.user.create({
        data: {
            email: 'user13@example.com',
            phoneNotification: true,
            phoneNumber: '1313131313',
        },
    });

    const user14 = await prisma.user.create({
        data: {
            email: 'user14@example.com',
            phoneNotification: false,
            phoneNumber: '1414141414',
        },
    });

    const user15 = await prisma.user.create({
        data: {
            email: 'user15@example.com',
            phoneNotification: true,
            phoneNumber: '1515151515',
        },
    });

    const user16 = await prisma.user.create({
        data: {
            email: 'user16@example.com',
            phoneNotification: false,
            phoneNumber: '1616161616',
        },
    });

    const user17 = await prisma.user.create({
        data: {
            email: 'user17@example.com',
            phoneNotification: true,
            phoneNumber: '1717171717',
        },
    });

    const user18 = await prisma.user.create({
        data: {
            email: 'user18@example.com',
            phoneNotification: false,
            phoneNumber: '1818181818',
        },
    });

    const user19 = await prisma.user.create({
        data: {
            email: 'user19@example.com',
            phoneNotification: true,
            phoneNumber: '1919191919',
        },
    });

    const user20 = await prisma.user.create({
        data: {
            email: 'user20@example.com',
            phoneNotification: false,
            phoneNumber: '2020202020',
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

    const passenger5 = await prisma.passenger.create({
        data: {
            firstName: 'Tom',
            lastName: 'Hanks',
            age: 40,
        },
    });

    const passenger6 = await prisma.passenger.create({
        data: {
            firstName: 'Emma',
            lastName: 'Watson',
            age: 35,
        },
    });

    const passenger7 = await prisma.passenger.create({
        data: {
            firstName: 'Leonardo',
            lastName: 'DiCaprio',
            age: 50,
        },
    });

    const passenger8 = await prisma.passenger.create({
        data: {
            firstName: 'Scarlett',
            lastName: 'Johansson',
            age: 30,
        },
    });

    const passenger9 = await prisma.passenger.create({
        data: {
            firstName: 'Robert',
            lastName: 'Downey Jr.',
            age: 55,
        },
    });

    const passenger10 = await prisma.passenger.create({
        data: {
            firstName: 'Chris',
            lastName: 'Hemsworth',
            age: 40,
        },
    });

    const passenger11 = await prisma.passenger.create({
        data: {
            firstName: 'Natalie',
            lastName: 'Portman',
            age: 38,
        },
    });

    const passenger12 = await prisma.passenger.create({
        data: {
            firstName: 'Mark',
            lastName: 'Ruffalo',
            age: 50,
        },
    });

    const passenger13 = await prisma.passenger.create({
        data: {
            firstName: 'Chris',
            lastName: 'Evans',
            age: 42,
        },
    });

    const passenger14 = await prisma.passenger.create({
        data: {
            firstName: 'Jeremy',
            lastName: 'Renner',
            age: 45,
        },
    });

    const passenger15 = await prisma.passenger.create({
        data: {
            firstName: 'Tom',
            lastName: 'Hiddleston',
            age: 43,
        },
    });

    const passenger16 = await prisma.passenger.create({
        data: {
            firstName: 'Paul',
            lastName: 'Rudd',
            age: 50,
        },
    });

    const passenger17 = await prisma.passenger.create({
        data: {
            firstName: 'Zoe',
            lastName: 'Saldana',
            age: 45,
        },
    });

    const passenger18 = await prisma.passenger.create({
        data: {
            firstName: 'Elizabeth',
            lastName: 'Olsen',
            age: 35,
        },
    });

    const passenger19 = await prisma.passenger.create({
        data: {
            firstName: 'Benedict',
            lastName: 'Cumberbatch',
            age: 48,
        },
    });

    const passenger20 = await prisma.passenger.create({
        data: {
            firstName: 'Chris',
            lastName: 'Pratt',
            age: 45,
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

    const booking3 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user3.id,
            flightId: flight1.id,
            passengers: {
                connect: [
                    { id: passenger5.id },
                    { id: passenger6.id },
                ],
            },
        },
    });

    const booking4 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user4.id,
            flightId: flight2.id,
            passengers: {
                connect: [
                    { id: passenger7.id },
                    { id: passenger8.id },
                ],
            },
        },
    });

    const booking5 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user5.id,
            flightId: flight3.id,
            passengers: {
                connect: [
                    { id: passenger9.id },
                    { id: passenger10.id },
                ],
            },
        },
    });

    const booking6 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user6.id,
            flightId: flight4.id,
            passengers: {
                connect: [
                    { id: passenger11.id },
                    { id: passenger12.id },
                ],
            },
        },
    });

    const booking7 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user7.id,
            flightId: flight5.id,
            passengers: {
                connect: [
                    { id: passenger13.id },
                    { id: passenger14.id },
                ],
            },
        },
    });

    const booking8 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user8.id,
            flightId: flight6.id,
            passengers: {
                connect: [
                    { id: passenger15.id },
                    { id: passenger16.id },
                ],
            },
        },
    });

    const booking9 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user9.id,
            flightId: flight7.id,
            passengers: {
                connect: [
                    { id: passenger17.id },
                    { id: passenger18.id },
                ],
            },
        },
    });

    const booking10 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user10.id,
            flightId: flight8.id,
            passengers: {
                connect: [
                    { id: passenger19.id },
                    { id: passenger20.id },
                ],
            },
        },
    });

    const booking11 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user11.id,
            flightId: flight9.id,
            passengers: {
                connect: [
                    { id: passenger5.id },
                    { id: passenger6.id },
                ],
            },
        },
    });

    const booking12 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user12.id,
            flightId: flight10.id,
            passengers: {
                connect: [
                    { id: passenger7.id },
                    { id: passenger8.id },
                ],
            },
        },
    });

    const booking13 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user13.id,
            flightId: flight11.id,
            passengers: {
                connect: [
                    { id: passenger9.id },
                    { id: passenger10.id },
                ],
            },
        },
    });

    const booking14 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user14.id,
            flightId: flight12.id,
            passengers: {
                connect: [
                    { id: passenger11.id },
                    { id: passenger12.id },
                ],
            },
        },
    });

    const booking15 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user15.id,
            flightId: flight13.id,
            passengers: {
                connect: [
                    { id: passenger13.id },
                    { id: passenger14.id },
                ],
            },
        },
    });

    const booking16 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user16.id,
            flightId: flight14.id,
            passengers: {
                connect: [
                    { id: passenger15.id },
                    { id: passenger16.id },
                ],
            },
        },
    });

    const booking17 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user17.id,
            flightId: flight15.id,
            passengers: {
                connect: [
                    { id: passenger17.id },
                    { id: passenger18.id },
                ],
            },
        },
    });

    const booking18 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user18.id,
            flightId: flight16.id,
            passengers: {
                connect: [
                    { id: passenger19.id },
                    { id: passenger20.id },
                ],
            },
        },
    });

    const booking19 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user19.id,
            flightId: flight17.id,
            passengers: {
                connect: [
                    { id: passenger5.id },
                    { id: passenger6.id },
                ],
            },
        },
    });

    const booking20 = await prisma.booking.create({
        data: {
            bookingStatus: 'Confirmed',
            userId: user20.id,
            flightId: flight18.id,
            passengers: {
                connect: [
                    { id: passenger7.id },
                    { id: passenger8.id },
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
