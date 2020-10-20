const http = require("http");

http
  .createServer((req, res) => {
    const data = {
      code: 0,
      data: {
        total_count: 8256422,
        incomplete_results: false,
        items: [
          {
            id: 10270250,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            full_name: "facebook/react",
            name: "react",
            html_url: "https://github.com/facebook/react",
          },
        ],
      },
    };

    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(data));
  })
  .listen(9527, "localhost", (err) => {
    if (err) {
      console.log("服务器启动失败", err);
      return;
    }

    console.log("服务器启动成功", "http://localhost:9527");
  });
