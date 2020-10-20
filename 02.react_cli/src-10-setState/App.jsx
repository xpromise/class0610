import React, { Component } from "react";

export default class App extends Component {
  state = {
    num: 0,
  };

  /*  
    setState是同步还是异步？
      即表现是同步，也可以表现是异步

      在定时器中、原生DOM事件中表现是同步的：同步更新，多次更新都会生效
      在生命周期函数中，React合成事件是异步的：异步更新，多次更新会合并（相同属性后面会覆盖前面的）

      在async函数中，如果加了await, setState更新就是同步的，没有就是异步的
        一般情况下async和await一起使用，简单理解就是async函数中更新也是同步的

      为了避免同步异步问题：
        在一个函数中，setState建议只调用一次（不管同步异步都不会影响功能）  
  */

  btnRef = React.createRef();

  componentDidMount() {
    // 原生DOM事件
    // this.btnRef.current.onclick = () => {
    //   const { num } = this.state;
    //   this.setState({
    //     num: num + 2,
    //   });
    //   console.log(111, this.state.num); // 2
    //   this.setState({
    //     num: num + 1,
    //   });
    //   console.log(222, this.state.num); // 1
    // };
  }

  handleClick = async () => {
    const { num } = this.state;

    // await new Promise((resolve) => {
    //   resolve();
    // });

    this.setState({
      num: num + 2,
    });

    console.log(111, this.state.num); // 2

    this.setState({
      num: num + 1,
    });

    console.log(222, this.state.num); // 1
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     /*
  //       333 0 初始化渲染 0
  //       setTimeout
  //       333 2
  //       111 2
  //       333 1
  //       222 1
  //     */

  //     console.log('setTimeout');

  //     const { num } = this.state;

  //     // setState是同步，多次调用都能更新
  //     this.setState({
  //       num: num + 2,
  //     });

  //     console.log(111, this.state.num); // 2

  //     this.setState({
  //       num: num + 1,
  //     });

  //     console.log(222, this.state.num); // 1
  //   }, 0);
  // }

  // componentDidMount() {
  //   const { num } = this.state;

  //   // setState是异步的, 多次更新会合并成最后一次
  //   // 多次更新会合并成一次，合并成最后一次
  //   // Object.assgin({}, {num: num + 2}, {num: num + 1})
  //   this.setState({
  //     num: num + 2,
  //     // count: 1
  //   });

  //   console.log(111, this.state.num); // 0

  //   this.setState({
  //     num: num + 1,
  //   });

  //   console.log(222, this.state.num); // 0
  // }

  render() {
    console.log(333, this.state.num); // 1

    return (
      <div>
        App..
        <button ref={this.btnRef} onClick={this.handleClick}>
          按钮
        </button>
      </div>
    );
  }
}
