const path = require("path");
const { ProgressPlugin, JavascriptModulesPlugin } = require("webpack");

const baseConfig = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module"
    },
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
  experiments: {
    outputModule: true
  }
};

const buildConfig = {};

module.exports = baseConfig;
