const mongoose = require("mongoose");
const { Schema } = mongoose;

const userprofSchema = new Schema({
  name: String,
  age: String,
  location: String,
  Education: String,
  image: String,
  experience: String,
  expdesc: String,
  projectName: String,
  projectOrg: String,
  skills: [String],
  certifications: [String],
  emailid: String,
  phonenum: String,
  gender: String,
  languages: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("userprofile", userprofSchema);
