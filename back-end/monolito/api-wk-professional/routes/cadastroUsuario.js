const express = require("express");
const router = express.Router();

const CadastroUsuarioController = require('../controllers/cadastroUsuario-controller');

router.get("/obterPorEmail/:email", CadastroUsuarioController.ObterPorEmail);
router.get("/obterPorId/:id", CadastroUsuarioController.ObterPorId);
router.put("/atualizar/:id", CadastroUsuarioController.Atualizar);

module.exports = router;