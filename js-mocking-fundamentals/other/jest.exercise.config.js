const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, "../"),
  roots: [path.join(__dirname, "../src")],
  displayName: "exercise",
  testMatch: ["**/exercise/**/*.js"],
  runner: require.resolve("./create-node-runner"),
};
