/** @format */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use("/", express.static(path.resolve(__dirname, "public")));

app.post("/data", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(3000);
