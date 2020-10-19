import React, { Component } from "react";

// 受控（Control）组件：通过state和onChange事件来收集表单数据的组件
export default class App extends Component {
  state = {
    username: "",
    password: "",
  };

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // 封装一个复用的方法
  // 高阶函数
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  };

  handleSubmit = (event) => {
    // 禁止表单的默认行为
    event.preventDefault();
    // 收集表单数据
    const { username, password } = this.state;

    console.log(username, password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input
          value={username}
          // onChange={this.handleUsernameChange}
          onChange={this.handleChange("username")}
          type="text"
        />
        密码:
        <input
          value={password}
          // onChange={this.handlePasswordChange}
          onChange={this.handleChange("password")}
          type="password"
        />
        <button type="submit">登录</button>
      </form>
    );
  }
}

// export default class App extends Component {
//   usernameRef = React.createRef();
//   passwordRef = React.createRef();

//   handleSubmit = (event) => {
//     // 禁止表单的默认行为
//     event.preventDefault();
//     // 收集表单数据

//     // 不建议使用
//     const username = this.usernameRef.current.value;
//     const password = this.passwordRef.current.value;

//     console.log(username, password);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         用户名: <input ref={this.usernameRef} type="text" />
//         密码: <input ref={this.passwordRef} type="password" />
//         <button type="submit">登录</button>
//       </form>
//     );
//   }
// }
