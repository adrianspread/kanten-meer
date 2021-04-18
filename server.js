const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const db = require("./sql/db");
const xlsx = require("xlsx");

//PAGE DATA
const xlsxFile = xlsx.readFile("./sql/kanten.xlsx").Sheets["Sheet1"];
const kantenData = xlsx.utils.sheet_to_json(xlsxFile);

// console.log(kantenData[0]);
// function start(counter) {
//   if (counter < kantenData.length) {
//     // setTimeout(function() {
//
//     console.log(counter);
//
//     db.insertProduct(
//       kantenData[counter].ref_code,
//       kantenData[counter].internal_code,
//       kantenData[counter].board_supplier,
//       kantenData[counter].base_material,
//       kantenData[counter].model,
//       kantenData[counter].processing_temperature,
//       kantenData[counter].material,
//       kantenData[counter].description
//     )
//       .then(result => console.log("inserted"))
//       .catch(err => console.log(err));
//     counter++;
//     start(counter);
//     // }, 50);
//   }
// }
// start(0);

app.get("/product/:id.json", (req, res) => {
  db.getProduct(req.params.id)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get("/productphrase/:phrase", (req, res) => {

  let phrase = req.params.phrase;

  db.getByCode(phrase)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get("/all/:phrase", (req, res) => {
  let phrase = req.params.phrase;

  db.getByCodeAll(phrase)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => `Server running on port ${port}`);
