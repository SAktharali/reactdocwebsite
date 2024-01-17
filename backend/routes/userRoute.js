const express = require("express");
const {
  registerController,
  loginController,
  authController,
} = require("../controllers/userController.js");

const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/getUserData", authMiddleware, authController); //get user data in protected route

module.exports = router;
