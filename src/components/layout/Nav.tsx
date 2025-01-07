import {AppBar} from "@/components/auth/AppBar";
import styles from '@/components/layout/Nav.module.css';
import Link from "next/link";
import Image from "next/image";

export function Nav () {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.itemList}><Link href={"/dashboard"}>Dashboard</Link></li>
                <li className={styles.itemList}><Link href={"/booking"}>Booking</Link></li>
                <li className={styles.itemList}><Link href={"/"}>Space Travel
                    <Image
                    src="/assets/image/rocket.svg"
                    alt="Rocket logo"
                    width={50}
                    height={50}
                    priority
                />
                </Link></li>
                <li className={styles.itemList}><Link href={"/contact"}>Contact</Link></li>
                <li className={styles.itemList}><AppBar /></li>
            </ul>
        </nav>
    )
}