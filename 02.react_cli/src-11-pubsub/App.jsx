import React, { Component } from "react";
import PubSub from "pubsub-js";
import Child from "./Child";

export default class App extends Component {

  componentDidMount() {
    // 订阅消息（绑定事件） ：为了接受别的组件传递的数据
    this.token = PubSub.subscribe('getMsg', (msg, data) => {
      console.log(msg, data);
    })
  }

  componentWillUnmount() {
    // 解绑消息
    PubSub.unsubscribe(this.token);
  }

  render() {
    return (
      <>
        <h2>App...</h2>
        <Child />
      </>
    );
  }
}
