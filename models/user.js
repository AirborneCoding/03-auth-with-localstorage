const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Please provide name"],
  trim: true,
  minlength: [2, "name must be at least 2 characters"],
  maxlength: [30, "name must be less than 30 characters"],
 },
 password: {
  type: String,
  required: [true, "Please provide password"],
  minlength: [4, "password must be at least 4 characters"],
 },
});


module.exports = mongoose.model("User", userSchema)