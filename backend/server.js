const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Define the port
const port = process.env.PORT || 7000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const userRoute = require("./routes/userRoute.js");
const appointmentRoute = require("./routes/appointmentRoute.js");
const contactRoute = require("./routes/contactRoute.js");

app.use("/api/users", userRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/contact", contactRoute);

// Default route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on ${port}`);
});
