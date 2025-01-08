import Image from 'next/image';
import styles from "@/components/ui/HeroBanner.module.css";
import Link from "next/link";

export function HeroBanner() {
    return (
        <section className={styles.heroBanner}>
            <Image
                src="/assets/image/mars-1.jpg"
                alt="Hero Banner"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className={styles.teaser}>
                <h1>A new dawn, Mars</h1>
                <Link className="taxonomy-term" href={'/'}>HOT</Link>
                <p className="hero-text">The new step of humanity, reachable right now.</p>
                <p className="map-text">Over 62 millions km from Earth</p>
            </div>

                <button className={styles.callToAction}>
                    See more
                </button>
        </section>
    );
}