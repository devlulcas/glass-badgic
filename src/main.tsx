import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./assets/global.css";
import "./assets/color-picker.css";
import { ImageStateProvider } from "./stores/image";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ImageStateProvider>
      <App />
    </ImageStateProvider>
  </React.StrictMode>
);
