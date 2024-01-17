const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  id: String,
  imgSrc: String,
});

const Model = mongoose.model("Post", schema);
module.exports = Model;
