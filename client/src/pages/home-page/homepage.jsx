import { motion } from "motion/react";
import Navbar from "../../components/navbar";
import MainLayout from "../../components/mainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-1 flex-col w-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Laia Bombelli
          </motion.h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
