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

  // 添加todo
  addTodo = (content) => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: [{ id: Date.now(), content, isChecked: false }, ...todos],
    });
  };

  // 更新todo
  updateTodo = (id) => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
        return { ...todo };
      }),
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleCheckAll = (checked) => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: todos.map((todo) => {
        return {
          ...todo,
          isChecked: checked,
        };
      }),
    });
  };

  batchDel = () => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: todos.filter((todo) => !todo.isChecked)
    })
  }

  render() {
    // 读取state数据
    const { todos } = this.state;

    // 统计所有todos数量
    const total = todos.length;
    // 统计已完成todo数量
    const checkedNum = todos.reduce((previous, current) => {
      return previous + (current.isChecked ? 1 : 0);
    }, 0);

    return (
      <div className="container">
        <Header addTodo={this.addTodo} />
        {/* 通过props传递动态数据 */}
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          delTodo={this.delTodo}
        />
        <Footer
          total={total}
          checkedNum={checkedNum}
          handleCheckAll={this.handleCheckAll}
          batchDel={this.batchDel}
        />
      </div>
    );
  }
}
