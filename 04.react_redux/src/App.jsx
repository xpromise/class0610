import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <p>click xxx times</p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button>+</button>
        <button>-</button>
        <button>increment if odd</button>
        <button>increment async</button>
      </>
    );
  }
}
