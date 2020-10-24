// @ts-nocheck
import React, { Component } from "react";

import Father from "./Father";

import context from "./context";

export default class App extends Component {
  render() {
    const person = { name: "huahua" };

    return (
      <div>
        <context.Provider value={person}>
          app...
          <Father />
        </context.Provider>
      </div>
    );
  }
}
