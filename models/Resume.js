const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  resume: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("resumes", resumeSchema);
