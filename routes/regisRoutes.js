const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Regis = mongoose.model("regist");

module.exports = app => {
  app.post("/api/regist", requireLogin, async (req, res) => {
    const { firstName, email, projName } = req.body;
    console.log(req.body);
    console.log(req.user.id, "holaholahola");

    const regist = new Regis({
      firstName,
      email,
      projName,
      _user: req.user.id
    });
    const mas = await regist.save();
    res.send(mas);
  });
  app.put("/api/regist/:_id", requireLogin, async (req, res) => {
    var formie = req.body;
    var query = req.params._id;
    console.log(req, "holaform");

    var update = {
      $set: {
        projName: formie.projName
      }
    };

    var options = { new: true };
    Regis.findOneAndUpdate(query, update, options, function(err, abc) {
      if (err) {
        throw err;
      }
      res.json(abc);
    });
  });
};
