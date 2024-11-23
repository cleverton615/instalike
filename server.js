import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x150/?mountain"
    },
    {
        id: 3,
        descricao: "Cachorro brincando",
        imagem: "https://source.unsplash.com/random/300x150/?dog"
    },
    {
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://source.unsplash.com/random/300x150/?food"
    },
    {
        id: 5,
        descricao: "Citação inspiradora",
        imagem: "https://source.unsplash.com/random/300x150/?quote"
    },
    {
        id: 6,
        descricao: "Cidade à noite",
        imagem: "https://source.unsplash.com/random/300x150/?city,night"
    }
];

const app = express()
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((posts) => {
        return posts.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});