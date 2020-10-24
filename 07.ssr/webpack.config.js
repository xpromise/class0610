const path = require("path");

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env", // 编译es6语法
            "@babel/preset-react", // 编译react语法
          ],
        },
      },
    ],
  },
  // plugins: [],
  mode: "development",
  target: "node", // 构建的目标环境是nodejs
  resolve: {
    alias: { // 路径别名
      "@": path.resolve(__dirname, "src"),
      "@views": path.resolve(__dirname, "src/views"),
      "@comps": path.resolve(__dirname, "src/comps"),
    },
    extensions: [".js", ".json", ".jsx"], // 文件扩展名
  },
};
