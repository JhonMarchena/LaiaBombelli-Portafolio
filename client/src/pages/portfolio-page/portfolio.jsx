import { ArrowCarousel } from "../../components/carousel.jsx";

const IK = import.meta.env.VITE_IK_URL;
const PDF = "portfolio/portfolio_laia_bombelli.pdf";
const PAGINAS = 35;

const pagina = (n, w) =>
  `${IK}/tr:pg-${n},w-${w},q-80,f-auto/${PDF}/ik-thumbnail.jpg`;

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto w-full max-w-5xl px-1 py-16 px-6 md:px-10 lg:px-14"
    >
      <ArrowCarousel
        label="Páginas del portfolio"
        downloadLink={
          <a
            href={`${IK}/${PDF}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-xs text-gray-500 md:text-sm underline underline-offset-4 hover:text-gray-500"
          >
            Download PDF
          </a>
        }
      >
        {Array.from({ length: PAGINAS }, (_, i) => i + 1).map((n) => (
          <img
            key={n}
            src={pagina(n, 1400)}
            srcSet={`${pagina(n, 800)} 800w, ${pagina(n, 1400)} 1400w`}
            sizes="(max-width: 1023px) 100vw, 830px"
            alt={`Portfolio de Laia Bombelli, página ${n}`}
            loading={n <= 2 ? "eager" : "lazy"}
            draggable={false}
            className="aspect-[297/210] w-full object-contain bg-neutral-100 border border-gray-200"
          />
        ))}
      </ArrowCarousel>
    </section>
  );
}