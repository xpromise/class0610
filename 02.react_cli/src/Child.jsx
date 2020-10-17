import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Child extends Component {
  // static 静态的：给类定义直接属性和方法
  // 如果不用static定义，就是给类的原型定义属性和方法
  static propTypes = {
    name: PropTypes.string.isRequired, // 必选属性
    age: PropTypes.number.isRequired,
    sex: PropTypes.string, // 可选属性
  }

  static defaultProps = {
    sex: '女', 
  }

  render() {
    // 读取props
    const { name, age, sex } = this.props;

    return (
      <ul>
        <li>姓名：{name}</li>
        <li>年龄：{age}</li>
        <li>性别：{sex}</li>
      </ul>
    );
  }
}

// // 对组件要接受的属性进行类型和必要性限制
// Child.propTypes = {
//   name: PropTypes.string.isRequired, // 必选属性
//   age: PropTypes.number.isRequired,
//   sex: PropTypes.string, // 可选属性
// }
// // 默认值
// Child.defaultProps = {
//   sex: '女', 
// }
