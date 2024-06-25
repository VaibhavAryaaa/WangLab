const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String, // Change to Date if you prefer to store as Date type
    required: true,
  },
  endTime: {
    type: String, // Change to Date if you prefer to store as Date type
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  }
});

const History = mongoose.model("History", historySchema);
module.exports = History;