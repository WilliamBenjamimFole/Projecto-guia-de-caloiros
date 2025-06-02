import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Cadastro from "./pages/Cadastro";
import Servicos from "./pages/Servicos";
import Contacto from "./pages/Contacto";
import Forum from "./pages/Forum";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
