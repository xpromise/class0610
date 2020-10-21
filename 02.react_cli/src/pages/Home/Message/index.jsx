import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import MessageDetail from "./MessageDetail";

export default class Message extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: 1, content: "message001" },
          { id: 3, content: "message003" },
          { id: 5, content: "message005" },
        ],
      });
    }, 1000);
  }

  render() {
    const { messages } = this.state;
    return (
      <>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.id}>
                <Link to={`/home/message/${message.id}`}>
                  {message.content}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* 
          路由传参：
            1、params参数 
              - 路径定义占位符
                <Route path="/home/message/:id" component={MessageDetail} />
              - 使用
                组件通过 this.props.match.params  
                
        */}
        <Route path="/home/message/:id" component={MessageDetail} />
      </>
    );
  }
}
