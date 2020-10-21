import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home...</h1>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </>
    );
  }
}
