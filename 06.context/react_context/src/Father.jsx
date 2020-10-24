import React, { Component } from "react";

import Child from "./Child";

export default class Father extends Component {
  render() {
    return (
      <div>
        Father...
        <Child />
      </div>
    );
  }
}
