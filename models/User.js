const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  authId: String,
  userName: String
});

mongoose.model("users", userSchema);
