const http = require ('http')
const express = require ('express')
const bodyParser = require('body-parser')
const axios = require("axios");
const app = express()
app.use(bodyParser.json())

let id = 2
let vagas = [
    {
        id: 1,
        funcao: "Limpar o chao"  ,
        descricao: "O contratado vai limpar o chao" ,
        horario: "da 9 as 17" ,
        salario: "1.500",
        beneficios: " Vr e Vt"
    }  
]
/* const porta = 5000
app.set('port', porta)
const server = http.createServer(app)
server.listen(porta) */
//localhost:5000/vagas
app.post('/vagas', (req, res, next) => {
    id: id +=1
    const vaga = {
        id: id,
        funcao: req.body.funcao ,
        descricao: req.body.descricao ,
        horario: req.body.horario ,
        salario: req.body.salario ,
        beneficios: req.body.beneficios
    }
    vagas.push(vaga)
    res.status(201).json(vaga)
})

app.get ('/vagas', (req, res, next) => {
    res.status(200).json(vagas);
})



app.listen (5000, () => {
    console.log ('Rodando na Porta 5000.', 5000)
})