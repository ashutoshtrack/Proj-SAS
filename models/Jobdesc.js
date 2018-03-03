const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobdescSchema = new Schema({
  job_profile: String,
  location: String
});

mongoose.model("jobdesc", jobdescSchema);
