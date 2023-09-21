const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/getNews", (req, res) => {

fetch(req.body.newsUrl).then(response => {response.json().then(data=> {res.send(data)})})

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
