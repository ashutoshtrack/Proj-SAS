const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Savedjob = mongoose.model("savedjob");

module.exports = app => {
  app.post("/api/sjobs", requireLogin, async (req, res) => {
    const {
      jobid,
      title,
      location,
      experience,
      image,
      description,
      workrole,
      qualification,
      emptype,
      jobfunct,
      jobindustry
    } = req.body;
    console.log("api.sjobs", req);

    const jobsaver = new Savedjob({
      jobid,
      title,
      location,
      experience,
      image,
      description,
      workrole,
      qualification,
      emptype,
      jobfunct,
      jobindustry,
      _user: req.user.id
    });
    const mas = await jobsaver.save();
    res.send(mas);
  });

  app.get("/api/sjobs", requireLogin, async (req, res) => {
    var query = { _user: req.user.id };

    Savedjob.find(query, function(err, regist) {
      if (err) {
        throw err;
      }
      res.json(regist);
    });
  });
};
