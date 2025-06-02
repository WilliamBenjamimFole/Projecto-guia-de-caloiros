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
            <button className="btn active" data-filter="all">Todos</button>
            <button className="btn" data-filter="undergrad">Licenciaturas</button>
            <button className="btn" data-filter="postgrad">Pós-Graduações</button>
          </div>

          <div className="courses-grid">
            <div className="course-card" data-category="undergrad">
              <img src="/imagens/IT.jpeg" alt="Engenharia Informática" />
              <div className="course-info">
                <h3>Engenharia Informática</h3>
                <p className="duration">Duração: 4 anos</p>
                <p>Formação em desenvolvimento de software, redes e sistemas.</p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">Saiba Mais</a>
              </div>
            </div>

            <div className="course-card" data-category="undergrad">
              <img src="/imagens/mines.jpeg" alt="Engenharia de Minas" />
              <div className="course-info">
                <h3>Engenharia de Minas</h3>
                <p className="duration">Duração: 4 anos</p>
                <p>Formação em prospecção e gestão de recursos minerais.</p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">Saiba Mais</a>
              </div>
            </div>

            <div className="course-card" data-category="postgrad">
              <img src="/imagens/process.jpeg" alt="Processamento mineral" />
              <div className="course-info">
                <h3>Processamento Mineral</h3>
                <p className="duration">Duração: 2 anos</p>
                <p>Especialização em técnicas e processos de refino mineral.</p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">Saiba Mais</a>
              </div>
            </div>

            <div className="course-card" data-category="postgrad">
              <img src="/imagens/accnt.jpeg" alt="Contabilidade" />
              <div className="course-info">
                <h3>Contabilidade</h3>
                <p className="duration">Duração: 2 anos</p>
                <p>Especialização em finanças, auditoria e fiscalidade.</p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">Saiba Mais</a>
              </div>
            </div>

            <div className="course-card" data-category="postgrad">
              <img src="/imagens/accnt.jpeg" alt="Contabilidade e Administração Pública" />
              <div className="course-info">
                <h3>Contabilidade e Administração Pública</h3>
                <p className="duration">Duração: 2 anos</p>
                <p>Foco em gestão pública e finanças do Estado.</p>
                <a href="https://admissao.ispt.ac.mz/" className="btn">Saiba Mais</a>
              </div>
            </div>
          </div>

          {/* Seções adicionais fora da grade */}
          <section className="course-details">
            <div className="container">
              <div className="course-tabs">
                <div className="tab-header">
                  <button className="tab-link active" data-tab="admission">Admissão</button>
                  <button className="tab-link" data-tab="curriculum">Grade Curricular</button>
                  <button className="tab-link" data-tab="careers">Saídas Profissionais</button>
                </div>

                <div className="tab-content active" id="admission">
                  <h3>Processo de Admissão 2024</h3>
                  <ol>
                    <li>Pré-inscrição online: 1-30 de Setembro</li>
                    <li>Prova de acesso: 15 de Outubro</li>
                    <li>Entrevista pessoal: 20-25 de Outubro</li>
                    <li>Matrículas: 1-15 de Novembro</li>
                  </ol>
                  <div className="downloads">
                    <a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantes" className="btn">
                      Edital 2024 (PDF)
                    </a>
                    <a href="https://www.ispt.ac.mz/index.php/formularios-para-estudantes" className="btn">
                      Requisitos de Admissão
                    </a>
                  </div>
                </div>

                <div className="tab-content" id="curriculum">
                  <h3>Estrutura Curricular - Engenharia Informática</h3>
                  <div className="semester">
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

          <section className="faq-courses">
            <div className="container">
              <h2>Perguntas Frequentes</h2>
              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header">
                    Quais os documentos necessários para matrícula?
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="accordion-content">
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

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cursos;
