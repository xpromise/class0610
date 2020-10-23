import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from './redux/store';

ReactDOM.render(
  // 接管store对象，将来其他组件需要使用store
  // 会给组件传入store对象，组件就不要手动引入了
  // context / (provider/inject)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
