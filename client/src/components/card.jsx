function CardComponent({ image, title, text, children }) {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center px-4 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl border border-gray-200 shadow-lg overflow-hidden bg-white md:h-[85vh]">
        
        {/* Imagen */}
        <div className="w-full md:w-1/3 h-56 sm:h-64 md:h-full">
          <div className="w-full h-full">{image}</div>
        </div>

        {/* Contenido */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-6 py-8 md:px-10 md:py-10 gap-y-4 md:h-full">
          
          {/* Título */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-[0.2em] uppercase text-gray-900">
            {title}
          </h1>

          {/* Texto */}
          <p className="text-sm leading-relaxed tracking-wide text-gray-500 text-center md:text-justify max-w-lg">
            {text}
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;