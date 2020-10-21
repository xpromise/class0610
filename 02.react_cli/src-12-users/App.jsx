import React, { Component } from "react";

import Search from "./pages/Search";
import List from "./pages/List";

/*
  1. 将class改成className
  2. 将未闭合标签加上结束符
  3. 将style改成{{}}
*/
export default class App extends Component {
  render() {
    return (
      <div data-reactroot="" className="container">
        <Search />
        <List />
      </div>
    );
  }
}
