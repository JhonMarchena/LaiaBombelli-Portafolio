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
      {/* AQUI EL VIDEO DEL HOMEPAGE */}
      </div>

      {/* Botón abajo */}
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 0.3, delay: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgb(107, 114, 128)" }}
        whileTap={{ scale: 0.95 }}
        className="border border-gray-500 shadow-lg rounded-full text-white font-bold py-2 px-4 mb-8 self-center cursor-pointer "
        onClick={() => scrollToSection("carousel-articles")}
      >
        <ChevronDown color="black" size={24} />
      </motion.button>
    </div>
  );
}

export default HomePage;
