// src/pages/Contacto.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contacto.css";

function Contacto() {
  return (
    <>
      <Header /> 
      <section className="contact-section">
        <div className="container">
          <h2>Entre em Contacto</h2>
          <form id="contact-form">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <textarea placeholder="Sua mensagem" rows="5" required></textarea>
            <button className="btn">Enviar Mensagem</button>
          </form>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Tete,Mozambique&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa do ISPT"
            ></iframe>
          </div>
        </div>
      </section>
      <section class="contact-extended">
        <div class="container">
          <div class="department-contacts">
            <h3>Contactos por Departamento</h3>
            <div class="department-grid">
              <div class="department">
                <h4>
                  <i class="fas fa-graduation-cap"></i> Secretaria Acadêmica
                </h4>
                <p>
                  Email: academica@ispt.ac.mz
                  <br />
                  Telefone: +258 252 111 222
                  <br />
                  Horário: 7:30-16:30 (Seg-Sex)
                </p>
              </div>
            </div>
          </div>

          <div class="live-chat">
            <h3>Chat Online</h3>
            <div class="chat-container">
              <div class="chat-history"></div>
              <form class="chat-input">
                <input type="text" placeholder="Digite sua mensagem..." />
                <button class="btn">Enviar</button>
              </form>
            </div>
          </div>

          <div class="social-media-contact">
            <h3>Redes Sociais</h3>
            <div class="social-grid">
              <a href="https://facebook.com/groups/231632057040937/" class="social-card facebook">
                <i class="fab fa-facebook"></i>
                <p>
                  Facebook
                  <br />
                  <small>@ISPToficial</small>
                </p>
              </a>
            </div>
          </div>

          <div class="emergency-contacts">
            <h3>
              <i class="fas fa-exclamation-triangle"></i> Contactos de
              Emergência
            </h3>
            <div class="emergency-grid">
              <div class="emergency-item">
                <i class="fas fa-ambulance"></i>
                <p>
                  Serviço Médico
                  <br />
                  +258 82 123 4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contacto;
