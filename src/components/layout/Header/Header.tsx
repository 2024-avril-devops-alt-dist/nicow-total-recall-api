import { Nav } from "@/components/layout/Nav/Nav";
import styles from "@/components/layout/Header/Header.module.css";
import {headers} from "next/headers";

export function Header() {
    const headersList = headers() as Headers;
    const isHomePage = headersList.get("X-Is-Home") === "true";

    return (
        <header className={isHomePage ? styles.headerHome : styles.header}>
            <Nav />
        </header>
    );
}