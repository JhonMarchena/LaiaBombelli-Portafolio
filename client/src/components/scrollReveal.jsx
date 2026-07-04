import { motion } from "motion/react";

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
