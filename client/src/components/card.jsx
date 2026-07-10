

function CardComponent({ children }) {
  return (
    <div className=" flex flex-col min-h-screen w-full justify-center items-center">
      <div className=" flex flex-col md:flex-row rounded-lg border border-gray-300 shadow-lg w-[90%] max-w-6xl md:h-[85vh] mt-3 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default CardComponent;
