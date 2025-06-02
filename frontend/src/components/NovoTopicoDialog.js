// src/components/NovoTopicoDialog.js
import React, { useState } from "react";
import {
  FaTimes,
  FaPlusCircle,
  FaBook,
  FaHome,
  FaBus,
  FaLightbulb,
  FaUtensils,
  FaHeart,
  FaDoorOpen,
} from "react-icons/fa";

const NovoTopicoDialog = ({ onClose, onPostSuccess }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    conteudo: "", // Mantido no frontend como "conteudo"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: "Introdução", icon: <FaDoorOpen /> },
    { value: "Acadêmico", icon: <FaBook /> },
    { value: "Alojamento", icon: <FaHome /> },
    { value: "Transporte", icon: <FaBus /> },
    { value: "Dicas", icon: <FaLightbulb /> },
    { value: "Alimentação", icon: <FaUtensils /> },
    { value: "Vida Social", icon: <FaHeart /> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.titulo.trim()) newErrors.titulo = "Título é obrigatório";
    if (!formData.categoria) newErrors.categoria = "Selecione uma categoria";
    if (!formData.conteudo.trim()) newErrors.conteudo = "Conteúdo é obrigatório";
    else if (formData.conteudo.length < 20)
      newErrors.conteudo = "Conteúdo muito curto (mínimo 20 caracteres)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3001/api/forum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: formData.titulo,
          categoria: formData.categoria,
          mensagem: formData.conteudo, // Campo corrigido para backend
          autor: "Usuário Anônimo"
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Erro ao criar tópico. Status: " + res.status
        );
      }

      onPostSuccess();
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErrors({
        ...errors,
        submit: error.message || "Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>
            <FaPlusCircle /> Criar Novo Tópico
          </h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="titulo">Título do Tópico*</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Digite um título claro e objetivo"
              className={errors.titulo ? "error" : ""}
              maxLength="100"
            />
            {errors.titulo && (
              <span className="error-message">{errors.titulo}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria*</label>
            <div className="category-options">
              {categories.map((cat) => (
                <div
                  key={cat.value}
                  className={`category-option ${
                    formData.categoria === cat.value ? "selected" : ""
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, categoria: cat.value });
                    if (errors.categoria) {
                      setErrors({ ...errors, categoria: null });
                    }
                  }}
                >
                  <span className="category-icon">{cat.icon}</span>
                  <span>{cat.value}</span>
                </div>
              ))}
            </div>
            {errors.categoria && (
              <span className="error-message">{errors.categoria}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="conteudo">Conteúdo*</label>
            <textarea
              id="conteudo"
              name="conteudo"
              rows="6"
              value={formData.conteudo}
              onChange={handleChange}
              placeholder="Descreva sua dúvida, sugestão ou informação detalhadamente..."
              className={errors.conteudo ? "error" : ""}
            />
            {errors.conteudo && (
              <span className="error-message">{errors.conteudo}</span>
            )}
            <div className="char-count">
              {formData.conteudo.length}/1000 caracteres
            </div>
          </div>

          {errors.submit && (
            <div className="submit-error">{errors.submit}</div>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publicando..." : "Publicar Tópico"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #333;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #333;
        }

        .modal-form {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #444;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.85rem;
          margin-top: 5px;
          display: block;
        }

        .submit-error {
          color: #e74c3c;
          background: #fdecea;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
          text-align: center;
        }

        .category-options {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .category-option {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-option:hover {
          border-color: #4a90e2;
          background: #f5f9ff;
        }

        .category-option.selected {
          border-color: #4a90e2;
          background: #eaf2fd;
        }

        .category-icon {
          display: block;
          font-size: 1.5rem;
          margin-bottom: 5px;
          color: #4a90e2;
        }

        .char-count {
          text-align: right;
          font-size: 0.8rem;
          color: #666;
          margin-top: 5px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 20px;
        }

        .cancel-btn,
        .submit-btn {
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cancel-btn {
          background: #f5f5f5;
          border: 1px solid #ddd;
          color: #666;
        }

        .cancel-btn:hover {
          background: #eaeaea;
        }

        .submit-btn {
          background: #4a90e2;
          border: 1px solid #4a90e2;
          color: white;
        }

        .submit-btn:hover {
          background: #3a7bc8;
        }

        .submit-btn:disabled {
          background: #a0c4ff;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default NovoTopicoDialog;