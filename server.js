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
////////////////////////////////////////////////////////////////////////////////

app.get("/productphrase/:phrase", (req, res) => {
  console.log("*****************************************/GET/prodyctphrase");
  console.log("req.params.phrase", req.params.phrase);

  let phrase = req.params.phrase;
  // console.log(req.params);

  // let prawda = req.params === ".";
  // console.log(prawda);

  db.getByCode(phrase)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];
  res.json(customers);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => `Server running on port ${port}`);
