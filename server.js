console.log("Node is working just fine!");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const connectionString =
  "mongodb+srv://luke:gi1pBfQXZ3zbXnCZ@testcluster.yquoq.gcp.mongodb.net/test?retryWrites=true&w=majority";

// MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
//   if (err) return console.error(err);
//   console.log("Connected to Database");
// });

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("wisdom-drops");
    const quotesCollection = db.collection("quotes");

    app.listen(3000, function () {
      console.log("Listening on port 3000");
    });

    app.set("view engine", "ejs");
    app.get("/", (req, res) => {
      db.collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          res.render('index.ejs', { quotes: results })
        })
        .catch((error) => console.error(error));
    });

    app.set("view engine", "ejs");
    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
      console.log(req.body);
    });
  })
  .catch((error) => console.error(error));
