// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rotas da API
const forumRoutes = require("./routes/forumRoutes");
app.use("/api/forum", forumRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conectado ao MongoDB");
  app.listen(process.env.PORT || 3001, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`)
  );
}).catch((err) => console.error("Erro na conexão com MongoDB:", err));
