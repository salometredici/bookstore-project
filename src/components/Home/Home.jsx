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

const Home = () => {
    
    const carouselItems = images.map((img, idx) => (
        <Carousel.Item key={idx} className="carousel-item">
            <img src={img.src} alt={img.alt} />
        </Carousel.Item>
    ))

    return (
        <Carousel
            className="carousel-container">
            {carouselItems} 
        </Carousel>
    );  
}
export default Home;