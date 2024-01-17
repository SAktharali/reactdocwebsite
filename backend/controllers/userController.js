const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//register controller
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "user already exist", success: false });
    }

    const password = req.body.password;

    //hash password and salt generation

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);
    // save to db
    await newUser.save();
    return res
      .status(200)
      .send({ message: "Registration successful", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: `register controller error ${error.message}`,
    });
  }
};

//login controller
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        message: "password didn't match",
        success: false,
      });
    }
    //       //jwt.sign method to generate token
    //get 1st parameter is (id) payload
    //2nd parameter is secret key
    //3rd is (expires)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .send({ message: "Logged in successfully", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: `login error`,
      success: false,
    });
  }
};

//auth controller getUserData(protectedRoute)
const authController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
          // user, timestamps also create
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "authorization error", success: false, error });
  }
};

module.exports = {
  loginController,
  registerController,
  authController,
};
