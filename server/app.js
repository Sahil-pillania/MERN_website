const dotenv = require("dotenv");
const express = require("express");
const app = express();
//const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const connectDB = require("./db/conn");

app.use(express.json());

// const User = require("./model/userSchema");
app.use(require("./router/auth")); // router file to make our links

const PORT = process.env.PORT || "5000";
console.log("port using env is :" + PORT);
connectDB();
// middleware
// const middleware = (req, res, next) => {
//   console.log("Hello this is middleware");
//   next();
// };

// app.get("/", middleware, (req, res) => {
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  console.log(`Backend App is running in port no ${PORT}.`);
});
