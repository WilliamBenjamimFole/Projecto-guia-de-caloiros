// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/imagens/logo.png" alt="ISPT Logo" />
            <p>Instituto Superior Politécnico de Tete</p>
          </div>
          <div className="footer-links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="https://elearning.ispt.ac.mz/">Portal do Estudante</a></li>
              <li><a href="http://propinas.ispt.ac.mz/">Proprinas</a></li>
              <li><a href="http://esura.ispt.ac.mz/">Esura</a></li>
              <li><a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantess">Regulamentos</a></li>
              <li><a href="https://www.ispt.ac.mz/index.php">Bolsa de Estudo</a></li>

            </ul>
          </div>
          <div className="footer-contact" id="contact">
            <h3>Contactos</h3>
            <p><i className="fas fa-map-marker-alt"></i> Av. do Zumbo, Tete, Moçambique</p>
            <p><i className="fas fa-phone"></i> +258 252 123 456</p>
            <p><i className="fas fa-envelope"></i> info@ispt.ac.mz</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ISPT Tete - Todos os direitos reservados</p>
          <div className="social-icons">
            <a href="https://facebook.com/groups/231632057040937/"><i className="fab fa-facebook"></i></a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
