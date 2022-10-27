const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from router ");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "please fill all the fields properly" });
  }

  User.findOne({ email: email })
    .then((exists) => {
      if (exists) {
        return res.status(422).json({ error: "Email already exists." });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          return res
            .status(201)
            .json({ message: "User registered succesfully." });
        })
        .catch((err) => {
          return res.status(500).json({ error: "Failed to be registered." });
        });
    })
    .catch((err) => {
      console.log(err);
    });

  //res.send("register page");
});

module.exports = router;
