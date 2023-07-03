const path = require("path");
const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.tsx"),
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    library: {
      type: "module",
    },
  },
  externals: ["lodash", "react", "react-dom"],
  //dev
  devServer: {
    static: "./dist",
    // hot: true,
  },
  plugins: [
    // process all
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    // dev preview
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

const buildConfig = {};

module.exports = baseConfig;
