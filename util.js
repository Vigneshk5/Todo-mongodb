/** @format */

const fs = require("fs");
const createFile = (name, contents) => {
  fs.writeFileSync(name, contents);
  console.log("file written");
};

module.exports = {
  createFile,
};
