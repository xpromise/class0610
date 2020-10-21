import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  state = {
    searchName: "",
  };

  search = () => {
    const { searchName } = this.state;
    
    if (!searchName) return;
    // 发布消息：将searchName传给List组件
    PubSub.publish("search", searchName);
  };

  updateSearchName = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            value={this.state.searchName}
            onChange={this.updateSearchName}
            placeholder="enter the name you search"
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
