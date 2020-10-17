import React, { Component } from "react";

// 在react控制用户界面发生变化，就要控制state
class App extends Component {
  // constructor(props) {
  //   // 调用父类的constructor
  //   super(props); // 但使用extends语法，必须使用super

  //   // 初始化state
  //   this.state = {
  //     isLikeMe: true,
  //   };
  // }

  // 简写
  state = {
    isLikeMe: true
  }

  // 默认情况下函数this是undefined
  // 改成箭头函数，this就是组件实例对象
  // 总结: 在React中生命周期函数的this指向组件实例对象，其他函数的this默认为undefined
  handleClick = () => {
    // console.log(this);
    const { isLikeMe } = this.state;
    // 修改state的值
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };

  render() {
    // 读取state数据
    const { isLikeMe } = this.state;

    // 问题：函数会创建n次
    // const handleClick = () => {
    //   // console.log(this);
    //   // 修改state的值
    //   this.setState({
    //     isLikeMe: !isLikeMe,
    //   });
    // };

    // 凡是使用jsx语法，都要引入React
    return <h1 onClick={this.handleClick}>{isLikeMe ? "你喜欢我" : "我喜欢你"}</h1>;
  }
}

export default App;
