const mongoose = require("mongoose");

const EmpresaSchema = new mongoose.Schema({
  cnpj: {
    type: String
  },
  nome: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  descricao: {
    type: String
  },
  empresa: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Empresa", EmpresaSchema);
