import { motion } from "motion/react";


export function IconButton({style, children}) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const baseStyle = "border border-gray-500 shadow-lg rounded-full text-white font-bold py-2 px-4 mb-8 self-center cursor-pointer"

  return (
    <motion.button
      initial={{ opacity: 1 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 0.3, delay: 0 }}
      whileHover={{ scale: 1.1, backgroundColor: "rgb(107, 114, 128)" }}
      whileTap={{ scale: 0.95 }}
      className= {style ? `${baseStyle} ${style}` : baseStyle }
      onClick={() => scrollToSection("carousel-articles")}
    >
     {children}
    </motion.button>
  );
}
