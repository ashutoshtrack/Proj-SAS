const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  jobid: String,
  resumepath: String,
  viewprofilepath: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("resumes", resumeSchema);
