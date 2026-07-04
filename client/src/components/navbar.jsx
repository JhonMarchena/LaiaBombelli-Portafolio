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
          Laia Bombelli
        </motion.h1> 
        <div></div>
      </nav>
      {children}
    </>
  );
}

export default Navbar;
