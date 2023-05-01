/** @format */
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>hello</h1>");
  res.end();
});

server.listen(3001, () => {
  console.log("running");
});
