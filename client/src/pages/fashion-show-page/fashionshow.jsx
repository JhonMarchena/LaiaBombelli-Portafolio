import { motion } from "motion/react";
import ModalComponent from "../../components/modal";
import CarouselComponent from "../../components/carousel";
import CardComponent from "../../components/card";
import React, { useState } from "react";

import img1 from "../../assets/fashion-show/fashionshow1.jpeg";
import img2 from "../../assets/fashion-show/fashionshow2.jpeg";
import img3 from "../../assets/fashion-show/fashionshow3.jpeg";
import img4 from "../../assets/fashion-show/fashionshow4.jpeg";
import img5 from "../../assets/fashion-show/fashionshow5.jpeg";
import img6 from "../../assets/fashion-show/fashionshow6.jpeg";
import img7 from "../../assets/fashion-show/fashionshow7.jpeg";
import img8 from "../../assets/fashion-show/fashionshow8.jpeg";
import img9 from "../../assets/fashion-show/fashionshow9.jpeg";
import img10 from "../../assets/fashion-show/fashionshow10.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const buttonStyle = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  className:
    "flex justify-center items-center cursor-pointer border lg:h-8 lg:w-25 lg:mt-4 border-gray-500 shadow-lg rounded-full py-2 px-4 transition-colors hover:bg-gray-600 hover:text-white",
};

const links = [
  {
    name: "1 Granary",
    url: "https://1granary.com/designers-3/graduate-shows/accademia-costume-moda-ba-2026-memory-and-material/",
  },
  {
    name: "nss magazine",
    url: "https://www.nssmag.com/it/fashion/44980/acm-talents-2026-graduate-show-kaleidoscopic",
  },
  {
    name: "Vogue Italia",
    url: "https://www.vogue.it/gallery/acm-talents-2026-sfilata-studenti-accademia-costume-and-moda-roma",
  },
];

function FashionShow() {
  return (
    <CardComponent
      title="Fashion Show"
      image={
        <>
          <CarouselComponent>
            {images.map((img, index) => (
              <div key={index} className="h-[76svh] md:h-[85vh] w-full">
                <img
                  src={img}
                  alt={`Fashion Show ${index + 1}`}
                  className="w-full h-full object-cover shadow-xl object-[center_60%]"
                />
              </div>
            ))}
          </CarouselComponent>
        </>
      }
      text={
        <>
          In April 2026 I took part in ACM Talents 2026 – "Kaleidoscopic," the
          BA Graduate Show of the Accademia Costume & Moda in Rome, alongside
          the program's 18 graduating designers. Before a jury including names
          such as Maria Grazia Chiuri, Sabato De Sarno, and Sara Sozzani Maino,
          I presented my accessories collection Enllaços de Memòries — a tribute
          to craftsmanship and Catalan identity drawn from the Sardana and the
          Castellers. The collection was featured by outlets including
          <span> </span>
          <a
            href={links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline "
          >
            {links[0].name}
          </a>
          <span>, </span>
          <a
            href={links[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {links[1].name}
          </a>
          <span>, and </span>
          <a
            href={links[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {links[2].name}
          </a>
          .
        </>
      }
    >
      {/* see more button */}

      <motion.button {...buttonStyle}>
        <span className="text-sm font-medium">
          {" "}
          <a
            href="https://www.youtube.com/watch?v=7W_UG8Dvtlo"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        </span>
      </motion.button>
    </CardComponent>
  );
}

export default FashionShow;
