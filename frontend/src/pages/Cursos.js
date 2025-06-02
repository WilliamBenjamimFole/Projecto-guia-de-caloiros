// src/pages/Cursos.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Cursos.css";

function Cursos() {
  return (
    <>
      <Header /> 
      <section className="courses-section">
        <div className="container">
          <h2>Nossos Cursos</h2>
          <div className="course-filter">
            <button className="btn active" data-filter="all">
              Todos
            </button>
            <button className="btn" data-filter="undergrad">
              Licenciaturas
            </button>
            <button className="btn" data-filter="postgrad">
              Pós-Graduações
            </button>
          </div>

          <div className="courses-grid">
            <div className="course-card" data-category="undergrad">
              <img src="/imagens/IT.jpeg" alt="Engenharia Informática" />
              <div className="course-info">
                <h3>Engenharia Informática</h3>
                <p className="duration">Duração: 4 anos</p>
                <p>
                  Formação em desenvolvimento de software, redes e sistemas.
                </p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">
                  Saiba Mais
                </a>
              </div>
            </div>

            <section class="course-details">
              <div class="container">
                <div class="course-tabs">
                  <div class="tab-header">
                    <button class="tab-link active" data-tab="admission">
                      Admissão
                    </button>
                    <button class="tab-link" data-tab="curriculum">
                      Grade Curricular
                    </button>
                    <button class="tab-link" data-tab="careers">
                      Saídas Profissionais
                    </button>
                  </div>

                  <div class="tab-content active" id="admission">
                    <h3>Processo de Admissão 2024</h3>
                    <ol>
                      <li>Pré-inscrição online: 1-30 de Setembro</li>
                      <li>Prova de acesso: 15 de Outubro</li>
                      <li>Entrevista pessoal: 20-25 de Outubro</li>
                      <li>Matrículas: 1-15 de Novembro</li>
                    </ol>
                    <div class="downloads">
                      <a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantes" class="btn">
                        <i class="fas fa-file-pdf"></i> Edital 2024 (PDF)
                      </a>
                      <a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantes" class="btn">
                        <i class="fas fa-list-alt"></i> Requisitos de Admissão
                      </a>
                    </div>
                  </div>

                  <div class="tab-content" id="curriculum">
                    <h3>Estrutura Curricular - Engenharia Informática</h3>
                    <div class="semester">
                      <h4>1º Ano - Semestre 1</h4>
                      <ul>
                        <li>Matemática I</li>
                        <li>Algoritmos e Programação</li>
                        <li>Sistemas Digitais</li>
                        <li>Inglês Técnico</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="faq-courses">
              <div class="container">
                <h2>Perguntas Frequentes</h2>
                <div class="accordion">
                  <div class="accordion-item">
                    <button class="accordion-header">
                      Quais os documentos necessários para matrícula?
                      <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content">
                      <ul>
                        <li>Certificado de Habilitações</li>
                        <li>BI ou Passaporte</li>
                        <li>4 Fotografias</li>
                        <li>Comprovativo de Pagamento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="course-card" data-category="undergrad">
              <img src="/imagens/mines.jpeg" alt="Engenharia de Minas" />
              <div class="course-info">
                <h3>Engenharia de Minas</h3>
                <p class="duration">Duração: 4 anos</p>
                <p class="description">
                  Formação em administração, finanças e gestão estratégica de
                  organizações
                </p>
                <a href="https://admissao.ispt.ac.mz/" class="btn">
                  Saiba Mais
                </a>
              </div>
            </div>

            <div class="course-card" data-category="postgrad">
              <img src="/imagens/process.jpeg" alt="Processamento mineral" />
              <div class="course-info">
                <h3>Processamento mineral</h3>
                <p class="duration">Duração: 4 anos</p>
                <p class="description">
                  Pós-graduação em administração de empresas com foco em
                  liderança estratégica
                </p>
                <a href="https://admissao.ispt.ac.mz/" class="btn">
                  Saiba Mais
                </a>
              </div>
            </div>

            <div class="course-card" data-category="postgrad">
              <img src="/imagens/accnt.jpeg" alt="Contabilidade" />
              <div class="course-info">
                <h3>Contabilidade</h3>
                <p class="duration">Duração: 4 anos</p>
                <p class="description">
                  Pós-graduação em administração de empresas com foco em
                  liderança estratégica
                </p>
                <a href="https://admissao.ispt.ac.mz/" class="btn">
                  Saiba Mais
                </a>
              </div>
            </div>

            <div class="course-card" data-category="postgrad">
              <img
                src="/imagens/accnt.jpeg"
                alt="Contabilidade e administracao publica"
              />
              <div class="course-info">
                <h3>Contabilidade e administração Publica</h3>
                <p class="duration">Duração: 4 anos</p>
                <p class="description">
                  Pós-graduação em administração de empresas com foco em
                  liderança estratégica
                </p>
                <a href="https://admissao.ispt.ac.mz/" class="btn">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cursos;
