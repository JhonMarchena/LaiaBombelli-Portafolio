import React from "react";
import { Carousel } from "antd";

//Import images
import img1 from "../../assets/IMG_9565.webp";
import img2 from "../../assets/IMG_9560.webp";
import img3 from "../../assets/IMG_9562.webp";
import img4 from "../../assets/IMG_9571.webp";
import img5 from "../../assets/IMG_9558.webp";
import img6 from "../../assets/IMG_9561.webp";

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
          <img src={img2} alt="Image 2" style={imgStyle} />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ ...imgStyle, objectPosition: "center 75%" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ ...imgStyle, objectPosition: "center 75%" }}
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ ...imgStyle, objectPosition: "center 50%" }}
          />
        </div>
        <div>
          <img
            src={img6}
            alt="Image 6"
            style={{ ...imgStyle, objectPosition: "center 45%" }}
          />
        </div>
      </Carousel>
    </div>
  </div>
);
export default CarouselArticles;
