"use client";
import {useEffect, useState} from "react";
import styles from "@/components/ui/SearchBar/SearchBar.module.css";
import {Button, Input} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter, useSearchParams} from "next/navigation";

export const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [departure, setDeparture] = useState(searchParams.get("departure") || "");
    const [arrival, setArrival] = useState(searchParams.get("arrival") || "");
    const [departureDate, setDepartureDate] = useState(
        searchParams.get("departureDate") ? new Date(searchParams.get("departureDate")!) : null
    );
    const [arrivalDate, setArrivalDate] = useState(
        searchParams.get("arrivalDate") ? new Date(searchParams.get("arrivalDate")!) : null
    );

    // Change values on state when searchParams change
    useEffect(() => {
        setDeparture(searchParams.get("departure") || "");
        setArrival(searchParams.get("arrival") || "");
        setDepartureDate(searchParams.get("departureDate") ? new Date(searchParams.get("departureDate")!) : null);
        setArrivalDate(searchParams.get("arrivalDate") ? new Date(searchParams.get("arrivalDate")!) : null);
    }, [searchParams]);

    // Redirection to open-flights results page with params selected in searchbar
    const handleSearch = () => {
        const params = new URLSearchParams();

        if (departure) params.append("departure", departure);
        if (arrival) params.append("arrival", arrival);
        if (departureDate) params.append("departureDate", departureDate.toISOString());
        if (arrivalDate) params.append("arrivalDate", arrivalDate.toISOString());

        router.push(`/search/open-flights?${params.toString()}`);
    };

    return (
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
                    <Button onClick={handleSearch} colorPalette={"orange"}>Search</Button>
                </form>
            </div>
    )
}