import Image from 'next/image';
import styles from "@/components/ui/HeroBanner.module.css";

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
                <span className="taxonomy-term">HOT</span>
                <p className="hero-text">The new step of humanity, reachable right now.</p>
                <p className="map-text">C'est loin d'ici !</p>
            </div>
            <div className={styles.callToAction}>
                <button>
                    See more
                </button>
            </div>
        </section>
    );
}