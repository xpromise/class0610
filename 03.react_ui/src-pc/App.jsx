import React, { Component } from "react";
import { Button, Modal } from "antd";

export default class App extends Component {
  state = {
    visible: false,
  };

  hanldleOk = () => {
    console.log("okokok");
  };
  
  hanldleCancel = () => {
    console.log("cancel");
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          按钮
        </Button>
        <Modal
          // 标题
          title="对话框组件"
          // 显示、隐藏
          visible={this.state.visible}
          // 点击确认按钮
          onOk={this.hanldleOk}
          // 点击取消按钮、x
          onCancel={this.hanldleCancel}
          okText="确认"
          cancelText="取消"
        >
          <p>content....</p>
        </Modal>
      </>
    );
  }
}
