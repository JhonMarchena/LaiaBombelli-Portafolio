import { motion } from "motion/react";
import Navbar from "../../components/navbar";
import MainLayout from "../../components/mainLayout";
import { ChevronDown } from "lucide-react";


function HomePage() {

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Nombre centrado */}
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        {/* <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Laia Bombelli
        </motion.h1> */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 mt-2 text-xl"
        >
          Fashion Designer
        </motion.p> */}
      </div>

      {/* Botón abajo */}
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgb(107, 114, 128)" }}
        whileTap={{ scale: 0.95 }}
        className="border border-gray-500 shadow-lg rounded-full text-white font-bold py-2 px-4 mb-8 self-center"
        onClick={() => scrollToSection("carousel-articles")}
      >
        <ChevronDown color="black" size={24} />
      </motion.button>
    </div>
  );
}

export default HomePage;
