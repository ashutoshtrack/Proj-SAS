if (process.env.NODE_ENV == "production") {
  //keys
  module.exports = require("./prod");
} else {
  //dev
  module.exports = require("./dev");
}
