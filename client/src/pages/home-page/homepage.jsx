import Navbar from "../../components/navbar";
import { IconButton } from "../../components/buttons";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (v.readyState >= 2) setVideoReady(true);

    // iOS a veces ignora el atributo autoPlay en el primer render de una SPA
    v.play().catch(() => setVideoReady(true));

    // Red de seguridad: nunca dejar la pantalla en negro permanente
    const timeout = setTimeout(() => setVideoReady(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      <Navbar />

      <div className="relative flex w-full h-[90vh] items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video-homeMP.mp4" type="video/mp4" />
        </video>

        <IconButton style="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown color="white" size={24} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomePage;