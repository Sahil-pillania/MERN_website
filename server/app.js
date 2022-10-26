const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5000;
const DB =
  "mongodb+srv://sahil:Sahil1234@cluster0.cxi2awi.mongodb.net/mernwebsite?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected successfully");
  })
  .catch((err) => {
    console.log("Error occured during connecting to database - " + err);
  });
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
