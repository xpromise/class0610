import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  render() {
    // 获取props数据
    const { todos } = this.props;

    return (
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.isChecked}
              />
              <span>{todo.content}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
