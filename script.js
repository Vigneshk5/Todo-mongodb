/** @format */
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");

mongoose.connect(
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.hnd64n8.mongodb.net/?retryWrites=true&w=majority`
);

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.use(bodyParser.json());

app.post("/api/delete", async (req, res) => {
  const { record } = req.body;
  const response = await Todo.deleteOne({ record });
  res.json({ status: "ok" });
});

app.post("/api/modify", async (req, res) => {
  const { old: oldInput, new: newInput } = req.body;
  const response = await Todo.updateOne(
    {
      record: oldInput,
    },
    {
      $set: {
        record: newInput,
      },
    }
  );
  res.json({ status: "ok" });
});

app.get("/api/get", async (req, res) => {
  const record = await Todo.find({});
  console.log(record);

  res.json(record);
});

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record);
  const response = await Todo.create(record);

  res.json({ status: "ok" });
});

app.listen(13371, () => {
  console.log("...server up");
});
