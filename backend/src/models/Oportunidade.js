const mongoose = require("mongoose");

const OportunidadeSchema = new mongoose.Schema({
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
    required: true
  },
  vagas: {
    type: Number,
    required: true
  },
  Data: {
    type: Date
  },
  participantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aluno"
    }
  ]
});

module.exports = mongoose.model("Oportunidade", OportunidadeSchema);
