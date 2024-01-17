// appointmentController.js
const appointmentModel = require("../models/appointmentModel");

const bookAppointment = async (req, res) => {
  try {
    // Extract user details from the request
    const { name, email, phoneNumber, gender, doctor, reason, date, time } =
      req.body;

    // Construct the newAppointment instance
    const newAppointment = new appointmentModel({
      name,
      email,
      phoneNumber,
      gender,
      doctor,
      reason,
      date,
      time,
    });

    // Save the appointment
    const savedAppointment = await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: savedAppointment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Appointment booking failed",
      error: error.message,
    });
  }
};

const getBookAppointment = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});

    res.status(200).json({
      success: true,
      message: "Appointments fetched successfully",
      data: appointments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching appointments",
      error,
    });
  }
};

module.exports = { bookAppointment, getBookAppointment };
