// src/index.js
import React from "react";
import { HashRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";

// Importa os estilos globais
import "./styles/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <App />
    <HashRouter/>
  </React.StrictMode>
);
