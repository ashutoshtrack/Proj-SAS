const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const { Schema } = mongoose;
const User = mongoose.model("users");

const Regis = mongoose.model("regist");

module.exports = app => {
  app.post("/api/regist", requireLogin, async (req, res) => {
    const { firstName, email, phoneno, orgName, locationer, ghLink } = req.body;
    console.log(req.body);
    console.log(req.user.id, "holaholahola");

    const regist = new Regis({
      firstName,
      email,
      phoneno,
      orgName,
      locationer,
      ghLink,
      registered: "false",
      _user: req.user.id
    });
    const mas = await regist.save();
    res.send(mas);
  });
  app.put("/api/regist/:ide", requireLogin, async (req, res) => {
    var formie = req.body;
    var query = req.user.id;
    console.log(query, "query");

    var update = {
      $set: {
        orgName: formie.orgName,
        locationer: formie.locationer,
        ghLink: formie.ghLink,
        registered: true
      }
    };

    var options = { new: true };
    Regis.findOneAndUpdate({ _user: query }, update, options, function(
      err,
      abc
    ) {
      if (err) {
        throw err;
      }
      res.json(abc);
    });
  });

  app.get("/api/regist/:usere", requireLogin, function(req, res) {
    console.log("Reqparams", req.params);
    let usere = req.params.usere;
    console.log("usere", usere);
    Regis.findOne({ _user: usere }, function(err, regist) {
      if (err) {
        throw err;
      }
      res.json(regist);
    });
  });

  //-----update query

  app.put("/api/userupdater", async (req, res) => {
    var query = req.user.id;
    console.log(query, "query");

    var update = {
      $set: {
        registered: true
      }
    };

    var options = { new: true };
    User.findOneAndUpdate({ _id: query }, update, options, function(err, abc) {
      if (err) {
        throw err;
      }
      console.log(res.json(abc), "");
      res.json(abc);
    });
  });
};
