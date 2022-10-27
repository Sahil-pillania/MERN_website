const express = require("express");
const app = express();
//const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());

// const User = require("./model/userSchema");
app.use(require("./router/auth")); // router file to make our links

const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
  console.log("Hello this is middleware");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("Hello world");
});

app.listen("5000", () => {
  console.log(`Backend App is running in port no ${PORT}.`);
});
