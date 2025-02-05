"use client";
import {useFetchData} from "@/hooks/useFetchData";
import {useState} from "react";
import styles from "@/components/ui/SearchBar/SearchBar.module.css";
import {Input} from "@chakra-ui/react";
import {Flight} from "@prisma/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchBar = () => {
    const url1 = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/Flight`;
    const queryKey1 = ['flights'];
    const {data, isLoading, isError} = useFetchData(url1, queryKey1);

    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    console.log(data);

    const filteredFlights = data.filter((flight: Flight) => {
        const flightDepartureDate = new Date(flight.departureDate);
        const flightArrivalDate = new Date(flight.arrivalDate);

        const isSameDate = (date1: Date, date2: Date | null) => {
            return (
                date2 &&
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
            );
        };

        return (
            (departure ? flight.departureAirport.toLowerCase().includes(departure.toLowerCase()) : true) &&
            (arrival ? flight.arrivalAirport.toLowerCase().includes(arrival.toLowerCase()) : true) &&
            (departureDate ? isSameDate(flightDepartureDate, departureDate) : true) &&
            (arrivalDate ? isSameDate(flightArrivalDate, arrivalDate) : true)
        );
    });

    const filteredActiveFlights = filteredFlights.filter(
        (flight: Flight) => flight.bookingOpenStatus && flight.flightStatus
    );

    return (
        <>
            <div>
                <form className={styles.searchBarForm} onSubmit={(e) => e.preventDefault()}>
                    <Input
                        placeholder="Departure"
                        variant="subtle"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                    <Input
                        placeholder="Arrival"
                        variant="subtle"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    />
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        placeholderText="Departure date"
                        dateFormat="yyyy-MM-dd"
                        className="chakra-input css-1l2k40q"
                    />
                    <DatePicker
                        selected={arrivalDate}
                        onChange={(date) => setArrivalDate(date)}
                        placeholderText="Arrival date"
                        dateFormat="yyyy-MM-dd"
                        className="chakra-input css-1l2k40q"
                    />
                </form>
            </div>
            <div>
                <ul className={styles.searchResult}>
                    {filteredActiveFlights.length > 0 ? (
                        filteredActiveFlights.map((flight: Flight) => (
                            <li key={flight.id}>
                                <p>Departure airport {flight.departureAirport}</p>
                                <p>Arrival airport {flight.arrivalAirport}</p>
                                <p>Departure date {new Date(flight.departureDate).toLocaleString()}</p>
                                <p>Arrival date {new Date(flight.arrivalDate).toLocaleString()}</p>
                            </li>
                        ))
                    ) : (
                        <p>No flight found.</p>
                    )}
                </ul>
            </div>
        </>
    )
}