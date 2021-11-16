const express = require ('express')
const bodyParser = require('body-parser')
const axios = require("axios");
const app = express()
app.use(bodyParser.json())

let id = 2
let usuarios = [
    {
        id: 1,
        nome: "Teste",
        data_nasc: "11/11/1111",
        profissao: "profissao teste",
        experiencia: "experiencia teste",
        cursos: "curso teste"
    }  
]
//localhost:4000/usuarios

app.post('/usuarios', (req, res, next) => {
    id: id +=1
    const usuario = {
        id: id,
        nome: req.body.nome,
        data_nasc: req.body.data_nasc,
        profissao: req.body.profissao,
        experiencia: req.body.experiencia,
        cursos: req.body.cursos
    }
    usuarios.push(usuario)
    res.status(201).json(usuario)
})

app.get ('/usuarios', (req, res, next) => {
    res.status(200).json(usuarios);
})

app.put ('/usuarios', (req, res) => {
    const user = {}
    user = await axios.get("http://localhost:4000/usuarios");
    const usuario = {
        id: req.body.id,
        nome: req.body.nome,
        data_nasc: req.body.data_nasc,
        profissao: req.body.profissao,
        experiencia: req.body.experiencia,
        cursos: req.body.cursos
    }
    usuarios.push(usuario)
    res.status(201).json(usuario)
})

app.listen (4000, () => {
    console.log ('Rodando na Porta 4000.', 4000)
})