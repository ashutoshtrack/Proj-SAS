const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Jobdesc = mongoose.model("jobdesc");
module.exports = app => {
  app.get("/api/jobdesc/?:albumid?", requireLogin, function(req, res) {
    console.log(req.params);
    var query = null;
    if (!req.params.albumid === null || !req.params.albumid === false) {
      query = { _id: req.params.albumid };
    } else {
      query = null;
    }
    console.log(query);
    Jobdesc.find(query, function(err, jobs) {
      if (err) {
        throw err;
      }
      res.json(jobs);
    });
  });

  app.get("/api/savedjob", requireLogin, function(req, res) {
    console.log(req.params);
    var query = { savedJob: true };

    console.log(query);
    Jobdesc.find(query, function(err, jobs) {
      if (err) {
        throw err;
      }
      res.json(jobs);
    });
  });

  // update query for

  app.put("/api/jobdesc/?:albumid?", requireLogin, async (req, res) => {
    var query = null;

    if (!req.params.albumid === null || !req.params.albumid === false) {
      query = { _id: req.params.albumid };
    } else {
      query = null;
    }

    var update = {
      $set: {
        savedJob: "true"
      }
    };

    var options = { new: true };
    Jobdesc.findOneAndUpdate(query, update, options, function(err, abc) {
      if (err) {
        throw err;
      }
      res.json(abc);
    });
  });
};
