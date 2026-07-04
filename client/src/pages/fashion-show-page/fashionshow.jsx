import { motion } from "motion/react";

import img1 from "../../assets/fashionshow1.jpeg";

function FashionShow({ scrollToSection }) {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <div className="flex flex-col md:flex-row rounded-lg border border-gray-300 shadow-lg w-[90%] max-w-6xl md:h-[85vh] mt-3 overflow-hidden">
        {/* fashion show image */}
        <div className="w-full md:w-1/3 h-64 md:h-full p-4">
          <img
            src={img1}
            alt="Fashion Show"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* fashion show content */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-y-8 p-6 md:p-10">
          {/* fashion show title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-[0.3em] uppercase">
            Fashion Show
          </h1>

          {/* fashion show text */}
          <p className="text-justify text-base md:text-lg leading-relaxed tracking-wide text-gray-700 max-w-2xl">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* see more button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-500 shadow-lg rounded-full py-2 px-8 transition-colors hover:bg-gray-900 hover:text-white"
            onClick={() => scrollToSection("carousel-articles")}
          >
            <span className="font-semibold">See more</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default FashionShow;