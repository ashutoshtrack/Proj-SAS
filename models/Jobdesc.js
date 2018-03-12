const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobdescSchema = new Schema({
  title: String,
  job_profile: String,
  location: String,
  experience: String,
  image: String,
  description: String,
  workrole: [String],
  qualification: [String],
  emptype: String,
  jobfunct: String,
  jobindustry: String,
  savedJob: String
});

mongoose.model("jobdesc", jobdescSchema);
