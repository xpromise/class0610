import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  state = {
    opacity: 1,
  };

  componentDidMount() {
    this.timeId = setInterval(() => {
      const { opacity } = this.state;

      let newOpacity = opacity - 0.01;
      if (newOpacity <= 0) {
        newOpacity = 1;
      }

      this.setState({
        opacity: newOpacity,
      });
    }, 1000 / 60);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  goDie = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  render() {
    const { opacity } = this.state;
    return (
      <div>
        <h1 style={{ opacity }}>React学不会怎么办？</h1>
        <button onClick={this.goDie}>不活了</button>
      </div>
    );
  }
}
