"use client";
import useFetchData from "@/hooks/useFetchData";
export const SearchBar= () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/Flight`;
    const queryKey = ['flights'];
    const { data, isLoading, isError } = useFetchData(url, queryKey);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    console.log(data);

    return (
        <div>
            data.flight.id
        </div>
    )
}