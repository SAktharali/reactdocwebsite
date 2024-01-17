const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    date: { type: Date, required: [true, "date is required"] },
    time: {
      type: String,
      required: [true, "time is required"],
    },
    doctor: {
      type: String,
      required: [true, "Doctor name is required"],
    },

    reason: {
      type: String,
      required: [true, "Reason is required"],
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
