import React, { Component } from "react";
import { connect } from "react-redux";
import { delComment } from "../../../redux/actions";

class Item extends Component {
  del = () => {
    this.props.delComment(this.props.comment.id);
  };

  render() {
    const { name, content } = this.props.comment;
    return (
      <li className="list-group-item">
        <div className="handle" style={{ border: "none" }}>
          <button
            onClick={this.del}
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

export default connect(null, { delComment })(Item);
