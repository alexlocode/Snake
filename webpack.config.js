const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  target: "web",
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./ts/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"], // 配置ts文件可以作为模块加载
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "貪吃蛇",
      filename: "index.html",
      template: "index.html",
      chunjs: ["vendor", "index"],
    }),
  ],
  devServer: {
    liveReload: true,
    compress: true,
    port: 3000,
    // filename: 'bundle.js',
  },
};
