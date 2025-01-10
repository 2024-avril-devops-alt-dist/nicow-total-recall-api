"use client";
import {useFetchData} from "@/hooks/useFetchData";
import styles from "@/components/ui/SearchBar/SearchBar.module.css";

export const SearchBar = () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/Flight`;
    const queryKey = ['flights'];
    const {data, isLoading, isError} = useFetchData(url, queryKey);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    console.log(data);

    return (
        <div className={styles.search}>
            <ul>
                {data.map((flight: any) => (
                    <li key={flight.id}>
                        {flight.departureAirport} ➡️ {flight.arrivalAirport}
                        | 🛫 {new Date(flight.departureDate).toLocaleString()}
                        | 🛬 {new Date(flight.arrivalDate).toLocaleString()}
                        | {flight.bookingOpenStatus ? "✅ Booking Open" : "❌ Closed"}
                        | {flight.flightStatus ? "🟢 Active" : "🔴 Inactive"}
                    </li>
                ))}
            </ul>
        </div>
    )
}