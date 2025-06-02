// src/pages/Forum.js
import { useEffect, useState } from "react";

import {
  FaPlus,
  FaThumbtack,
  FaUserShield,
  FaComments,
  FaEye,
  FaQuestionCircle,
  FaBed,
  FaBus,
  FaBook,
  FaChartPie,
  FaChartBar,
  FaTag,
  FaReply,
  FaHeart,
  FaDoorOpen,
  FaGraduationCap,
  FaHome,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaClock,
  FaChartLine,
  FaStar,
  FaSearch,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Forum.css";
import NovoTopicoDialog from "../components/NovoTopicoDialog";

// Removida a declaração duplicada do componente
export default function Forum() {
  // Estados unificados
  const [topics, setTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryStats, setCategoryStats] = useState([]);
  const [dailyStats, setDailyStats] = useState([]);
  
  const topicsPerPage = 5;

  const categories = [
    "Todas",
    "Introdução",
    "Acadêmico",
    "Alojamento",
    "Transporte",
    "Dicas",
    "Alimentação",
    "Vida Social",
  ];

  const carregarTopicos = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts");
      const data = await res.json();
      
      const formatted = data.map((post, index) => ({
        id: post._id || index,
        title: post.titulo,
        category: post.categoria || "Geral",
        content: post.conteudo,
        author: post.autor || "Usuário Anônimo",
        views: post.views || 0,
        replies: post.replies || 0,
        likes: post.likes || 0,
        createdAt: post.data || post.createdAt || new Date(),
      }));

      setTopics(formatted);
      setFilteredTopics(formatted);
    } catch (error) {
      console.error("Erro ao buscar tópicos:", error);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/stats");
      const data = await res.json();
      
      setCategoryStats(data.categoria);
      setDailyStats(data.dias);
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
    }
  };

  useEffect(() => {
    carregarTopicos();
    fetchStats();
  }, []);

  useEffect(() => {
    let results = topics;

    if (searchTerm) {
      results = results.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== "Todas") {
      results = results.filter((topic) => topic.category === selectedCategory);
    }

    setFilteredTopics(results);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, topics]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Funções auxiliares
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    if (seconds < 60) return `${seconds} segundos atrás`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `${minutes} minuto${minutes !== 1 ? "s" : ""} atrás`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hora${hours !== 1 ? "s" : ""} atrás`;
    const days = Math.floor(hours / 24);
    return `${days} dia${days !== 1 ? "s" : ""} atrás`;
  };

  // Paginação
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = filteredTopics.slice(
    indexOfFirstTopic,
    indexOfLastTopic
  );
  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />

      <div className="forum-header">
        <div className="header-content">
          <div className="header-top">
            <h1>
              <FaGraduationCap /> Fórum dos Caloiros ISPT
            </h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar tópicos, respostas, usuários..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button>
                <FaSearch />
              </button>
            </div>
            <div className="user-menu">
              <a href="https://admissao.ispt.ac.mz/" className="login-btn">
                <FaSignInAlt /> Entrar
              </a>
              <a href="https://admissao.ispt.ac.mz/" className="register-btn">
                <FaUserPlus /> Registrar
              </a>
            </div>
          </div>
          <nav className="main-nav">
            {categories.slice(1).map((category, index) => (
              <a
                key={index}
                href="https://example.com" target="_blank" rel="noopener noreferrer"
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="forum-container">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Categorias</h3>
            <ul className="categories">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="https://example.com" target="_blank" rel="noopener noreferrer"
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {index === 0 && <FaDoorOpen />}
                    {index === 1 && <FaGraduationCap />}
                    {index === 2 && <FaHome />}
                    {index === 3 && <FaBus />}
                    {index === 4 && <FaLightbulb />}
                    {index === 5 && <FaUtensils />}
                    {index === 6 && <FaHeart />}
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-stats">
            <h3>Estatísticas do Fórum</h3>
            <div className="stats-box">
              <p>
                <FaUsers /> {topics.length} Tópicos
              </p>
              <p>
                <FaComments />{" "}
                {topics.reduce((sum, topic) => sum + topic.replies, 0)}{" "}
                Respostas
              </p>
              <p>
                <FaClock />{" "}
                {
                  topics.filter(
                    (t) =>
                      new Date(t.createdAt) >
                      new Date(Date.now() - 24 * 60 * 60 * 1000)
                  ).length
                }{" "}
                Hoje
              </p>
              <p>
                <FaChartLine />{" "}
                {topics.reduce((sum, topic) => sum + topic.views, 0)}{" "}
                Visualizações
              </p>
              <p>
                <FaStar /> {topics.reduce((sum, topic) => sum + topic.likes, 0)}{" "}
                Curtidas
              </p>
            </div>
          </div>
        </aside>

        <section className="main-content">
          <button className="new-topic-btn" onClick={() => setShowModal(true)}>
            <FaPlus /> Novo Tópico
          </button>

          {/* Tópico Fixo */}
          <article className="forum-post pinned">
            <div className="post-header">
              <div className="user-avatar">
                <FaUserShield />
              </div>
              <div className="post-info">
                <h2>
                  <FaThumbtack /> [IMPORTANTE] Regras do Fórum
                </h2>
                <div className="post-meta">
                  <span className="author">Admin</span>
                  <span className="timestamp">
                    Postado em: {formatDate(new Date())}
                  </span>
                  <span className="comments">
                    <FaComments /> 5 Respostas
                  </span>
                  <span className="views">
                    <FaEye /> 23 Visualizações
                  </span>
                </div>
              </div>
            </div>
            <div className="post-content">
              <p>
                Bem-vindos ao Fórum dos Caloiros do ISPT! Para manter nossa
                comunidade saudável e produtiva, pedimos que todos sigam estas
                regras:
              </p>
              <ul>
                <li>Respeite todos os membros da comunidade</li>
                <li>
                  Mantenha as discussões relevantes para os temas acadêmicos e
                  de campus
                </li>
                <li>Não compartilhe informações pessoais sensíveis</li>
                <li>Evite spam e autopromoção excessiva</li>
                <li>Denuncie conteúdo inadequado aos moderadores</li>
              </ul>
              <p>
                Aproveitem o fórum para compartilhar conhecimento e fazer novas
                amizades!
              </p>
            </div>
          </article>

          {/* Gráficos */}
          <div className="stats-charts">
            <div className="chart-container">
              <div className="chart-title">
                <FaChartPie /> Atividade por Categoria
              </div>
              <div className="chart">
                {categoryStats.map((item, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${(item.value / 50) * 100}px` }}
                  >
                    <div className="chart-value">{item.value}%</div>
                    <div className="chart-label">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-title">
                <FaChartBar /> Tópicos por Dia (últimos 7 dias)
              </div>
              <div className="chart">
                {dailyStats.map((item, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${(item.value / 50) * 100}px` }}
                  >
                    <div className="chart-value">{item.value}</div>
                    <div className="chart-label">{item.day}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lista de Tópicos */}
          <div className="topic-list">
            <h2>Tópicos Recentes ({filteredTopics.length})</h2>

            {currentTopics.length > 0 ? (
              currentTopics.map((topic) => (
                <article key={topic.id} className="forum-topic" onClick={() => {}}>
                  <div className="topic-icon">
                    {topic.category === "Acadêmico" && <FaBook />}
                    {topic.category === "Alojamento" && <FaBed />}
                    {topic.category === "Transporte" && <FaBus />}
                    {!["Acadêmico", "Alojamento", "Transporte"].includes(
                      topic.category
                    ) && <FaQuestionCircle />}
                  </div>
                  <div className="topic-content">
                    <h3>{topic.title}</h3>
                    <div className="topic-meta">
                      <span className="author">{topic.author}</span>
                      <span className="timestamp">
                        {formatTimeAgo(topic.createdAt)}
                      </span>
                      {topic.category && (
                        <span className="category">
                          <FaTag /> {topic.category}
                        </span>
                      )}
                    </div>
                    <div className="topic-stats">
                      <span className="views">
                        <FaEye /> {topic.views}
                      </span>
                      <span className="replies">
                        <FaReply /> {topic.replies}
                      </span>
                      <span className="likes">
                        <FaHeart /> {topic.likes}
                      </span>
                    </div>
                  </div>
                  <div className="latest-activity">
                    <small>Última resposta:</small>
                    <div className="activity-user">
                      <div className="mini-avatar">
                        {topic.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>
                      <span>{topic.author}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <p>Nenhum tópico encontrado. Crie um novo tópico!</p>
              </div>
            )}
          </div>

          {/* Paginação */}
          {filteredTopics.length > topicsPerPage && (
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={currentPage === number ? "active" : ""}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Modal de Novo Tópico */}
      {showModal && (
        <NovoTopicoDialog 
          onClose={() => setShowModal(false)}
          onPostSuccess={() => {
            carregarTopicos();
            setShowModal(false);
          }}
        />
      )}

      <Footer />
    </>
  );
}