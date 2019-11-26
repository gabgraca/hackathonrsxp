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
  }
});

module.exports = mongoose.model("Empresa", EmpresaSchema);
