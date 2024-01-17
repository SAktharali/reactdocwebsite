const contactModel = require("../models/contactModel");

const contactController = async (req, res) => {
  try {
    const contact = new contactModel(req.body);
    const savedContact = await contact.save();
    res.status(201).json({
      success: true,
      message: "message submitted successfully",
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in contact submit",
      error,
    });
  }
};

module.exports = { contactController };
