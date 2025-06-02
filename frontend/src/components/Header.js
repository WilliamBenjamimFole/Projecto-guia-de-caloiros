// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Crie este CSS ou reutilize o antigo

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="imagens/logo.png" alt="ISPT" className="logo" />
        <div className="header-text">
          <h1>Instituto Superior Politécnico de Tete</h1>
          <p>Bem-vindos, Caloiros 2025!</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/forum">Fórum</Link></li>
          <li><Link to="/contacto">Contactos</Link></li>
        </ul>
        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
