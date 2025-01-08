import {Nav} from "@/components/layout/Nav";
import styles from "@/components/layout/Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Nav />
        </header>
    )
}