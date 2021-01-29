const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    clientLogLevel: "error",
    hot: true,
  },
};
