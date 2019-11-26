const Aluno = require("../models/Aluno");

class AlunoController {
  async store(req, res) {
    const { nome, cpf, email, matricula } = req.body;

    if (await Aluno.findOne({ email })) {
      return res.status(400).json({ error: "email já cadastrado" });
    }

    const aluno = await Aluno.create({ nome, cpf, email, matricula });
    return res.json(aluno);
  }

  async index(req, res) {
    const alunos = await Aluno.find();
    return res.json(alunos);
  }

  async show(req, res) {
    const { email } = req.params;
    const aluno = await Aluno.findOne({ email });
    return res.json(aluno);
  }
}

module.exports = new AlunoController();
