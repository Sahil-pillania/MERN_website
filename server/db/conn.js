const mongoose = require("mongoose");
const DB = process.env.DATABASE;

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
