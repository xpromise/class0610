import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  render() {
    // 获取props数据
    const { todos, updateTodo, delTodo } = this.props;

    return (
      <ul className="list">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              delTodo={delTodo}
            />
          );
        })}
      </ul>
    );
  }
}
