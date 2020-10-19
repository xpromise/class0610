import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    checkedNum: PropTypes.number.isRequired,
    handleCheckAll: PropTypes.func.isRequired,
    batchDel: PropTypes.func.isRequired,
  };

  check = (event) => {
    const checked = event.target.checked;
    this.props.handleCheckAll(checked);
  };

  render() {
    const { total, checkedNum, batchDel } = this.props;

    const isCheckAll = total === checkedNum && total > 0;

    return (
      <div>
        <input
          className="checkbox"
          type="checkbox"
          checked={isCheckAll}
          onChange={this.check}
        />
        <span>
          已完成 {checkedNum}/ 全部 {total}
        </span>

        <button
          onClick={batchDel}
          style={{
            marginLeft: 30,
            backgroundColor: "red",
            display: checkedNum > 0 ? "block" : "none",
          }}
        >
          批量删除
        </button>
      </div>
    );
  }
}
