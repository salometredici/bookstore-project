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
        src: require("./assets/carousel-item-2.png"),
        title: "Best books of May",
        descrip: "Shop this month best sellers - Free shipping on orders of $7000 or more"
    },
    {
        alt: "Samwell with the maester",
        src: require("./assets/carousel-item-3.png"),
        title: "Reading Week Special",
        descrip: "Celebrate and get 10% off your purchase on these deals!"
    }
]
 
export default function HomeCarousel() {
    const carouselItems = images.map((img, idx) => (
        <Carousel.Item key={idx} className="carousel-item">
            <img src={img.src} alt={img.alt} />
            { img.title && 
            <Carousel.Caption className="carousel-caption">
                <h3>{img.title}</h3>
                <p>{img.descrip}</p>
            </Carousel.Caption>}
        </Carousel.Item>
    ))

    return (
        <Carousel fade
            className="carousel-container">
            {carouselItems} 
        </Carousel>
    ); 
}