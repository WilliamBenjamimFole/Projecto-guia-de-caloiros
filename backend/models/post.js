// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  autor: { type: String, required: true },
  titulo: { type: String, required: true },
  mensagem: { type: String, required: true }, // Campo corrigido e obrigatório
  categoria: { type: String, default: "Geral" },
  data: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;