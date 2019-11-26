const Empresa = require("../models/Empresa");
const Aluno = require("../models/Aluno");

class SignController {
  async signin(req, res) {
    const { email } = req.params;
    const empresa = await Empresa.findOne({ email });
    if (empresa) {
      return res.json(empresa);
    }
    const aluno = await Aluno.findOne({ email });
    if (aluno) {
      return res.json(aluno);
    }
    return res.status(400).json({ error: "usuário não cadastrado" });
  }
}

module.exports = new SignController();
