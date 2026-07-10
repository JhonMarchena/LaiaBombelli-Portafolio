import Navbar from "../../components/navbar";
import { IconButton } from "../../components/buttons";
import { ChevronDown } from "lucide-react";

function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Nombre centrado */}
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        {/* AQUI EL VIDEO DEL HOMEPAGE */}
      </div>

      {/* Botón abajo */}
      <IconButton>
        <ChevronDown color="black" size={24} />
      </IconButton>
    </div>
  );
}

export default HomePage;
