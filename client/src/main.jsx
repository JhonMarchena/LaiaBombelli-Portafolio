import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


//REMINDER: QUITAR LAS ROUTES YA QUE NO SE UTILIZAN EN NINGUNA PARTE DEL PROYECTO, YA QUE ES UN LANDING PAGE.
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <App />
  </StrictMode>,
);
