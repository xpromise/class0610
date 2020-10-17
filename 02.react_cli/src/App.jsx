import React, { Component } from "react";
// 引入其他组件
import Child from "./Child";

export default class App extends Component {
  render() {
    const person = {
      name: "jack",
      age: 18,
      // sex: "男",
    };

    return (
      <div>
        App...
        {/* 通过组件标签使用组件 */}
        {/* <Child name={person.name} age={person.age} sex={person.sex}/> */}
        <Child {...person} />
      </div>
    );
  }
}
