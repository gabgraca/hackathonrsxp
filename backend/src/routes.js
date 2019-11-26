const express = require("express");

const AlunoController = require("./controllers/AlunoController");
const EmpresaController = require("./controllers/EmpresaController");
const OportunidadeController = require("./controllers/OportunidadeController");
const SignController = require("./controllers/SignController");

const routes = express.Router();

routes.post("/aluno", AlunoController.store);
routes.get("/alunos", AlunoController.index);
routes.get("/aluno/:email", AlunoController.show);

routes.post("/empresa", EmpresaController.store);
routes.get("/empresas", EmpresaController.index);
routes.get("/empresa/:email", EmpresaController.show);

routes.post("/oportunidade", OportunidadeController.store);
routes.get("/oportunidades", OportunidadeController.index);
routes.post("/inscricao", OportunidadeController.inscricao);

routes.get("/login/:email", SignController.signin);
module.exports = routes;
