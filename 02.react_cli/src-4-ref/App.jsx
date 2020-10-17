import React, { Component } from "react";

import Child from './Child'

export default class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.createRef = React.createRef();
  //   console.log(this.createRef); // {current: null}
  // }

  // 添加原型的方法
  test() {}

  // 添加实例对象直接属性
  createRef = React.createRef();
  childRef = React.createRef();
  // 添加实例对象直接方法
  handleClick = () => {
    // console.log(this.refs.stringRef.value); // stringRef
    // console.log(this.funcRef.value);
    console.log(this);
    console.log(this.createRef.current.value);
    console.log(this.childRef);
  };

  handleBlur = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref="stringRef" /> */}
        {/* <input type="text" ref={(input) => this.funcRef = input} /> */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.handleClick}>点击按钮提示数据</button>
        <input
          type="text"
          placeholder="失去焦点提示数据"
          onBlur={this.handleBlur}
        />
        <Child ref={this.childRef}/>
      </div>
    );
  }
}
