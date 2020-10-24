import React, { Component } from "react";

import context from "./context";

export default class Child extends Component {
  static contextType = context;

  render() {
    // console.log(this.context);

    return (
      <div>
        Child..
        {/* <context.Consumer>
          {(person) => {
            return <p>{person.name}</p>;
          }}
        </context.Consumer> */}

        <p>{this.context.name}</p>
      </div>
    );
  }
}
