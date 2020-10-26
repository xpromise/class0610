const pxtorem = require("postcss-pxtorem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
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
  },
};
