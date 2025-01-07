import Image from 'next/image';

export function HeroBanner() {
    return (
        <section style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
                src="/path/to/your/hero-image.jpg"
                alt="Hero Banner"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                <h1>A new dawn, Mars</h1>
                <span className="taxonomy-term"></span>
                <p className="hero-text">The new step of humanity, reachable right now.</p>
                <p className="map-text"></p>
            </div>
        </section>
    );
}