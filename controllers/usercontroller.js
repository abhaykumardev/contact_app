const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");
//@desc  Register a new user
//@route POST /api/users/register
//@access Public
const registerUser =asyncHandler (async(req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
 //hash password
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedpassword); // Log the hashed password for debugging
  //create user
  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });
  console.log("Created User:", user); // Log the created user for debugging
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc  Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({ 
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }, process.env.JWT_SECRET, {
      expiresIn: "1m"
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: accessToken
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }

});



//@desc  Get current user
//@route GET /api/users/current
//@access Private

const getCurrentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});



module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};  