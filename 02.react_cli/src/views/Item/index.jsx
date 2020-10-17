import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  state = {
    isShowBtn: false,
  };

  // 闭包的经典应用场景
  // 高阶函数：执行函数返回值是一个函数
  update = (id) => {
    return () => {
      // 获取到点击元素的id
      // console.log(id);
      this.props.updateTodo(id);
    };
  };

  switchBtn = (isShow) => {
    return () => {
      this.setState({
        isShowBtn: isShow,
      });
    };
  };

  del = () => {
    // const {
    //   // 解构props得到todo
    //   todo: {
    //     // 对todo解构得到id
    //     // 对id进行重命名为a
    //     id: a
    //   },
    // } = this.props;

    const { id } = this.props.todo;
    this.props.delTodo(id);
  };

  render() {
    // 获取props数据
    const { todo } = this.props;
    const { isShowBtn } = this.state;

    return (
      <li
        key={todo.id}
        onMouseEnter={this.switchBtn(true)}
        onMouseLeave={this.switchBtn(false)}
      >
        <input
          onChange={this.update(todo.id)}
          className="checkbox"
          type="checkbox"
          checked={todo.isChecked}
        />
        <span>{todo.content}</span>
        {/* 第一个{}是jsx语法，代表里面是js语法，第二个{}代表是一个js对象 */}
        {/* style样式样式名必须是小驼峰命名法 */}
        <button
          onClick={this.del}
          style={{
            marginLeft: 30,
            backgroundColor: "red",
            display: isShowBtn ? "block" : "none",
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
