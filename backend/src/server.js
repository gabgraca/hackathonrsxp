const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

class server {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
  }
  database() {
    mongoose.connect("mongodb://localhost:27017/hackaton", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
  }
  middlewares() {
    this.express.use(express.json());
    this.express.use(routes);
  }
}
module.exports = new server().express;
