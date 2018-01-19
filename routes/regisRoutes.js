const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Regis = mongoose.model("regist");

module.exports = app => {
  app.post("/api/regist", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    console.log(req.body);
    const regist = new Regis({
      firstName,
      lastName,
      email
    });
    const mas = await regist.save();
    res.send(mas);
  });
};
