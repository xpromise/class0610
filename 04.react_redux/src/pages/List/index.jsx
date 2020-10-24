import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class List extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((comment) => {
            return <Item comment={comment} key={comment.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ comments: state }), null)(List);
