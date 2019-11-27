const Oportunidade = require("../models/Oportunidade");

class OportunidadeController {
  async store(req, res) {
    const { empresa, vagas, data } = req.body;
    const oportunidade = await Oportunidade.create({
      empresa,
      vagas,
      data
    });
    await oportunidade.populate("empresa").execPopulate();
    return res.json(oportunidade);
  }

  async inscricao(req, res) {
    const { id, aluno } = req.body;
    const oportunidade = await Oportunidade.findById(id);
    const inscrito = oportunidade.participantes.filter(function(item) {
      return item == aluno;
    });
    if (inscrito.length > 0) {
      return res
        .status(400)
        .json({ error: "Aluno já está inscrito nessa oportunidade" });
    }
    if (oportunidade.participantes.length >= oportunidade.vagas) {
      return res.status(400).json({ error: "Vagas encerradas" });
    }
    await Oportunidade.findOneAndUpdate(
      { _id: id },
      {
        $push: { participantes: aluno }
      }
    );
    return res.json({ ok: true });
  }

  async index(req, res) {
    const { empresa } = req.params;
    await Oportunidade.find({ empresa })
      .populate("empresa")
      .exec((err, doc) => {
        if (err) {
          return console.error(err);
        }
        return res.json(doc);
      });
  }
}

module.exports = new OportunidadeController();
