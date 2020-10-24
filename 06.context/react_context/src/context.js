import React from "react";

const context = React.createContext({ name: "rose" });

/*
  context是对象
    Provider 提供数据
    Consumer 消费、使用数据
*/
export default context;
