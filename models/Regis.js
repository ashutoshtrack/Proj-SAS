const mongoose = require("mongoose");
const { Schema } = mongoose;

const regisSchema = new Schema({
  firstName: String,
  email: String,
  phoneno: String,
  orgName: String,
  locationer: String,
  ghLink: String,
  registered: String,
  role: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("regist", regisSchema);
