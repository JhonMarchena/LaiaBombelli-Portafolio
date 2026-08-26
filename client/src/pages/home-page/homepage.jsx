import Navbar from "../../components/navbar";
import { IconButton } from "../../components/buttons";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [src, setSrc] = useState(null);

  // Elegir el archivo según el ancho de ventana
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const pick = () => setSrc(mq.matches ? "/video-homeHT.mp4" : "/video-homeVT.mp4");
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, []);

  // Forzar la carga y el play cuando cambia la fuente
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;

    setVideoReady(false);
    v.load();

    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => setVideoReady(true));

    const timeout = setTimeout(() => setVideoReady(true), 2500);
    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      <Navbar />

      <div className="relative flex w-full h-[90vh] items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          key={src}
          src={src || undefined}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          className={`h-full w-full object-cover transition-opacity duration-400 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />

        <IconButton style="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown color="white" size={24} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomePage;