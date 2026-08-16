import React from "react";
import img1 from "../../assets/articles-section/IMG_7929.webp";
import img2 from "../../assets/articles-section/IMG_7944.webp";
import img3 from "../../assets/articles-section/IMG_7972.webp";
import img4 from "../../assets/articles-section/IMG_7981.webp";
import img5 from "../../assets/articles-section/IMG_8024.webp";
import img6 from "../../assets/articles-section/IMG_8023.webp";
import ScrollReveal from "../../components/scrollReveal";

const images = [
  { src: img1, alt: "Image 1", position: "center 50%" },
  { src: img2, alt: "Image 2", position: "center 60%" },
  { src: img3, alt: "Image 3", position: "center 15%" },
  { src: img4, alt: "Image 4", position: "center 60%" },
  { src: img5, alt: "Image 5", position: "center 10%" },
  { src: img6, alt: "Image 6", position: "center 40%" },
];

function Shooting() {
  return (
    <ScrollReveal>
      <div
        className="
          flex flex-wrap justify-center gap-6 w-full max-w-[1600px] mx-auto py-10
          max-md:gap-4  max-md:py-10
          max-sm:gap-3  max-sm:py-8
        "
      >
        {images.map(({ src, alt, position }) => (
          <div
            key={alt}
            className="
              w-[260px] h-[280px]
              max-md:w-[200px] max-md:h-[220px]
              max-sm:w-[150px] max-sm:h-[170px]
            "
          >
            <img
              src={src}
              alt={alt}
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover block"
              style={{ objectPosition: position }}
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default Shooting;