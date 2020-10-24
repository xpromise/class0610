import http from "http";
import React from "react";
// 服务端渲染
import ReactDOMServer from "react-dom/server";
// 引入App组件
import App from "./src/App";

http
  .createServer((req, res) => {
    // 将App组件渲染成标签字符串
    const htmlStr = ReactDOMServer.renderToString(<App />);

    console.log(htmlStr);

    res.setHeader("content-type", "text/html;charset=utf8");

    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React SSR</title>
      </head>
      <body>
        ${htmlStr}
      </body>
    </html>
    `);
  })
  .listen(9527);
