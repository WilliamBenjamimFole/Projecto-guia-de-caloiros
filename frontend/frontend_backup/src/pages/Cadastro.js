// src/pages/Cadastro.js
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Cadastro.css";

function Cadastro() {
  // Estado para gerenciar os valores do formulário
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    genero: "",
    email: "",
    telefone: "",
    endereco: "",
    curso: "",
    anoIngresso: "",
    matricula: "",
    contatoEmergencia: "",
    telEmergencia: "",
    parentesco: "",
    observacoes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log("Dados do formulário:", formData);
    alert("Cadastro realizado com sucesso!");
    // Opcional: resetar o formulário após o envio
    setFormData({
      nome: "",
      dataNascimento: "",
      genero: "",
      email: "",
      telefone: "",
      endereco: "",
      curso: "",
      anoIngresso: "",
      matricula: "",
      contatoEmergencia: "",
      telEmergencia: "",
      parentesco: "",
      observacoes: ""
    });
  };

  return (
    <>
      <Header />
      <div className="cadastro-container">
        <h2>Formulário de Cadastro de Estudante</h2>
        <form onSubmit={handleSubmit}>
          {/* Informações pessoais */}
          <fieldset>
            <legend>Informações Pessoais</legend>
            
            <div className="form-group">
              <label htmlFor="nome">Nome Completo:</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                value={formData.nome} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input 
                type="date" 
                id="dataNascimento" 
                name="dataNascimento" 
                value={formData.dataNascimento} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Gênero:</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="genero" 
                    value="masculino" 
                    checked={formData.genero === "masculino"} 
                    onChange={handleChange} 
                    required 
                  /> Masculino
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="genero" 
                    value="feminino" 
                    checked={formData.genero === "feminino"} 
                    onChange={handleChange} 
                  /> Feminino
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="genero" 
                    value="outro" 
                    checked={formData.genero === "outro"} 
                    onChange={handleChange} 
                  /> Outro
                </label>
              </div>
            </div>
          </fieldset>

          {/* Informações de Contato */}
          <fieldset>
            <legend>Informações de Contato</legend>

            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                pattern="[0-9]{10,11}"
                required
              />
              <small>Formato: 11999999999 (10 ou 11 dígitos)</small>
            </div>

            <div className="form-group">
              <label htmlFor="endereco">Endereço:</label>
              <textarea
                id="endereco"
                name="endereco"
                rows="3"
                value={formData.endereco}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </fieldset>

          {/* Informações Acadêmicas */}
          <fieldset>
            <legend>Informações Acadêmicas</legend>

            <div className="form-group">
              <label htmlFor="curso">Curso:</label>
              <select 
                id="curso" 
                name="curso" 
                value={formData.curso} 
                onChange={handleChange} 
                required
              >
                <option value="">Selecione o curso</option>
                <option value="engenharia_informatica">Engenharia Informática</option>
                <option value="engenharia_minas">Engenharia de Minas</option>
                <option value="processamento_mineral">Engenharia e Processamento Mineral</option>
                <option value="contabilidade_publica">Contabilidade e Administração Pública</option>
                <option value="contabilidade_auditoria">Contabilidade e Auditoria</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="anoIngresso">Ano de Ingresso:</label>
              <input
                type="number"
                id="anoIngresso"
                name="anoIngresso"
                min="2000"
                max="2027"
                value={formData.anoIngresso}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="matricula">Número de Matrícula:</label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                pattern="[A-Z0-9]{6,12}"
                value={formData.matricula}
                onChange={handleChange}
                required
              />
              <small>Formato: 6 a 12 caracteres alfanuméricos (maiúsculos)</small>
            </div>
          </fieldset>

          {/* Contato de Emergência */}
          <fieldset>
            <legend>Contato de Emergência</legend>

            <div className="form-group">
              <label htmlFor="contatoEmergencia">Nome do Contato:</label>
              <input
                type="text"
                id="contatoEmergencia"
                name="contatoEmergencia"
                value={formData.contatoEmergencia}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telEmergencia">Telefone:</label>
              <input
                type="tel"
                id="telEmergencia"
                name="telEmergencia"
                pattern="[0-9]{10,11}"
                value={formData.telEmergencia}
                onChange={handleChange}
                required
              />
              <small>Formato: 11999999999 (10 ou 11 dígitos)</small>
            </div>

            <div className="form-group">
              <label htmlFor="parentesco">Parentesco:</label>
              <input 
                type="text" 
                id="parentesco" 
                name="parentesco" 
                value={formData.parentesco} 
                onChange={handleChange} 
                required 
              />
            </div>
          </fieldset>

          {/* Observações */}
          <div className="form-group">
            <label htmlFor="observacoes">Observações:</label>
            <textarea 
              id="observacoes" 
              name="observacoes" 
              rows="4"
              value={formData.observacoes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Cadastro;