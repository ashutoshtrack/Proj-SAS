const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const paspport = require("passport");
const bodyParser = require("body-parser");
const busboyBodyParser = require("busboy-body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Regis");
require("./models/Resume");
require("./models/Jobdesc");
require("./services/passport");
require("./models//Savejobs");

mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(busboyBodyParser({ limit: "50mb" }));

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
require("./routes/jobdescRoutes")(app);
require("./routes/savedjobsRoutes")(app);
let main = require("./routes/routing");
app.use("/api", main);

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
