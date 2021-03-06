const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  authId: String,
  userName: String,
  gender: String,
  provider: String,
  image: String
});

mongoose.model("users", userSchema);
