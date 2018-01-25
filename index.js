const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const paspport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Regis");
require("./models/Resume");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(paspport.initialize());
app.use(paspport.session());

require("./routes/authRoutes")(app);
require("./routes/regisRoutes")(app);
require("./routes/resumeRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //its a production version buddy forwad it to build i.e index.html
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
