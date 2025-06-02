// controllers/forumController.js
const Post = require("../models/Post");

// GET: todos os posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ data: -1 });
    res.json(posts);
  } catch (err) {
    console.error("Erro ao buscar posts:", err);
    res.status(500).json({ error: "Erro ao buscar posts" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { autor, titulo, mensagem, categoria } = req.body;
    
    // Validação reforçada
    if (!autor || !titulo || !mensagem || !categoria) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const novo = new Post({
      autor,
      titulo,
      mensagem, // Campo corrigido
      categoria
    });
    
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    console.error("Erro ao criar tópico:", err);
    res.status(500).json({ error: "Erro ao criar tópico." });
  }
};

// PATCH: curtir
exports.likePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.json({ message: "👍 Curtido com sucesso" });
  } catch (err) {
    console.error("Erro ao curtir post:", err);
    res.status(500).json({ error: "Erro ao curtir post" });
  }
};

// PATCH: visualizar
exports.viewPost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
    res.json({ message: "👁️ Visualização registrada" });
  } catch (err) {
    console.error("Erro ao registrar visualização:", err);
    res.status(500).json({ error: "Erro ao registrar visualização" });
  }
};

// GET: estatísticas
exports.getStats = async (req, res) => {
  try {
    const posts = await Post.find();

    const porCategoria = {};
    posts.forEach(p => {
      porCategoria[p.categoria] = (porCategoria[p.categoria] || 0) + 1;
    });

    // Correção da lógica de dias
    const porDia = {};
    const hoje = new Date();
    
    for (let i = 0; i < 7; i++) {
      const dia = new Date(hoje);
      dia.setDate(dia.getDate() - i);
      const key = dia.toLocaleDateString("pt-BR", { weekday: "short" });
      porDia[key] = 0;
    }

    posts.forEach(p => {
      const postDate = new Date(p.data);
      const diffDays = Math.floor((hoje - postDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays < 7) {
        const key = postDate.toLocaleDateString("pt-BR", { weekday: "short" });
        porDia[key] = (porDia[key] || 0) + 1;
      }
    });

    res.json({ categoria: porCategoria, dias: porDia });
  } catch (err) {
    console.error("Erro ao buscar estatísticas:", err);
    res.status(500).json({ error: "Erro ao buscar estatísticas" });
  }
};