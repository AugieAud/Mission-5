//this file sets up a connection to the MongoDB database using Mongoose.

//import mongoose, a tool for working w MongoDB in Node.js
const mongoose = require("mongoose");

//create a asynchronous function that connects with the MongoDB database. it is asynchronous because connecting to the database can take some time and async allows us to use await to wait for the connection to be established before proceeding.
const connectDB = async () => {
  //attempt to connect to the database
  //mongoose.connect is an inbuilt mongoose function that connects to the database
  try {
    await mongoose.connect("mongodb://localhost:27017/trade_me");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
