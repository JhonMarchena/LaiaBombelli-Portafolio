import Dropdown from "./dropdown";
import { motion } from "motion/react";

function Navbar({ children }) {
  return (
    <>
      <nav className="flex border border-gray-300 shadow-lg items-center w-full justify-between py-5 px-4">
        <Dropdown />
          <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold text-[0.75rem] md:text-[1rem] lg:text-[1rem]"> Laia Bombelli</span>
        </motion.h1> 
        {/*DIV PARA TENER ESPACIO*/}
        <div></div>
      </nav>
      {children}
    </>
  );
}

export default Navbar;
