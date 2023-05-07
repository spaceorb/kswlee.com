const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const NewMessage = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
});

NewMessage.plugin(uniqueValidator);

module.exports = mongoose.model("NewMessage", NewMessage);
