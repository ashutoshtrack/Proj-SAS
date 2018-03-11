const mongoose = require("mongoose");
const { Schema } = mongoose;

const savedjobschema = new Schema({
  jobid: { type: Schema.Types.ObjectId, ref: "Jobdesc" },
  title: String,
  location: String,
  experience: String,
  image: String,
  description: String,
  workrole: [String],
  qualification: [String],
  emptype: String,
  jobfunct: String,
  jobindustry: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("savedjob", savedjobschema);
