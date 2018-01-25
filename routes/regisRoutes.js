const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Regis = mongoose.model("regist");

module.exports = app => {
  app.post("/api/regist", requireLogin, async (req, res) => {
    const { firstName, lastName, email } = req.body;
    console.log(req.body);
    console.log(req.user.id, "holaholahola");

    const regist = new Regis({
      firstName,
      lastName,
      email,
      _user: req.user.id
    });
    const mas = await regist.save();
    res.send(mas);
  });
};
