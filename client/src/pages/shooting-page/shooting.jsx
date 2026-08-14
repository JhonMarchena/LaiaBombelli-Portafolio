import React from "react";
import img1 from "../../assets/articles-section/IMG_7929.webp";
import img2 from "../../assets/articles-section/IMG_7944.webp";
import img3 from "../../assets/articles-section/IMG_7972.webp";
import img4 from "../../assets/articles-section/IMG_7981.webp";
import img5 from "../../assets/articles-section/IMG_8024.webp";
import img6 from "../../assets/articles-section/IMG_8023.webp";
import ScrollReveal from "../../components/scrollReveal";

const divStyle = "h-[90%] w-[30svw]";
const imgStyle = {
  width: "100%",
  height: "75svh",
  objectFit: "cover",
  objectPosition: "center 35%", // valor por defecto
  borderRadius: "none",
  display: "block",
};

function Shooting() {
  return (
    <ScrollReveal>
      <div className="flex gap-y-6 grid py-2 grid-cols-3 place-items-center min-h-screen w-full justify-center items-center">
        <div className={divStyle}>
          <img
            src={img1}
            alt="Image 1"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 50%" }}
          />
        </div>
        <div className={divStyle}>
          <img
            src={img2}
            alt="Image 2"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 60%" }}
          />
        </div>
        <div className={divStyle}>
          <img
            src={img3}
            alt="Image 3"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 15%" }}
          />
        </div>
        <div className={divStyle}>
          <img
            src={img4}
            alt="Image 4"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 60%" }}
          />
        </div>
        <div className={divStyle}>
          <img
            src={img5}
            alt="Image 5"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 10%" }}
          />
        </div>
        <div className={divStyle}>
          <img
            src={img6}
            alt="Image 6"
            decoding="async"
            style={{ ...imgStyle, objectPosition: "center 40%" }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default Shooting;
