"use client";
import { usePathname } from "next/navigation";
import { Nav } from "@/components/layout/Nav/Nav";
import styles from "@/components/layout/Header/Header.module.css";

export function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <header className={isHomePage ? styles.headerHome : styles.header}>
            <Nav />
        </header>
    );
}