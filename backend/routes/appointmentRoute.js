const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();
const {
  bookAppointment,
  getBookAppointment,
} = require("../controllers/appointmentController.js");

router.post("/book", authMiddleware, bookAppointment);
router.get("/getAppointments", authMiddleware, getBookAppointment);
module.exports = router;
