import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    checkedNum: PropTypes.number.isRequired,
  };

  render() {
    const { total, checkedNum } = this.props;

    return (
      <div>
        <input className="checkbox" type="checkbox" />
        <span>
          已完成 {checkedNum}/ 全部 {total}
        </span>
      </div>
    );
  }
}
