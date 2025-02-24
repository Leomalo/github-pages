const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir JSON e CORS
app.use(express.json());
app.use(cors());

// Rota GET para testar se o servidor está online
app.get("/", (req, res) => {
    res.send("Servidor online no Render! 🚀");
});

// Rota POST para receber dados do Google Sites
app.post("/recibir-datos", (req, res) => {
    const dados = req.body;
    console.log("Dados recebidos:", dados);
    
    res.json({ message: "Dados recebidos com sucesso!", dados });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
