import { useRef, useState } from "react";
import { BagModal } from "./modal";
import { Carousel, Descriptions } from "antd";
import { motion, useAnimationFrame } from "framer-motion";
import "../index.css"; // estilos para forzar alto en los wrappers internos

//imagenes import
import img1 from "../assets/articles-slide/Opera_senza_titolo.webp";
import img2 from "../assets/articles-slide/Opera_senza_titolo_1.webp";
import img3 from "../assets/articles-slide/Opera_senza_titolo_2.webp";
import img4 from "../assets/articles-slide/Opera_senza_titolo_3.webp";
import img5 from "../assets/articles-slide/Opera_senza_titolo_4.webp";
import img6 from "../assets/articles-slide/Opera_senza_titolo_5.webp";

//DATA BOLSOS CARRUSEL
const bags = [
  {
    id: 1,
    src: img1,
    name: "Bucket bag",
    description:
      "Orange nubuck (suede). - Contrasting dark brown (testa di moro) smooth calfskin. - Union between the body and the base made with an ornamental cord and braided leather tubing. - Gold finish buckles.    - Dark brown calfskin handle, adjustable with a tongue buckle. - Front leather drawstring with structured loops.",
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
      "Smooth calfskin leather in a (testa di moro) tone. - Contrasting thick beige stitching details along the side profiles. - Panels joined through an interweaving of leather tubing. - Metal eyelets with gold finish and cuoio-colored leather laces hanging on the sides. - Single handle in coordinated leather, adjustable with gold buckles. - Top closure with a goldfinish zipper.",
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
        [&_.slick-slide]:!h-full
        [&_.slick-slide>div]:!h-full
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

//MODAL CARRUSEL DE BOLSOS
export function BagCarousel() {
  const x = useRef(0);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [selectedBag, setSelectedBag] = useState(null);
  const SPEED = 40; // px por segundo

  // Duplicamos la lista para el loop infinito sin cortes
  const items = [...bags, ...bags];

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;
    x.current -= (SPEED * delta) / 1500;

    // La mitad del track = ancho de una copia completa
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(x.current) >= halfWidth) {
      x.current = 0; // reinicia sin salto perceptible
    }
    trackRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <>
      <div className="w-full overflow-hidden py-6">
        <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
          {items.map((bag, i) => (
            <motion.div
              key={`${bag.id}-${i}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-40 cursor-pointer"
              onClick={() => setSelectedBag(bag)}
            >
              <img
                src={bag.src}
                alt={bag.name}
                loading="lazy"
                className="h-55 w-full object-cover"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
            </motion.div>
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
