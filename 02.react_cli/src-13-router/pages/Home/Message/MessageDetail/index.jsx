import React, { Component } from "react";

export default class MessageDetail extends Component {
  render() {
    // 获取 params参数 id 路径占位符参数
    const id = this.props.match.params.id;
    console.log(id);

    return <p>id: {id}</p>;
  }
}
