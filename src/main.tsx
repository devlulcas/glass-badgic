import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./assets/global.css";
import "./assets/color-picker.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
