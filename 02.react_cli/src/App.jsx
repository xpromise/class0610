import React, { Component } from "react";

import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

import "./App.css";

export default class App extends Component {
  // 初始化状态数据
  state = {
    todos: [
      { id: 1, content: "吃饭", isChecked: false },
      { id: 2, content: "睡觉", isChecked: true },
      { id: 3, content: "打豆豆", isChecked: false },
    ],
  };

  render() {
    // 读取state数据
    const { todos } = this.state;

    return (
      <div className="container">
        <Header />
        {/* 通过props传递动态数据 */}
        <List todos={todos} />
        <Footer />
      </div>
    );
  }
}
