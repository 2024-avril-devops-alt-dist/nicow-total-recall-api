import {SearchBar} from "@/components/ui/SearchBar/SearchBar";
import {SearchResults} from "@/components/ui/SearchResults/SearchResults";

export default function OpenFlights() {
    return (
        <section className="content">
            <SearchBar />
            <SearchResults />
        </section>
    )
}