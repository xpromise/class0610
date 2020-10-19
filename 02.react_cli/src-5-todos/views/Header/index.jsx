import React, { Component } from "react";
import PropTypes from "prop-types";
// 引入样式文件
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  add = (event) => {
    // 判断按键是否是enter
    if (event.keyCode !== 13) return;
    // 获取输入框的值
    const content = event.target.value.trim();
    if (!content) return;
    // 添加todo
    this.props.addTodo(content);
    // 清空数据
    event.target.value = "";
  };

  render() {
    return (
      <input
        onKeyUp={this.add}
        className="header"
        type="text"
        placeholder="请输入代办事项，按回车键确认"
      />
    );
  }
}
