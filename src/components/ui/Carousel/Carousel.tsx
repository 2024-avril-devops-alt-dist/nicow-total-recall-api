"use client";
import Image from 'next/image';
import styles from '@/components/ui/Carousel/Carousel.module.css';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Button} from "@/components/ui/button";
import {Tag} from "@/components/ui/tag";
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
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                        <div className={styles.teaser}>
                            <h2>{image.title}</h2>
                            <Tag className={styles.tag} colorPalette={"red"}>Hot</Tag>
                            <p>{image.description}</p>
                            <Link href={"/search"}><Button className={styles.button} colorPalette={"orange"}>See More</Button></Link>

                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}