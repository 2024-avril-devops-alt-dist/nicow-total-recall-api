"use client";
import {useFetchData} from "@/hooks/useFetchData";
import styles from "@/components/ui/SearchResults/SearchResults.module.css";
import {Button} from "@chakra-ui/react";
import {Flight} from "@prisma/client";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export const SearchResults = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/search?${params}`;
    const queryKey = ['flights', params.toString()];
    const {data, isLoading, isError} = useFetchData(url, queryKey);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <div>
            <ul className={styles.searchResult}>
                {data.length > 0 ? (
                    data.map((flight: Flight) => (
                        <li key={flight.id} className={styles.searchListItem}>
                            <p>Departure airport : {flight.departureAirport.airportName}</p>
                            <p>Arrival airport : {flight.arrivalAirport.airportName}</p>
                            <p>Departure date : {new Date(flight.departureDate).toLocaleString()}</p>
                            <p>Arrival date : {new Date(flight.arrivalDate).toLocaleString()}</p>
                            <Link href={`/booking/${flight.id}`}><Button colorPalette={"orange"}>Book this
                                flight</Button></Link>
                        </li>
                    ))
                ) : (
                    <p>No flight found for your research.</p>
                )}
            </ul>
        </div>
    )
}