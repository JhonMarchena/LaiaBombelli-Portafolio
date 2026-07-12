function CardComponent({ image, title, text, children }) {
  return (
    <div className=" flex flex-col min-h-screen w-full justify-center items-center">
      <div className=" flex flex-col md:flex-row rounded-lg border border-gray-300 shadow-lg w-[90%] max-w-6xl md:h-[85vh] mt-3 overflow-hidden">
        {/* component image */}
        <div className="w-full md:w-1/3 h-full md:h-full p-6">{image}</div>

        {/* component content */}
        <div className="w-full md:w-2/3 h-full flex flex-col items-center justify-center p-6 md:p-10">
          {/* component title */}
          <div className="flex items-center justify-center h-[20%] w-full">
            <h1 className="text-3xl md:text-4xl  font-bold text-center tracking-[0.3em] uppercase">
              {title}
            </h1>
          </div>

          {/* component text */}
          <div className="flex flex-col items-center justify-center h-[80%] w-full gap-y-6">
            <p className="text-justify text-base md:text-base leading-relaxed tracking-wide text-gray-500 max-w-2xl">
              {text}
            </p>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
