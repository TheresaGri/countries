const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const countrySchema = new Schema({
  name: String,
  continent: String,
});

const Country = model("Country", countrySchema);
module.exports = Country;
