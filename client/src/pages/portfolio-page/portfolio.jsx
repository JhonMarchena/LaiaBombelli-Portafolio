import {ArrowCarousel} from "../../components/carousel.jsx";

const IK = import.meta.env.VITE_IK_URL;
const PDF = "portfolio/portfolio_laia_bombelli.pdf";
const PAGINAS = 35;

// Proporción de las páginas del PDF: A4 horizontal.
// Si fueran verticales, cambia a "aspect-[210/297]".
const PROPORCION = "aspect-[297/210]";

const ANCHOS = [700, 1000, 1400];

const pagina = (n, w = 1400) =>
  `${IK}/tr:pg-${n},w-${w},q-80,f-auto/${PDF}/ik-thumbnail.jpg`;

// Versión diminuta y borrosa que se ve al instante mientras carga la buena
const placeholder = (n) =>
  `${IK}/tr:pg-${n},w-40,bl-10,f-auto/${PDF}/ik-thumbnail.jpg`;

const paginas = Array.from({ length: PAGINAS }, (_, i) => i + 1);

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <header className="mb-4 flex items-end justify-between gap-4 md:mb-10">
        <h2
          id="portfolio-title"
          className="text-2xl tracking-tight md:text-3xl lg:text-4xl lowercase"
        >
          Portfolio
        </h2>
        <a
          href={`${IK}/${PDF}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            shrink-0 py-2 text-sm underline underline-offset-4
            transition-colors hover:text-gray-500
            focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4
          "
        >
          Download PDF
        </a>
      </header>

      <ArrowCarousel label="Páginas del portfolio">
        {paginas.map((n) => (
          <img
            key={n}
            src={pagina(n)}
            srcSet={ANCHOS.map((w) => `${pagina(n, w)} ${w}w`).join(", ")}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 170px), 830px"
            alt={`Portfolio de Laia Bombelli, página ${n}`}
            loading={n <= 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            style={{ backgroundImage: `url(${placeholder(n)})` }}
            className={`
              ${PROPORCION} w-full object-contain
              border border-gray-200 bg-neutral-100 bg-cover bg-center shadow-sm
            `}
          />
        ))}
      </ArrowCarousel>
    </section>
  );
}