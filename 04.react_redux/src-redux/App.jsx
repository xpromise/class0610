import React, { Component } from "react";
import store from "./redux/store";
import { increment, decrement } from "./redux/actions";

export default class App extends Component {
  state = {
    num: 1,
  };

  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };

  increment = () => {
    // 1. 调用action函数生成action对象
    const action = increment(this.state.num);
    // 2. 调用store.dispatch(action)
    store.dispatch(action);
  };

  decrement = () => {
    // 1. 调用action函数生成action对象
    const action = decrement(this.state.num);
    // 2. 调用store.dispatch(action)
    store.dispatch(action);
  };

  incrementIfodd = () => {
    const count = store.getState();
    // if (count % 2 === 0) return;
    if ((count & 1) === 0) return;

    this.increment();
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  };

  componentDidMount() {
    // redux数据更新后会触发
    store.subscribe(() => {
      // 重新渲染组件
      this.setState({});
    });
  }

  render() {
    // 读取store对象管理的所有数据的方法
    const count = store.getState();

    return (
      <>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfodd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </>
    );
  }
}
