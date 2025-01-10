import {useQuery} from "react-query";
const useFetchData = (url:string, queryKey:Array<string>) => {
    const { isLoading, error, data, isError } = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const response = await fetch(url);
            return await response.json();
        },
    });
    return { isLoading, error, data, isError };
};

export default useFetchData;