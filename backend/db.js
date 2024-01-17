const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB database is connected at " + mongoose.connection.host);
  } catch (error) {
    console.log("mongoDB database is not connected");
  }
};

module.exports = connectDB;
