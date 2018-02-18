const mongoose = require("mongoose");
const { Schema } = mongoose;

const regisSchema = new Schema({
  firstName: String,
  email: String,
  projName: String,

  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("regist", regisSchema);
