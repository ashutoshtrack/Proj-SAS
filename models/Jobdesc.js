const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobdescSchema = new Schema({
  job_profile: String,
  location: String,
  experience: String,
  description: String,
  workrole: [String],
  qualification: [String],
  emptype: String,
  jobfunct: String,
  jobindustry: String,
  savedJob: String
});

mongoose.model("jobdesc", jobdescSchema);
