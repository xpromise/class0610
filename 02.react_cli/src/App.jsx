import React, { Component } from "react";
import axios from 'axios';

export default class App extends Component {

  async componentDidMount() {
    try {
      const result = await axios({
        url: '/',
        /*
          GET    查
          POST   增
          PUT    改（全部修改）
          PATCH  改（局部修改）
          DELETE
        */
        method: 'GET', 
      })

      console.log(result);
      //  .then()
      //  .catch()
    } catch (e) {
      // 处理错误
      console.log(e);
    }

  }

  render() {
    return (
      <div>
        <h1>loading...</h1>
        <h1>most star repo is xxx</h1>
      </div>
    );
  }
}
