import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { name, content } = this.props.comment;
    return (
      <li className="list-group-item">
        <div className="handle" style={{ border: "none" }}>
          <button
            style={{
              backgroundColor: "transparent",
              outline: "none",
              width: 50,
              color: "skyblue",
              border: "none",
            }}
          >
            删除
          </button>
        </div>
        <p className="user">
          <span>{name}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
