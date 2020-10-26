const path = require("path");
const pxtorem = require("postcss-pxtorem");

module.exports = {
  style: {
    postcss: {
      plugins: [
        pxtorem({
          // 根标签字体大小
          // 以设计稿为基准：设计稿宽度 / 100
          rootValue: 3.75,
          propList: [
            "font",
            "font-size",
            "line-height",
            "letter-spacing",
            "width",
          ],
        }),
      ],
    },
  },
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
};
