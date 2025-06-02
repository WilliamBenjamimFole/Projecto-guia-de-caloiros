// src/pages/Home.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <Header />
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/campus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div className="hero-content">
          <h2>Uma nova jornada acadêmica começa aqui!</h2>
          <p>Seja bem-vindo ao ISPT Tete, onde o seu futuro toma forma.</p>
          <a href="#welcome" className="btn">
            Mensagem de Boas-Vindas
          </a>
        </div>
      </section>

      <section class="welcome-section" id="welcome">
        <div class="container">
          <h2>Mensagem de Boas-Vindas</h2>
          <div class="welcome-content">
            <div class="welcome-text">
              <p>Caros caloiros,</p>
              <p>
                É com grande satisfação que vos damos as boas-vindas ao
                Instituto Superior Politécnico de Tete. Este é o início de uma
                jornada transformadora que irá moldar o vosso futuro
                profissional e pessoal.
              </p>
              <p>
                Aqui encontrarão não apenas conhecimento, mas também
                oportunidades de crescimento, amizades duradouras e experiências
                que levarão para toda a vida.
              </p>
              <p>
                Estamos comprometidos em proporcionar-vos uma educação de
                qualidade e um ambiente acolhedor para que possam atingir todo o
                vosso potencial.
              </p>
              <p>Bem-vindos à vossa nova casa académica!</p>
              <p>A Direção</p>
            </div>
            <div class="welcome-image">
              <img src="/graduacao.jpg" alt="Graduacao" />
            </div>
          </div>
        </div>
      </section>

      <section class="quick-info">
        <div class="container">
          <div class="info-box">
            <i class="fas fa-graduation-cap"></i>
            <h3>Cursos Disponíveis</h3>
            <p>Conheça nossa variedade de cursos superiores</p>
          </div>
          <div class="info-box">
            <i class="fas fa-calendar-alt"></i>
            <h3>Calendário Acadêmico</h3>
            <p>Datas importantes para o ano letivo</p>
          </div>
          <div class="info-box">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Localização</h3>
            <p>Saiba como chegar ao nosso campus</p>
          </div>
        </div>
      </section>

      <section class="video-presentation">
        <div class="container">
          <h2>Conheça Nossa Instituição</h2>
          <div class="video-wrapper">
            <video
              width="560"
              height="415"
              src="/Slide.mp4"
              frameborder="0"
              allowfullscreen
            ></video>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <h2>O Que Dizem Nossos Estudantes</h2>
          <div class="testimonial-grid">
            <div class="testimonial">
              <div class="student-photo">
                <img src="/graduacao.jpg" alt="Ferrao Mario" />
              </div>
              <blockquote>
                "O ISPT proporcionou-me uma formação prática e atualizada que me
                permitiu ingressar no mercado de trabalho imediatamente após a
                graduação."
              </blockquote>
              <p class="student-info">
                Maria João, Engenharia Informática (2022)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="events-timeline">
        <div class="container">
          <h2>Próximos Eventos Acadêmicos</h2>
          <div class="timeline">
            <div class="timeline-event">
              <div class="event-date">15 Mar</div>
              <div class="event-content">
                <h3>Workshop de Empreendedorismo Digital</h3>
                <p>Das 14h às 18h no Auditório Principal</p>
                <button class="btn">Inscrever-se</button>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-event">
              <div class="event-date">15 Mar</div>
              <div class="event-content">
                <h3>Workshop de Empreendedorismo Digital</h3>
                <p>Das 14h às 18h no Auditório Principal</p>
                <button class="btn">Inscrever-se</button>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-event">
              <div class="event-date">15 Mar</div>
              <div class="event-content">
                <h3>Workshop de Empreendedorismo Digital</h3>
                <p>Das 14h às 18h no Auditório Principal</p>
                <button class="btn">Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="facilities">
        <div class="container">
          <h2>Nossas Instalações</h2>
          <div className="facility-grid">
            {/* Biblioteca */}
            <div className="facility-card">
              <img src="/Biblioteca.jpg" alt="Biblioteca" />
              <h3>Biblioteca Multimédia</h3>
              <ul>
                <li>+20.000 volumes físicos</li>
                <li>Acesso a 15 bases de dados online</li>
                <li>Salas de estudo 24/7</li>
              </ul>
            </div>

            {/* Laboratórios */}
            <div className="facility-card">
              <img src="/lab.jpg" alt="Laboratórios" />
              <h3>Laboratórios Especializados</h3>
              <ul>
                <li>Robótica e Automação</li>
                <li>Biologia Molecular</li>
                <li>Redes Cisco</li>
              </ul>
            </div>

            {/* Área de Convívio */}
            <div className="facility-card">
              <img src="/campus2.jpg" alt="Área de Convívio" />
              <h3>Área de Convívio</h3>
              <ul>
                <li>Espaço para interação entre estudantes</li>
                <li>Mesas ao ar livre e zonas verdes</li>
                <li>Ambiente ideal para relaxar e socializar</li>
              </ul>
            </div>

            {/* Incubadora de Empresas */}
            <div className="facility-card">
              <img src="/incubadora.jpg" alt="Incubadora de Empresas" />
              <h3>Incubadora de Empresas</h3>
              <ul>
                <li>Suporte a startups estudantis</li>
                <li>Mentorias e workshops</li>
                <li>Espaço coworking com internet de alta velocidade</li>
              </ul>
            </div>

            {/* Auditório */}
            <div className="facility-card">
              <img src="/auditorio.jpg" alt="Auditório" />
              <h3>Auditório</h3>
              <ul>
                <li>Capacidade para 300 pessoas</li>
                <li>Equipado com sistema de som e projeção</li>
                <li>Utilizado para eventos, palestras e defesas</li>
              </ul>
            </div>

            {/* Campus */}
            <div className="facility-card">
              <img src="/campus2.jpg" alt="Campus" />
              <h3>Campus</h3>
              <ul>
                <li>Ambiente limpo e arborizado</li>
                <li>Áreas para estudo e desporto</li>
                <li>Espaço inclusivo e acessível</li>
              </ul>
            </div>

            {/* Departamentos */}
            <div className="facility-card">
              <img src="/dep1.jpg" alt="Departamentos" />
              <h3>Departamentos Acadêmicos</h3>
              <ul>
                <li>Engenharia e Gestão</li>
                <li>Equipes docentes qualificadas</li>
                <li>
                  Salas de aulas, de Docentes e de atendimento ao estudante
                </li>
              </ul>
            </div>

            {/* Bloco de Informática */}
            <div className="facility-card">
              <img src="/informatica.jpg" alt="Bloco de Informática" />
              <h3>Bloco de Informática</h3>
              <ul>
                <li>Laboratórios com computadores modernos</li>
                <li>Conexão de alta velocidade</li>
                <li>Aulas práticas e treinamentos técnicos</li>
              </ul>
            </div>

            {/* Reprografia */}
            <div className="facility-card">
              <img src="/reprografica.jpg" alt="Reprografia" />
              <h3>Reprografia</h3>
              <ul>
                <li>Serviços de impressão e cópias</li>
                <li>Venda de material académico</li>
                <li>Suporte rápido aos estudantes</li>
              </ul>
            </div>

            {/* Direção */}
            <div className="facility-card">
              <img src="/direccao.jpg" alt="Direção" />
              <h3>Direção</h3>
              <ul>
                <li>Gestão institucional e pedagógica</li>
                <li>Canal direto com os estudantes</li>
                <li>Atendimento de segunda a sexta</li>
              </ul>
            </div>

            {/* Serviço de Estudante */}
            <div className="facility-card">
              <img src="/estudante.jpg" alt="Serviço de Estudante" />
              <h3>Serviço de Estudante</h3>
              <ul>
                <li>Matrículas, declarações e apoio académico</li>
                <li>Atendimento ao público com eficiência</li>
                <li>Equipe dedicada ao bem-estar estudantil</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery-section">
        <h2>Conheça o Nosso Campus</h2>
        <div class="gallery">
          <img src="/campus4.jpg" alt="Campus do ISPT" />
          <img src="/campus3.jpg" alt="Estudantes no campus" />
          <img src="/campus2.jpg" alt="Eventos para caloiros" />
        </div>
      </section>

      <section class="newsletter">
        <div class="container">
          <h2>Receba Novidades</h2>
          <p>Inscreva-se para receber informações importantes</p>
          <form id="newsletter-form">
            <input type="email" placeholder="Seu email" required />
            <button type="submit" class="btn">
              Inscrever
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
