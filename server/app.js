const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen("5000", () => {
  console.log(`Backend App is running in port no ${PORT}.`);
});
