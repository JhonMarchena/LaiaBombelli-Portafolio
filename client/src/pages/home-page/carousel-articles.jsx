import React from "react";
import { Carousel } from "antd";

//Import images
import img1 from "../../assets/carousel-section/IMG_7964.webp";
import img2 from "../../assets/carousel-section/IMG_7975.webp";
import img3 from "../../assets/carousel-section/IMG_7965.webp";
import img4 from "../../assets/carousel-section/IMG_8019.webp";
import img5 from "../../assets/carousel-section/IMG_7938.webp";

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100svh",
  padding: "10px",
  boxSizing: "border-box",
};

const carouselStyle = {
  width: "100%",
  maxWidth: "1200px",
};

const imgStyle = {
  width: "100%",
  height: "90svh",
  objectFit: "cover",
  objectPosition: "center 35%", // valor por defecto
  borderRadius: "none",
  display: "block",
};

const CarouselArticles = () => (
  <div style={wrapperStyle}>
    <div style={carouselStyle}>
      <Carousel autoplay autoplaySpeed={3000} dots={true} effect="fade">
        <div>
          <img
            src={img1}
            alt="Image 1"
            style={{ ...imgStyle, objectPosition: "center 60%" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Image 2"
            style={{ ...imgStyle, objectPosition: "center 50%" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ ...imgStyle, objectPosition: "center 20%" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ ...imgStyle, objectPosition: "center 70%" }}
          />
        </div>

        <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ ...imgStyle, objectPosition: "center 50%" }}
          />
        </div>
      </Carousel>
    </div>
  </div>
);
export default CarouselArticles;
