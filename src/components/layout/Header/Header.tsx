import {Nav} from "@/components/layout/Nav/Nav";
import styles from "@/components/layout/Header/Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Nav />
        </header>
    )
}