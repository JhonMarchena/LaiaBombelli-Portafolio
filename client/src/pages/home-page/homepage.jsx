import Navbar from "../../components/navbar";
import { IconButton } from "../../components/buttons";
import { ChevronDown } from "lucide-react";
import videoHomeMp4 from "../../assets/home-page/video-homeMP.mp4";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Si ya hay datos cuando monta (caché), marcamos listo
    if (v.readyState >= 2) setVideoReady(true);

    // Intento explícito de play (iOS a veces ignora el atributo autoPlay)
    v.play().catch(() => {
      // Autoplay bloqueado (low power mode): mostramos igual el poster/frame
      setVideoReady(true);
    });

    // Red de seguridad: no dejar la pantalla en negro pase lo que pase
    const timeout = setTimeout(() => setVideoReady(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  const [debug, setDebug] = useState("init");

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      <Navbar />

      <div className="relative flex w-full h-[90vh] items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => {
            setVideoReady(true);
            setDebug("loadeddata");
          }}
          onPlaying={() => {
            setVideoReady(true);
            setDebug("playing");
          }}
          onError={(e) => setDebug("ERROR: " + (e.target.error?.code ?? "?"))}
          onStalled={() => setDebug("stalled")}
          className="w-full h-full object-cover" // ← sin opacity, forzado visible
        >
          <source src={videoHomeMp4} type="video/mp4" />
        </video>

        <div className="absolute top-4 left-4 z-50 bg-red-600 text-white text-xs p-2">
          {debug}
        </div>

        <IconButton style="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown color="white" size={24} />
        </IconButton>
      </div>
    </div>
  );
}

export default HomePage;
