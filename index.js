/** @format */
const fs = require("fs");
const { createFile } = require("./util");
createFile("note.txt", "hello there");

console.log(fs.readdirSync("."));
