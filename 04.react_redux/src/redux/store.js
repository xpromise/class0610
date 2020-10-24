/* 
  用来集中存储所有数据
    读取数据、更新数据的方法都在store中
*/

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

let middleware = applyMiddleware(thunk);

// production / development
if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

// 创建store对象
const store = createStore(reducers, middleware);

export default store;
