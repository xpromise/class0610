import React, { Component } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

/*
  react-router-dom库向外暴露n个组件
    BrowserRouter history模式
    HashRouter    hash模式
      要求：所有路由组件都必须是他们的子组件（必须是嵌套关系）
*/

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 
                Link和NavLink
                  公共点：
                    1. 能够更新浏览器历史记录
                    2. 不会刷新不会发送请求
                  不同点：
                    NavLink会给点击的元素添加一个active类名
                    
                如果需要给选中的元素一个特殊的样式就用NavLink
                如果不需要就用Link
              */}
              <NavLink
                className="list-group-item"
                // activeClassName="my-active" // 修改选中的类的名称
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="list-group-item"
                // activeClassName="my-active"
                to="/home"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                  Switch 切换路由组件显示：只让其中一个路由组件生效（第一个）
                  Route 根据路径的变化，看是否匹配path，匹配上就显示component对应的组件
                  Redirect 能匹配所有路径，重定向到to
                */}
                <Switch>
                  <Route
                    path="/home"
                    // exact
                    component={Home}
                  />
                  <Route
                    path="/about"
                    // exact
                    component={About}
                  />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
