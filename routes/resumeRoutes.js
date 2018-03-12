const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Resume = mongoose.model("resumes");

module.exports = app => {
  app.post("/api/resume", requireLogin, async (req, res) => {
    const { jobid } = req.body;
    const resumer = new Resume({
      jobid,
      apply: "true",
      _user: req.user.id
    });
    const mas = await resumer.save();
    res.send(mas);
  });

  app.get("/api/resume/?:jobid?", requireLogin, async (req, res) => {
    var query = { _user: req.user.id };
    if (!req.params.jobid === null || !req.params.jobid === false) {
      query = { jobid: req.params.jobid, _user: req.user.id };
      console.log("sjobs query 2", req.params.jobid);
    } else {
      query = { _user: req.user.id };
      console.log("sjobs query", req.user.id);
    }

    Resume.findOne({ _user: usere }, function(err, rasmalai) {
      if (err) {
        throw err;
      }
      res.json(rasmalai);
    });
  });
};
