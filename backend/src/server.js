const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors')

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
      useFindAndModify: false
    });
  }
  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
  }
}
module.exports = new server().express;
