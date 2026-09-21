import { Children, useEffect, useRef, useState } from "react";
import { BagModal } from "./modal";
import { Carousel, ConfigProvider } from "antd";
import { motion, useAnimationFrame } from "framer-motion";
import "../index.css"; // estilos para forzar alto en los wrappers internos

// imagenes
import img1 from "../assets/articles-slide/Opera_senza_titolo.webp";
import img2 from "../assets/articles-slide/Opera_senza_titolo_1.webp";
import img3 from "../assets/articles-slide/Opera_senza_titolo_2.webp";
import img4 from "../assets/articles-slide/Opera_senza_titolo_3.webp";
import img5 from "../assets/articles-slide/Opera_senza_titolo_4.webp";
import img6 from "../assets/articles-slide/Opera_senza_titolo_5.webp";

// DATA BOLSOS CARRUSEL
const bags = [
  {
    id: 1,
    src: img1,
    name: "Bucket bag",
    description:
      "Orange nubuck (suede). - Contrasting dark brown (testa di moro) smooth calfskin. - Union between the body and the base made with an ornamental cord and braided leather tubing. - Gold finish buckles. - Dark brown calfskin handle, adjustable with a tongue buckle. - Front leather drawstring with structured loops.",
  },
  {
    id: 2,
    src: img2,
    name: "Bucket bag",
    description:
      "Smooth dark brown calfskin. - Decorative multicolor leather cords (red, orange, and beige) hanging from the panels through the eyelets. - Bag body characterized by a dense arrangement of circular metal eyelets, incorporated as functional elements for threading the cords. - Eyelets, rivets, and tongue buckle with gold finish. - Beige calfskin handle, adjustable with a tongue buckle.",
  },
  {
    id: 3,
    src: img3,
    name: "Hand Bag",
    description:
      "Smooth calfskin leather in a (testa di moro) tone. - Contrasting thick beige stitching details along the side profiles. - Panels joined through an interweaving of leather tubing. - Metal eyelets with gold finish and cuoio-colored leather laces hanging on the sides. - Single handle in coordinated leather, adjustable with gold buckles. - Top closure with a gold finish zipper.",
  },
  {
    id: 4,
    src: img4,
    name: "Hobo bag",
    description:
      "Red nubuck (suede). - Contrasting dark brown smooth calfskin on the upper part. - Side union made with a cross shaped ornamental cord and leather tubing joining the ends of the two panels. - Gold finish buckles. - Dark brown calfskin handle, adjustable with a tongue buckle.",
  },
  {
    id: 5,
    src: img5,
    name: "Hand bag",
    description:
      "Smooth warm brown calfskin leather. - Wide fan shaped top closure flap, made of fringed natural raffia. - Raffia panel featuring a radial arrangement of small knots. - Gold finish piercing. - Single central handle, made of smooth calfskin leather. - Top closure with a wide flap.",
  },
  {
    id: 6,
    src: img6,
    name: "Hobo bag",
    description:
      "Smooth dark brown calfskin. - Hanging fringes on the front and back panels, in two tone leather (black and cuero). - Outer perimeter union made with a braided ornamental cord. - Loops with D'ring and fixing rivets on the handle, with gold finish. - Single dark brown calfskin handle.",
  },
];

// Hook: se actualiza al girar el móvil o redimensionar la ventana
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

//////////////////////////////////////// CARRUSEL FADE ////////////////////////////////////////
export default function CarouselComponent({ children, className = "" }) {
  return (
    <Carousel
      autoplay
      autoplaySpeed={3000}
      dots
      effect="fade"
      className={`
        h-full
        [&_.slick-list]:!h-full
        [&_.slick-track]:!h-full
        [&_.slick-dots]:!bottom-3
        [&_.slick-dots_li_button]:!bg-white/70
        [&_.slick-dots_li.slick-active_button]:!bg-white
        ${className}
      `}
    >
      {children}
    </Carousel>
  );
}

//////////////////////////////////// CARRUSEL INFINITO DE BOLSOS ////////////////////////////////////
export function BagCarousel() {
  const x = useRef(0);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [selectedBag, setSelectedBag] = useState(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  // px por segundo: un poco más lento en móvil porque la pantalla es más estrecha
  const SPEED = isMobile ? 25 : 40;

  // Duplicamos la lista para el loop infinito sin cortes
  const items = [...bags, ...bags];

  useAnimationFrame((_, delta) => {
    // Se detiene si está en hover, si el modal está abierto o si no hay track
    if (paused || selectedBag || !trackRef.current) return;

    x.current -= (SPEED * delta) / 1000; // delta viene en ms

    // Como usamos padding (no gap), la mitad del track es exactamente una copia
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (-x.current >= halfWidth) x.current += halfWidth;

    trackRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
  });

  return (
    <>
      <div
        className="w-full overflow-hidden py-4 md:py-8 lg:py-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex w-max will-change-transform" ref={trackRef}>
          {items.map((bag, i) => (
            <motion.button
              type="button"
              key={`${bag.id}-${i}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-28 pr-2 sm:w-32 md:w-40 md:pr-4 lg:w-48 lg:pr-6 cursor-pointer"
              onClick={() => setSelectedBag(bag)}
              aria-label={`Ver ${bag.name}`}
            >
              <img
                src={bag.src}
                alt={bag.name}
                loading="lazy"
                draggable={false}
                className="w-full aspect-[3/4] lg:aspect-[4/5] object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <BagModal
        bag={selectedBag}
        open={selectedBag !== null}
        onClose={() => setSelectedBag(null)}
      />
    </>
  );
}

//////////////////////////////////////// CARRUSEL DE FLECHAS ////////////////////////////////////////
export function ArrowCarousel({ children, label = "Carrusel", downloadLink}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [current, setCurrent] = useState(0);
  const total = Children.count(children);

  // Mismo diseño en móvil y PC: solo cambian las medidas
  const arrowSize = isDesktop ? 28 : isMobile ? 18 : 22;

  return (
    <div
      className="select-none"
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
    >
      <ConfigProvider
        theme={{
          components: {
            Carousel: { arrowSize, arrowOffset: isMobile ? 4 : 8 },
          },
        }}
      >
        <Carousel
          arrows
          dots={false}
          infinite={false}
          draggable
          speed={350}
          beforeChange={(_, next) => setCurrent(next)}
          className="
            px-7 md:px-10 lg:px-14
            [&_.slick-arrow]:!text-gray-400
            [&_.slick-arrow]:!opacity-100
            [&_.slick-arrow:hover]:!text-gray-700
            [&_.slick-disabled]:!opacity-25
            [&_.slick-prev]:!start-0
            [&_.slick-next]:!end-0
          "
        >
          {Children.map(children, (child) => (
            <div className="py-2 md:px-3 md:py-4">{child}</div>
          ))}
        </Carousel>
      </ConfigProvider>

<div className="flex flex-col items-center justify-between ">
  <div></div>
 <p
        aria-live="polite"
        className="mt-2 text-center text-xs md:mt-4 md:text-sm tabular-nums text-gray-500"
      >
        {current + 1} / {total}
      </p>

      {downloadLink}
</div>
     
    </div>
  );
}