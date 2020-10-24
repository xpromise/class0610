import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/actions";

class Add extends Component {
  state = {
    name: "",
    content: "",
  };

  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };

  add = (e) => {
    e.preventDefault();
    const { name, content } = this.state;
    if (!name || !content) return;
    // 添加评论
    this.props.addComment({ id: Date.now(), name, content });
    // 清空数据
    this.setState({
      name: '',
      content: ''
    })
  };

  render() {
    const { name, content } = this.state;

    return (
      <div className="col-md-4">
        <form className="form-horizontal" onSubmit={this.add}>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              value={name}
              onChange={this.handleChange("name")}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows={6}
              placeholder="评论内容"
              value={content}
              onChange={this.handleChange("content")}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right">
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(Add);
