"use client";
import {useFetchData} from "@/hooks/useFetchData";
import { useState } from "react";
import styles from "@/components/ui/SearchBar/SearchBar.module.css";

export const SearchBar = () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/Flight`;
    const queryKey = ['flights'];
    const {data, isLoading, isError} = useFetchData(url, queryKey);

    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    console.log(data);

    // Type on "any" to change here
    const filteredFlights = data.filter((flight: any) => {
        return (
            (departure ? flight.departureAirport.toLowerCase().includes(departure.toLowerCase()) : true) &&
            (arrival ? flight.arrivalAirport.toLowerCase().includes(arrival.toLowerCase()) : true)
        );
    });

    return (
        <>
            <div className={styles.searchBar}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Départ"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Arrivée"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    />
                </form>
            </div>
            <div className={styles.searchResult}>
                {filteredFlights.length > 0 ? (
                    filteredFlights.map((flight: any) => (
                        <li key={flight.id}>
                            <p>{flight.departureAirport} ➡️ {flight.arrivalAirport}</p>
                            <p>🛫 {new Date(flight.departureDate).toLocaleString()}</p>
                            <p>🛬 {new Date(flight.arrivalDate).toLocaleString()}</p>
                            <p>{flight.bookingOpenStatus ? "✅ Booking Open" : "❌ Closed"}</p>
                            <p>{flight.flightStatus ? "🟢 Active" : "🔴 Inactive"}</p>
                        </li>
                    ))
                ) : (
                    <p>Aucun vol trouvé.</p>
                )}
            </div>
        </>
    )
}