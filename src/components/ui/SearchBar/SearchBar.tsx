"use client";
import {useEffect, useState} from "react";
import styles from "@/components/ui/SearchBar/SearchBar.module.css";
import {Button} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter, useSearchParams} from "next/navigation";
import {useFetchData} from "@/hooks/useFetchData";
import {
    NativeSelectField,
    NativeSelectRoot,
} from "@/components/ui/native-select"

export const SearchBar = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [departureAirport, setDepartureAirport] = useState(searchParams.get("departureAirport") || "");
    const [arrivalAirport, setArrivalAirport] = useState(searchParams.get("arrivalAirport") || "");
    const [departureDate, setDepartureDate] = useState(
        searchParams.get("departureDate") ? new Date(searchParams.get("departureDate")!) : null
    );
    const [arrivalDate, setArrivalDate] = useState(
        searchParams.get("arrivalDate") ? new Date(searchParams.get("arrivalDate")!) : null
    );

    // Change values on state when searchParams change
    useEffect(() => {
        setDepartureAirport(searchParams.get("departureAirport") || "");
        setArrivalAirport(searchParams.get("arrivalAirport") || "");
        setDepartureDate(searchParams.get("departureDate") ? new Date(searchParams.get("departureDate")!) : null);
        setArrivalDate(searchParams.get("arrivalDate") ? new Date(searchParams.get("arrivalDate")!) : null);
    }, [searchParams]);

    // Redirection to open-flights results page with params selected in searchbar
    const handleSearch = () => {
        const params = new URLSearchParams();

        if (departureAirport) params.append("departureAirport", departureAirport);
        if (arrivalAirport) params.append("arrivalAirport", arrivalAirport);
        if (departureDate) params.append("departureDate", departureDate.toISOString().split("T")[0]);
        if (arrivalDate) params.append("arrivalDate", arrivalDate.toISOString().split("T")[0]);

        router.push(`/search/open-flights?${params.toString()}`);
    };

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/Airport`;
    const queryKey = ['airports'];
    const {data, isLoading, isError} = useFetchData(url, queryKey);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    const airportItems =
        data.map((airport: { id: string; airportName: string }) => ({
            value: airport.id,
            label: airport.airportName,
        }));

    console.log(airportItems)

    return (
            <div>
                <form className={styles.searchBarForm} onSubmit={(e) => e.preventDefault()}>
                    <NativeSelectRoot
                        variant="subtle"
                    >
                        <NativeSelectField
                            placeholder="Departure airport"
                            items={airportItems}
                            value={departureAirport}
                            onChange={(e) => setDepartureAirport(e.currentTarget.value)}>
                        </NativeSelectField>
                    </NativeSelectRoot>
                    <NativeSelectRoot
                        variant="subtle"

                    >
                        <NativeSelectField
                            placeholder="Arrival airport"
                            items={airportItems}
                            value={arrivalAirport}
                            onChange={(e) => setArrivalAirport(e.currentTarget.value)}
                        />
                    </NativeSelectRoot>
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        placeholderText="Departure date"
                        dateFormat="yyyy-MM-dd"
                        className={styles.searchBarDatePicker}
                    />
                    <DatePicker
                        selected={arrivalDate}
                        onChange={(date) => setArrivalDate(date)}
                        placeholderText="Arrival date"
                        dateFormat="yyyy-MM-dd"
                        className={styles.searchBarDatePicker}
                    />
                    <Button onClick={handleSearch} colorPalette={"orange"}>Search</Button>
                </form>
            </div>
    )
}