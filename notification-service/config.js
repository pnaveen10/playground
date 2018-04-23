var config = {};

config.web = {};
config.auth = {};

config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;