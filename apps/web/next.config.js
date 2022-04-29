const withTM = require("next-transpile-modules")(["ui","ui-2"]);

module.exports = withTM({
  reactStrictMode: true,
});
