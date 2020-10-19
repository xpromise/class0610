import React, { Component } from "react";
import ReactDOM from "react-dom";

import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  // 可能会触发多次
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    // 发送请求、绑定事件、设置定时器等一次性任务
    console.log("componentDidMount");
  }

  // 可能会触发多次
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  // 性能优化
  shouldComponentUpdate(nextState, nextProps) {
    console.log("shouldComponentUpdate");
    // 决定组件是否更新
    // 返回值true，代表要更新
    // 返回值false，代表不更新
    // 决定组件要不要更新？看数据（state，props）是否发生变化
    // 只要state，props有一个发生变化，就要更新
    console.log(this.state);
    console.log(this.props);

    return true;
  }

  // 可能会触发多次
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // 收尾工作；清除定时器，解绑事件等 --> 防止内存泄漏
    console.log("componentWillUnmount");
  }

  update = () => {
    // this.setState({});
    // this.forceUpdate(() => {
    //   return {};
    // });

    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  render() {
    console.log("render");
    return (
      <div onClick={this.update}>
        App..
        <Child />
      </div>
    );
  }
}
