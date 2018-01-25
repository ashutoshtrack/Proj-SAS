const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Resume = mongoose.model("resumes");

module.exports = app => {
  app.post("/api/resume", requireLogin, async (req, res) => {
    console.log(req.body, "Vody");
    const { resume } = req.body;

    const resumer = new Resume({
      resume,
      _user: req.user.id
    });
    const mas = await resumer.save();
    res.send(mas);
  });
};
