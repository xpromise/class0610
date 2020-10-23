import React, { Component } from "react";
import { Button, WingBlank, Modal, Carousel } from "antd-mobile";

export default class App extends Component {
  state = {
    data: ["111", "222", "333"],
  };

  showModal = () => {
    Modal.alert("是否要退出登录", "您真的要退出吗？", [
      {
        text: "取消",
        onPress: () => {
          console.log("取消");
        },
      },
      {
        text: "确认",
        onPress: () => {
          console.log("确认");
        },
      },
    ]);
  };

  render() {
    return (
      <WingBlank>
        <Button type="primary" onClick={this.showModal}>
          按钮
        </Button>

        <Carousel autoplay infinite>
          {this.state.data.map((item, index) => {
            return (
              <div style={{ height: 100, backgroundColor: "pink" }} key={index}>
                {item}
              </div>
            );
          })}
        </Carousel>
      </WingBlank>
    );
  }
}
