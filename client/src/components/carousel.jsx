import { useRef, useState } from "react";
import { BagModal } from "./modal";
import { Carousel, Descriptions } from "antd";
import { motion, useAnimationFrame } from "framer-motion";
import "../index.css"; // estilos para forzar alto en los wrappers internos

//imagenes import
import img1 from "../assets/articles-general/Opera_senza_titolo.webp";
import img2 from "../assets/articles-general/Opera_senza_titolo_1.webp";
import img3 from "../assets/articles-general/Opera_senza_titolo_2.webp";
import img4 from "../assets/articles-general/Opera_senza_titolo_3.webp";
import img5 from "../assets/articles-general/Opera_senza_titolo_4.webp";
import img6 from "../assets/articles-general/Opera_senza_titolo_5.webp";

//DATA BOLSOS CARRUSEL
const bags = [
  { id: 1, src: img1, name: "Bolso 1", description: "Mmg" },
  { id: 2, src: img2, name: "Bolso 2" },
  { id: 3, src: img3, name: "Bolso 3" },
  { id: 4, src: img4, name: "Bolso 4" },
  { id: 5, src: img5, name: "Bolso 5" },
  { id: 6, src: img6, name: "Bolso 6" },
];

//CARRUSEL COMPONENTE GENERAL
export default function CarouselComponent({ children }) {
  return (
    <Carousel
      autoplay
      autoplaySpeed={3000}
      dots={true}
      effect="fade"
      className="h-full"
    >
      {children}
    </Carousel>
  );
}


//MODAL PARA EL CARRUSEL DE BOLSOS
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
      <div className="w-full overflow-hidden py-8">
        <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
          {items.map((bag, i) => (
            <motion.div
              key={`${bag.id}-${i}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-50 cursor-pointer"
              onClick={() => setSelectedBag(bag)}
            >
              <div className="overflow-hidden rounded-2xl bg-transparent">
                <img
                  src={bag.src}
                  alt={bag.name}
                  loading="lazy"
                  className="h-70 w-full object-fit"
                />
              </div>
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
