import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FashionShow from "./pages/fashion-show-page/fashionshow.jsx";
import Shooting from "./pages/shooting-page/shooting.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import AboutMe from "./pages/about-me/aboutme.jsx";


//REMINDER: QUITAR LAS ROUTES YA QUE NO SE UTILIZAN EN NINGUNA PARTE DEL PROYECTO, YA QUE ES UN LANDING PAGE.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<App />} />
        <Route path="/fashion-show" element={<FashionShow />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
