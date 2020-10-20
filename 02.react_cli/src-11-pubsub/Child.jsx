import React, { Component } from "react";
import PubSub from 'pubsub-js';

export default class Child extends Component {
  state = {
    person: {
      name: "yangshuai",
      age: 58,
    },
  };

  sendMsg = () => {
    PubSub.publish('getMsg', this.state.person);
  }

  render() {
    return <>
      <h2>Child...</h2>
      <button onClick={this.sendMsg}>向App组件传递数据</button>
    </>;
  }
}
