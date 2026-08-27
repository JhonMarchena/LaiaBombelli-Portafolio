function CardComponent({
  image,
  title,
  text,
  children,
  flexDirection = "lg:flex-row",
}) {
  return (
    <div
      className="
        flex flex-col w-full justify-center items-center
        min-h-fit px-4 py-10
        md:min-h-[85svh] md:px-6 md:py-12
        lg:min-h-[100svh] lg:px-8 lg:py-8
      "
    >
      <div
        className={`
          flex flex-col w-full overflow-hidden bg-white
          rounded-xl border border-gray-200 shadow-lg
          max-w-md
          md:max-w-2xl
          lg:max-w-4xl lg:h-[85svh] ${flexDirection}  
        `}
      >
        {/* Imagen */}
        <div
          className="
          w-full shrink-0 overflow-hidden
          aspect-[3/3] max-h-[55svh]
          md:aspect-[16/10] md:max-h-[45svh]
          lg:w-1/3 lg:aspect-auto lg:max-h-full lg:h-full
          "
        >
          <div className="relative w-full h-full shrink-0 overflow-hidden">
            {image}
          </div>
        </div>

        {/* Contenido */}
        <div
          className="
            w-full flex flex-col items-center justify-center
            px-6 py-8 gap-y-4
            md:px-10 md:py-10 md:gap-y-5
            lg:w-2/3 lg:h-full lg:px-12
          "
        >
          <h1
            className="
              font-bold text-center uppercase text-gray-900
              text-xl tracking-[0.15em]
              md:text-2xl md:tracking-[0.2em]
              lg:text-3xl
            "
          >
            {title}
          </h1>

          <p
            className="
              text-gray-500 leading-relaxed tracking-wide
              text-sm text-center max-w-prose
              md:text-base
              lg:text-sm lg:text-justify
            "
          >
            {text}
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
