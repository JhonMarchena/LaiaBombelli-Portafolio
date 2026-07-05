import React from "react";
import { Carousel } from "antd";
import "../index.css"; // estilos para forzar alto en los wrappers internos

const CarouselComponent = ({ children }) => (
  <Carousel
    autoplay
    autoplaySpeed={3000}
    dots={true}
    effect="fade"
    className="h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full"
  >
    {children}
  </Carousel>
);

export default CarouselComponent;
