import { Carousel } from "antd";

// verticales (móvil / tablet)
import v1 from "../../assets/carousel-section/vertical/1V.webp";
import v2 from "../../assets/carousel-section/vertical/2V.webp";
import v3 from "../../assets/carousel-section/vertical/3V.webp";
import v4 from "../../assets/carousel-section/vertical/4V.webp";
import v5 from "../../assets/carousel-section/vertical/5V.webp";
import v6 from "../../assets/carousel-section/vertical/6V.webp";

// horizontales (laptop y superior)
import h1 from "../../assets/carousel-section/horizontal/1H.webp";
import h2 from "../../assets/carousel-section/horizontal/2H.webp";
import h3 from "../../assets/carousel-section/horizontal/3H.webp";
import h4 from "../../assets/carousel-section/horizontal/4H.webp";
import h5 from "../../assets/carousel-section/horizontal/5H.webp";
import h6 from "../../assets/carousel-section/horizontal/6H.webp";

const slides = [
  { alt: "Image 1", portrait: v1, landscape: h1, sm: "40%", md: "50%", lg: "55%" }, 
  { alt: "Image 2", portrait: v2, landscape: h2, sm: "30%", md: "40%", lg: "20%" }, 
  { alt: "Image 3", portrait: v3, landscape: h3, sm: "40%", md: "50%", lg: "100%" }, // 3 - 6
  { alt: "Image 4", portrait: v4, landscape: h4, sm: "30%", md: "40%", lg: "40%" },
  { alt: "Image 5", portrait: v5, landscape: h5, sm: "40%", md: "50%", lg: "45%" },
  { alt: "Image 6", portrait: v6, landscape: h6, sm: "30%", md: "40%", lg: "60%" },
];

const CarouselArticles = () => (
  <div
    className="
      flex items-center justify-center box-border
      py-8 px-4
      md:min-h-[85svh] md:py-10 md:px-6
      lg:min-h-[100svh] lg:p-6
    "
  >
    <div className="w-full max-w-[1200px]">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dots
        effect="fade"
        className="[&_.slick-slide]:!overflow-hidden [&_.slick-dots]:!bottom-4"
      >
        {slides.map(({ alt, portrait, landscape, sm, md, lg }) => (
          <div key={alt}>
            <picture>
              {landscape && (
                //NOTA: Si cambias los px del landscape a uno distinto , recuerda cambiar los px del aspect ratio en lg:aspect-[16/9] y lg:max-h-none
                <source media="(min-width: 1024px)" srcSet={landscape} />
              )}
              <img
                src={portrait}
                alt={alt}
                loading="lazy"
                style={{ "--pos-sm": sm, "--pos-md": md, "--pos-lg": lg }}
                className="
                  block w-full object-cover
                  aspect-[2/3] max-h-[80svh] object-[center_var(--pos-sm)]
                  md:aspect-[3/4] md:max-h-[80svh] md:rounded-xl md:object-[center_var(--pos-md)]
                  lg:aspect-auto lg:max-h-[95svh] lg:rounded-none lg:object-cover lg:object-[center_var(--pos-lg)]
                "
              />
            </picture>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default CarouselArticles;