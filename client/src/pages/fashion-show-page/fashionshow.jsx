import { motion } from "motion/react";
import ModalComponent from "../../components/modal";
import CarouselComponent from "../../components/carousel";

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
import CardComponent from "../../components/card";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
    <CardComponent>
      {/* fashion show image */}
      <div className="w-full md:w-1/3 h-64 md:h-full p-4">
        <CarouselComponent>
          {images.map((img, index) => (
            <div key={index} className="h-64 md:h-full">
              <img
                src={img}
                alt={`Fashion Show ${index + 1}`}
                className="w-full h-full object-cover shadow-xl object-[center_90%]"
              />
            </div>
          ))}
        </CarouselComponent>
      </div>

      {/* fashion show content */}
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-y-8 p-6 md:p-10">
        {/* fashion show title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-[0.3em] uppercase">
          Fashion Show
        </h1>

        {/* fashion show text */}
        <p className="text-justify text-base md:text-lg leading-relaxed tracking-wide text-gray-500 max-w-2xl">
          In April 2026 I took part in ACM Talents 2026 – "Kaleidoscopic," the
          BA Graduate Show of the Accademia Costume & Moda in Rome, alongside
          the program's 18 graduating designers. Before a jury including names
          such as Maria Grazia Chiuri, Sabato De Sarno, and Sara Sozzani Maino,
          I presented my accessories collection Enllaços de Memòries — a tribute
          to craftsmanship and Catalan identity drawn from the Sardana and the
          Castellers. The collection was featured by outlets including
          <a
            href={links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline "
          >
            {links[0].name}
          </a>
          ,{" "}
          <a
            href={links[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {links[1].name}
          </a>
          , and
          <a
            href={links[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {links[2].name}
          </a>
          .
        </p>

        {/* see more button */}
        <ModalComponent title="See more">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/7W_UG8Dvtlo?si=OsK_YdEy-upeHWAV"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </ModalComponent>
      </div>
    </CardComponent>
  );
}

export default FashionShow;
