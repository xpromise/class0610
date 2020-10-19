import React, { Component } from "react";

export default class Child extends Component {
  // 可能会触发多次
  UNSAFE_componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("child shouldComponentUpdate");

    return true;
  }

  // 可能会触发多次
  UNSAFE_componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  render() {
    console.log("child render");
    return <div>Child...</div>;
  }
}
