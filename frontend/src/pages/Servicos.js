// src/pages/Servicos.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Servicos.css";

function Servicos() {
  return (
    <>
      <Header />
      <section className="services-section">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-book-open"></i>
              <h3>Biblioteca Digital</h3>
              <p>Acesso a milhares de recursos online.</p>
            </div>
            <div class="service-card">
              <i class="fas fa-laptop-code"></i>
              <h3>Laboratórios de Informática</h3>
              <p>
                Infraestrutura tecnológica moderna para práticas e pesquisas
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-user-graduate"></i>
              <h3>Apoio ao Estudante</h3>
              <p>Serviços de orientação académica e apoio psicopedagógico</p>
            </div>
            <div class="service-card">
              <i class="fas fa-wifi"></i>
              <h3>Wi-Fi em Todo Campus</h3>
              <p>
                Conectividade de alta velocidade em todas as áreas do instituto
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-briefcase"></i>
              <h3>Bolsa de Emprego</h3>
              <p>
                Intermediação entre estudantes e oportunidades profissionais
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-heartbeat"></i>
              <h3>Serviços de Saúde</h3>
              <p>Atendimento médico básico e primeiros socorros no campus</p>
            </div>
          </div>
        </div>
      </section>
      <section class="detailed-services">
        <div class="container">
          <div class="service-category">
            <h3>
              <i class="fas fa-book"></i> Serviços Acadêmicos
            </h3> 
            <div class="service-list">
              <div class="extended-service">
                <h4>Registo Acadêmico</h4>
                <p>Processos de matrícula, histórico escolar e declarações</p>
                <div class="service-info">
                  <p>
                    <strong>Horário:</strong> Seg-Sex: 8h-15h
                  </p>
                  <a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantes" class="btn">
                    Solicitar Documento
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="service-category">
            <h3>
              <i class="fas fa-users"></i> Apoio ao Estudante
            </h3>
            <div class="support-grid">
              <div class="support-card">
                <i class="fas fa-comments"></i>
                <h4>Aconselhamento Psicológico</h4>
                <p>
                  Sessões individuais e workshops sobre:
                  <ul>
                    <li>Gestão de stress</li>
                    <li>Orientação vocacional</li>
                    <li>Desenvolvimento pessoal</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="tech-services">
            <h3>
              <i class="fas fa-tools"></i> Recursos Tecnológicos
            </h3>
            <div class="tech-grid">
              <div class="tech-item">
                <h4>Plataforma E-Learning</h4>
                <p>
                  Acesso aos recursos:
                  <span class="badge">Moodle</span>
                  <span class="badge">Microsoft Teams</span>
                  <span class="badge">Google Classroom</span>
                </p>
                <a href="https://elearning.ispt.ac.mz/" class="btn">
                  Acesso à Plataforma
                </a>
              </div>
              <div class="tech-item">
                <h4>Reserva de Equipamentos</h4>
                <form class="reservation-form">
                  <select>
                    <option>Selecione o equipamento</option>
                    <option>Laptop</option>
                    <option>Projetor</option>
                    <option>Câmara Digital</option>
                  </select>
                  <input type="date" placeholder="Data de reserva" />
                  <button class="btn">Reservar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Servicos;
