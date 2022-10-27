const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from router ");
});

// // saving user using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ error: "please fill all the fields properly" });
//   }

//   User.findOne({ email: email })
//     .then((exists) => {
//       if (exists) {
//         return res.status(422).json({ error: "Email already exists." });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           return res
//             .status(201)
//             .json({ message: "User registered succesfully." });
//         })
//         .catch((err) => {
//           return res.status(500).json({ error: "Failed to be registered." });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// saving user using Async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "please fill all the fields properly" });
  }

  try {
    const exists = await User.findOne({ email: email });

    if (exists) {
      return res.status(422).json({ error: "Email already exists." });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    const userReg = await user.save();
    if (userReg) {
      return res.status(201).json({ message: "User registered succesfully." });
    } else {
      return res.status(500).json({ error: "Failed to be registered." });
    }
  } catch (error) {
    console.log(error);
  }
});

// Login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data properly." });
    }

    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      res.json({ error: "user error" });
    }

    console.log(userLogin);
    res.json({ message: "user sign successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
