import {AppBar} from "@/components/auth/appbar";
import styles from '@/components/layout/Nav.module.css';
import Link from "next/link";
import Image from "next/image";

export function Nav () {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.itemList}><Link href={"/"}>Dashboard</Link></li>
                <li className={styles.itemList}><Link href={"/"}>Reservations</Link></li>
                <li className={styles.itemList}><Link href={"/"}>Space Travel
                    <Image
                    src="/assets/image/rocket-62.svg"
                    alt="Rocket logo"
                    width={50}
                    height={50}
                    priority
                />
                </Link></li>
                <li className={styles.itemList}><Link href={"/"}>Contact</Link></li>
                <li className={styles.itemList}><Link href={"/"}>Profile</Link></li>
                <li><AppBar /></li>
            </ul>
        </nav>
    )
}