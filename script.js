/** @format */
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todos = require("./models/todo");

mongoose.connect(
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.hnd64n8.mongodb.net/?retryWrites=true&w=majority`
);

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.use(bodyParser.json());

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);
  res.json({ status: "ok" });
});

app.listen(13371, () => {
  console.log("...server up");
});
