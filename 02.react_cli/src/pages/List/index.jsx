import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
// 接口文档：https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-users
// 请求地址：https://api.github.com/search/users?q=yyx

export default class List extends Component {
  state = {
    users: [], // 用户数据
    isLoading: false, // 请求中
    isFirstView: true, // 是否显示enter xxx
  };

  componentDidMount() {
    this.token = PubSub.subscribe("search", async (msg, searchName) => {
      try {
        // console.log(msg, searchName);
        // 在发送请求之前，切换loading
        this.setState({
          isFirstView: false,
          isLoading: true,
        });
        // 发送请求，请求github users数据
        const result = await axios.get(
          `https://api.github.com/search/users?q=${searchName}`
        );
        // avatar_url html_url id login
        // console.log(result.data.items);
        this.setState({
          isLoading: false,
          users: result.data.items.map((user) => {
            return {
              id: user.id,
              html_url: user.html_url,
              avatar_url: user.avatar_url,
              login: user.login,
            };
          }),
        });
      } catch (e) {
        alert("网络异常~请稍后试试~");
      }
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isLoading, isFirstView } = this.state;

    if (isFirstView) {
      return <h1>enter name to search</h1>;
    }

    if (isLoading) {
      return <h1>loading...</h1>;
    }

    // console.log(users);

    if (users.length === 0) {
      return <h1>暂无该用户数据</h1>;
    }

    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={user.avatar_url}
                  style={{ width: 100 }}
                  alt="用户头像"
                />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
