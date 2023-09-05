const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT || 9000,
};

module.exports = config;