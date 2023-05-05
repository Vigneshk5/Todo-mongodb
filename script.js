/** @format */
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.listen(13371, () => {
  console.log("...server up");
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.hnd64n8.mongodb.net/?retryWrites=true&w=majority`
  );
  try {
    const kittySchema = new mongoose.Schema({
      name: String,
    });

    const Kitten = mongoose.model("Kitten", kittySchema);

    const silence = new Kitten({ name: "Silence" });
    await silence.save();
    console.log(silence.name);
  } finally {
    console.log("end");
  }
}
