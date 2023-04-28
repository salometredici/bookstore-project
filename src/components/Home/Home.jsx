import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
    {
        alt: "Citadel Library",
        src: "./assets/carousel-item-1.jpg"
    },
    {
        alt: "Samwell alone",
        src: "./assets/carousel-item-2.jpg"
    },
    {
        alt: "Samwell with the maester",
        src: "./assets/carousel-item-3.jpg"
    }
]
 
function Home() {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-container">
            {images.map(image => (
                <Carousel.Item key={image.alt}>
                    <img
                        src={image.url}
                        alt={image.alt}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );  
}

export default Home;