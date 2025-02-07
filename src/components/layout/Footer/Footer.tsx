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
                    <p>Ce n'est pas une défaillance de votre ordinateur.</p>
                    <p>N'essayez pas de régler l'image.</p>
                    <p>Nous maîtrisons toute la transmission.</p>
                    <p>Nous contrôlons les horizontales et les verticales.</p>
                </footer>
            }

        </>
    )
}