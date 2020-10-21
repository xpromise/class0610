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

  /*
    路由跳转的两种方式：
      1. 路由链接导航
        Link NavLink
      2. 编程式导航
        history.push/replace/goBack/goForward
    
    什么时候用哪种？
      如果只要去做跳转行为，就用路由链接导航
      如果除了跳转行为，还需要干一些其他事（发送请求、保存数据等），就用编程式导航
  */
  push = (path) => {
    return () => {
      this.props.history.push(path, { name: "huahua", age: 48 });
    };
  };

  replace = (path) => {
    return () => {
      this.props.history.replace(path);
    };
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    const { messages } = this.state;
    return (
      <>
        <ul>
          {messages.map(({ id, content }) => {
            const path = `/home/message/${id}?name=jack`;
            return (
              <li key={id}>
                <Link to={path}>{content}</Link>
                <button onClick={this.push(path)}>push</button>
                <button onClick={this.replace(path)}>replace</button>
              </li>
            );
          })}
        </ul>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        {/* 
          路由传参：
            1、params参数 
              - 路径定义占位符
                <Route path="/home/message/:id" component={MessageDetail} />
              - 使用
                组件通过 this.props.match.params  
            
            2、query参数(用的少)
              输入地址 、 更新地址  http://localhost:3000/home/message/1?name=jack
              - 使用
                this.props.location.search

            3. state参数
              - 传递参数
                this.props.history.push(path, { name: "huahua", age: 48 });
              - 使用
                this.props.location.state  

            
            凡是通过Route加载的组件，就成为路由组件，组件内部能接受到三个属性
              history 路由跳转
              location 获取query和state参数，以及当前路由路径
              match 获取params参数

        */}
        <Route path="/home/message/:id" component={MessageDetail} />
      </>
    );
  }
}
