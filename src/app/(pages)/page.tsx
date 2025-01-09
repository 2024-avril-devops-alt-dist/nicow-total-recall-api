import "swagger-ui-react/swagger-ui.css";
import Carousel from "@/components/ui/Carousel/Carousel";

const images = [
    {
        src: '/assets/image/mars-1.jpg',
        alt: 'Slide 1',
        title: 'Welcome to Space Travel',
        description: 'Explore the universe with us!',
    },
    {
        src: '/assets/image/mars-1.jpg',
        alt: 'Slide 2',
        title: 'Book Your Next Adventure',
        description: 'Reservations open now for Mars and beyond.',
    },
    {
        src: '/assets/image/mars-1.jpg',
        alt: 'Slide 3',
        title: 'Experience the Unknown',
        description: 'Join us for a journey beyond the stars.',
    },
];
export default function Home() {
  return (
    <div>
        <Carousel images={images} />
    </div>
  );
}