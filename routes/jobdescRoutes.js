const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Jobdesc = mongoose.model("jobdesc");
module.exports = app => {
  app.get("/api/jobdesc", requireLogin, function(req, res) {
    Jobdesc.find(function(err, jobs) {
      if (err) {
        throw err;
      }
      res.json(jobs);
    });
  });
};
