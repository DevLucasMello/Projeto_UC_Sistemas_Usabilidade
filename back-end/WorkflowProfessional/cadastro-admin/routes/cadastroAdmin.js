const express = require("express");
const router = express.Router();

const CadastroAdminController = require('../controllers/cadastroAdmin-controller');

router.get("/obterPorEmail/:email", CadastroAdminController.ObterPorEmail);
router.post("/cadastrar", CadastroAdminController.Cadastrar);
router.put("/atualizar/:id", CadastroAdminController.Atualizar);

module.exports = router;