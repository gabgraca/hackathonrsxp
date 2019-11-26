const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    email: true
  }
});

module.exports = mongoose.model("Aluno", AlunoSchema);
