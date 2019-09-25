import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Registration from "./components/Registration";

class Core extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/registration" component={Registration} />
        </Router>
      </div>
    );
  }
}

export default Core;
