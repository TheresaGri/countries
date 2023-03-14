const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://theresagri:XcsNUtaP9GJdX3i@cluster0.jycu5sj.mongodb.net/world"
);

let Country = require("./model/Country.js");

async function createCountries() {
  try {
    const db = mongoose.connection;
    const countryCollection = db.collection("countries");
    const newCountries = await countryCollection.insertMany([
      { continent: "Europe", name: "Austria" },
      { continent: "Chile", name: "South America" },
      { continent: "Asia", name: "Japan" },
      { conintent: "Asia", name: "India" },
      { continent: "Europe", name: "France" },
      { continent: "Europe", name: "Germany" },
      { continent: "Europe", name: "Belgium" },
      { continent: "Europe", name: "Sweden" },
      { continent: "Brasil", name: "South America" },
      { continent: "Argentina", name: "South America" },
      { continent: "USA", name: "North America" },
      { continent: "Canada", name: "North America" },
    ]);
  } catch (error) {
    console.error(error);
  }
}

/* createCountries();
 */

async function deleteCountry(name) {
  try {
    const deletedCountry = await Country.deleteOne({ name: name });
    console.log(deletedCountry);
  } catch (error) {
    console.error(error);
  }
}

/* deleteCountry("Germany");
 */
async function insertOneCountry(name, continent) {
  try {
    const db = mongoose.connection;
    const countryCollection = db.collection("countries");
    const newCountry = await countryCollection.insertOne({
      name: name,
      continent: continent,
    });

    console.log(newCountry);
  } catch (error) {
    console.error(error);
  }
}

/* insertOneCountry("Spain", "Europe");
 */

async function updateNameOfCountry(country) {
  try {
    const newCountry = await Country.findOne({ name: country });
    newCountry.name = "Don´t know";
    const updatedCountry = newCountry.save();
    console.log(updatedCountry);
  } catch (error) {
    console.error(error);
  }
}

updateNameOfCountry("Austria");
