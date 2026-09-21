import {ArrowCarousel} from "../../components/carousel.jsx";

const IK = import.meta.env.PROD_VITE_IK_URL;
const PDF = "portfolio/portfolio_laia_bombelli.pdf";
const PAGINAS = 35; // ajusta al número real

const pagina = (n, w = 1400) =>
  `${IK}/tr:pg-${n},w-${w},q-80/${PDF}/ik-thumbnail.jpg`;

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-4xl px-4 py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl lg:text-3xl tracking-tight">Portfolio</h2>
        <a href={`${IK}/${PDF}`} target="_blank" rel="noopener noreferrer"
          className="text-sm underline underline-offset-4">
          Descargar PDF
        </a>
      </div>


      <ArrowCarousel>
        {Array.from({ length: PAGINAS }, (_, i) => i + 1).map((n) => (
          <img
            key={n}
            src={pagina(n)}
            srcSet={`${pagina(n, 700)} 700w, ${pagina(n, 1400)} 1400w`}
            sizes="(max-width: 768px) 100vw, 896px"
            alt={`Portfolio de Laia Bombelli, página ${n}`}
            loading={n <= 2 ? "eager" : "lazy"}
            className="w-full border border-gray-300 shadow-sm"
          />
        ))}
      </ArrowCarousel>

    </section>
  );
}