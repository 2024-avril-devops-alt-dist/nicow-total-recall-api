"use client";
import Image from 'next/image';
import styles from '@/components/ui/Carousel/Carousel.module.css';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function Carousel({ images }: { images: { src: string; alt: string; title: string; description: string }[] }) {
    return (
        <Swiper
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation, A11y]}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.slider}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                        />
                        <div className={styles.teaser}>
                            <h2>{image.title}</h2>
                            <Link className='taxonomy-term' href={'/'}>Hot</Link>
                            <p>{image.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}