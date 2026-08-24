import { Carousel } from "antd";

import img1 from "../../assets/carousel-section/IMG_7929.webp"
import img2 from "../../assets/carousel-section/IMG_7944.webp"
import img3 from "../../assets/carousel-section/IMG_7972.webp"
import img4 from "../../assets/carousel-section/IMG_8024.webp"
import img5 from "../../assets/carousel-section/IMG_8027.webp"
import img6 from "../../assets/carousel-section/IMG_8028.webp"

const slides = [
  { src: img1, alt: "Image 1", sm: "40%", md: "50%", lg: "60%" },
  { src: img2, alt: "Image 2", sm: "30%", md: "40%", lg: "50%" },
  { src: img3, alt: "Image 3", sm: "40%", md: "50%", lg: "60%" },
  { src: img4, alt: "Image 4", sm: "30%", md: "40%", lg: "50%" },
  { src: img5, alt: "Image 5", sm: "40%", md: "50%", lg: "60%" },
  { src: img6, alt: "Image 6", sm: "30%", md: "40%", lg: "50%" },
];

const CarouselArticles = () => (
  <div
    className="
      flex items-center justify-center box-border
      py-10 px-4
      md:min-h-[85svh] md:py-12 md:px-6
      lg:min-h-[100svh] lg:p-6
    "
  >
    <div className="w-full max-w-[1200px]">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        dots
        effect="fade"
        className="[&_.slick-slide]:!overflow-hidden [&_.slick-dots]:!bottom-4"
      >
        {slides.map(({ src, alt, sm, md, lg }) => (
          <div key={alt}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              style={{ "--pos-sm": sm, "--pos-md": md, "--pos-lg": lg }}
              className="
                block w-full object-cover
                aspect-[2/8] max-h-[90svh] h-auto object-[center_var(--pos-sm)]
                md:aspect-[4/3] md:max-h-none md:rounded-xl md:object-[center_var(--pos-md)]
                lg:aspect-auto lg:h-[90svh] lg:rounded-none lg:object-[center_var(--pos-lg)]
              "
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default CarouselArticles;
