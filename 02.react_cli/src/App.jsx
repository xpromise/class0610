import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Pins from "./pages/Pins";
import Topics from "./pages/Topics";
import Books from "./pages/Books";
import Events from "./pages/Events";

import routes from "./router";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header className="header">
          <ul className="header-list">
            {routes.map((route) => {
              return (
                <li key={route.path}>
                  <NavLink to={route.path} exact={route.exact}>
                    {route.title}
                  </NavLink>
                </li>
              );
            })}

            {/* <li>
              <NavLink to="/" exact>
                首页
              </NavLink>
            </li>
            <li>
              <NavLink to="/pins" exact>
                沸点
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics" exact>
                话题
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" exact>
                小册
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" exact>
                活动
              </NavLink>
            </li> */}
          </ul>
        </header>
        <section>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={route.path}
                />
              );
            })}
            {/* <Route path="/" exact component={Home} />
            <Route path="/pins" exact component={Pins} />
            <Route path="/books" exact component={Books} />
            <Route path="/topics" exact component={Topics} />
            <Route path="/events" exact component={Events} /> */}
          </Switch>
        </section>
      </Router>
    );
  }
}
