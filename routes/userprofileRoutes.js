const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserProfile = mongoose.model("userprofile");

module.exports = app => {
  app.get("/api/viewprofile/:usere", function(req, res) {
    let usere = req.params.usere;
    console.log("usereprofileroutes", usere);
    UserProfile.findOne({ _user: usere }, function(err, regist) {
      if (err) {
        throw err;
      }
      res.json(regist);
    });
  });
};
