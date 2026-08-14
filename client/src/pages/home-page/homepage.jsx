import Navbar from "../../components/navbar";
import { IconButton } from "../../components/buttons";
import { ChevronDown } from "lucide-react";
import videoHomeMp4 from "../../assets/home-page/video-homeMP.mp4";
import { useState } from "react";

function HomePage() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Video centrado */}
      <div className="relative flex flex-col items-center justify-center w-full h-[90vh] overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoReady(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoHomeMp4} type="video/mp4" />
        </video>

        {/* Botón abajo */}
        <IconButton style="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown color="white" size={24} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomePage;