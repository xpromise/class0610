const path = require("path");
// const pxtorem = require("postcss-pxtorem");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  style: {
    postcss: {
      plugins: [
        // https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
        pxtoviewport({
          viewportWidth: 375, // 设计稿宽度
        }),

        // pxtorem({
        //   // 根标签字体大小
        //   // 以设计稿为基准：设计稿宽度 / 100
        //   rootValue: 3.75,
        //   propList: [
        //     "font",
        //     "font-size",
        //     "line-height",
        //     "letter-spacing",
        //     "width",
        //   ],
        // }),
      ],
    },
  },
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
};
