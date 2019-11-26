const Empresa = require("../models/Empresa");

class EmpresaController {
  async store(req, res) {
    const { cnpj, nome, email, descricao } = req.body;
    if (await Empresa.findOne({ email })) {
      return res.status(400).json({ error: "email já cadastrado" });
    }
    const empresa = await Empresa.create({ cnpj, nome, email, descricao });
    return res.json(empresa);
  }

  async index(req, res) {
    const empresas = await Empresa.find();
    return res.json(empresas);
  }

  async show(req, res) {
    const { email } = req.params;
    const empresa = await Empresa.findOne({ email });
    return res.json(empresa);
  }
}

module.exports = new EmpresaController();
