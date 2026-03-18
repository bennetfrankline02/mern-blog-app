// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const User = require("./models/User");
// const authMiddleware = require("./middleware/authMiddleware");

// const app = express();
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/jwtDB")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// /* ------------------ REGISTER ------------------ */
// app.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = new User({
//     name,
//     email,
//     password: hashedPassword,
//     role
//   });

//   await user.save();
//   res.json({ message: "User Registered Successfully" });
// });

// /* ------------------ LOGIN ------------------ */
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: "User Not Found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   res.json({ token });
// });

// /* ------------------ PROTECTED ROUTE ------------------ */
// app.get("/profile", authMiddleware, (req, res) => {
//   res.json({
//     message: "Protected Data",
//     user: req.user
//   });
// });

// app.listen(5000, () => console.log("Server Running on port 5000"));



const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

/* ------------ MongoDB Connection ------------ */

mongoose.connect("mongodb://127.0.0.1:27017/jwtDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


/* ------------ REGISTER ------------ */

app.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({ message: "User Registered Successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});


/* ------------ LOGIN ------------ */

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login Successful",
      token: token
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});


/* ------------ PROTECTED ROUTE ------------ */

app.get("/profile", authMiddleware, (req, res) => {

  res.json({
    message: "Protected Data Accessed",
    user: req.user
  });

});


app.listen(5000, () => {
  console.log("Server Running on port 5000");
});