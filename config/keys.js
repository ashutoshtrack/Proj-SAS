if (process.env.NODE_ENV == "production") {
  //keys
  module.exports = require("./keys");
} else {
  //dev
  module.exports = require("./dev");
}
