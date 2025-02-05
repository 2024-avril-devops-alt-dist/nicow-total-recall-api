"use client";
import styles from "@/components/layout/Footer/Footer.module.css";
import {usePathname} from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <>
            {isHomePage ?
                '' :
                <footer className={styles.footer}>
                    <p>Ceci est le footer. Tout droit réservés.</p>
                </footer>
            }

        </>
    )
}