const mongoose = require("mongoose");
const { Schema } = mongoose;

const regisSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

mongoose.model("regist", regisSchema);
