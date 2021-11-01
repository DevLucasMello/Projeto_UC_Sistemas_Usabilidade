const express = require("express");
const app = express();
const cors = require("cors");

const rotaCadastroAdmin = require('./routes/cadastroAdmin');
const rotaCadastroUsuario = require('./routes/cadastroUsuario');
const rotaVagasAdmin = require('./routes/vagasAdmin');
const rotaVagasUsuario = require('./routes/vagasUsuario');
const userRoute = require('./routes/userRoute');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 
    'Origin, X-Requested-With, Content-type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
        return res.status(200).send({});
    }

    next();
})

app.use('/cadastroAdmin',rotaCadastroAdmin);
app.use('/cadastroUsuario',rotaCadastroUsuario);
app.use('/vagasAdmin',rotaVagasAdmin);
app.use('/vagasUsuario',rotaVagasUsuario);
app.use('/users', userRoute);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;