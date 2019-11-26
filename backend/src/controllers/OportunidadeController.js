const Oportunidade = require("../models/Oportunidade");

class OportunidadeController {
  async store(req, res) {
    const { empresa, vagas, data } = req.body;
    const oportunidade = await Oportunidade.create({
      empresa,
      vagas,
      data
    });
    return res.json(oportunidade);
  }

  async inscricao(req, res) {
    const { id, aluno } = req.body;
    await Oportunidade.findOneAndUpdate(
      { _id: id },
      {
        $push: { participantes: aluno }
      }
    );
    return res.json({ ok: true });
  }
  async index(req, res) {
    const oportunidade = await Oportunidade.find();
    return res.json(oportunidade);
  }
}

module.exports = new OportunidadeController();
