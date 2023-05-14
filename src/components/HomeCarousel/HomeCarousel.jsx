import './assets/home-carousel.css'
import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
    {
        alt: "Citadel Library",
        src: require("./assets/carousel-item-1.jpg")
    },
    {
        alt: "Samwell alone",
        src: require("./assets/carousel-item-2.jpg")
    },
    {
        alt: "Samwell with the maester",
        src: require("./assets/carousel-item-3.jpg")
    }
]
 
export default function HomeCarousel() {
    const carouselItems = images.map((img, idx) => (
        <Carousel.Item key={idx} className="carousel-item">
            <img src={img.src} alt={img.alt} />
        </Carousel.Item>
    ))

    return (
        <Carousel fade
            className="carousel-container">
            {carouselItems} 
        </Carousel>
    ); 
}