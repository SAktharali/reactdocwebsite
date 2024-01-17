const express = require("express");
// const authMiddleWare = require("../middleware/authMiddleware.js");
const { contactController } = require("../controllers/contactController.js");
const router = express.Router();

router.post("/postContact", contactController);

module.exports = router;
