import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "./redux/actions";

class App extends Component {
  state = {
    num: 1,
  };

  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };

  increment = () => {
    this.props.increment(this.state.num);
  };

  decrement = () => {
    this.props.decrement(this.state.num);
  };

  incrementIfodd = () => {
    const count = this.props.count;
    // if (count % 2 === 0) return;
    if ((count & 1) === 0) return;

    this.props.increment(this.state.num);
  };

  incrementAsync = () => {
    this.props.incrementAsync(this.state.num);
  };

  // componentDidMount() {
  //   // redux数据更新后会触发
  //   store.subscribe(() => {
  //     // 重新渲染组件
  //     this.setState({});
  //   });
  // }

  render() {
    // 读取store对象管理的所有数据的方法
    const count = this.props.count;

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

/*
  connect 高阶组件（HOC）：本质上是一个函数，执行函数传入一个组件作为参数，返回值是一个新组件
    作用：主要是用来复用代码
*/

// 将redux中的state数据取出，以props传递给子组件
// state就是内部通过store.getState()调用后的返回值，说白了就是所有状态数据
// const mapStateToProps = (state) => {
//   return {
//     count: state,
//   };
// };

// // 将触发更新redux的方法封装好，以props传递给子组件
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment(num) {
//       // 1. 调用action函数生成action对象
//       const action = increment(num);
//       // 2. 调用store.dispatch(action)
//       dispatch(action);
//     },
//     decrement(num) {
//       // 1. 调用action函数生成action对象
//       const action = decrement(num);
//       // 2. 调用store.dispatch(action)
//       dispatch(action);
//     },
//   };
// };

// const NewComponent = connect(mapStateToProps, mapDispatchToProps)(App);
// // 新组件内部渲染App组件（新组件、容器组件是父组件，App、UI组件子组件）
// // 新组件内部会绑定重新渲染组件的方式
// export default NewComponent;

export default connect((state) => ({ count: state }), {
  increment,
  decrement,
  incrementAsync,
})(App);
