import React, { Component } from "react";
import { connect } from "react-redux";
import { Test } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Test />;
  }
}

export default connect((state, props) => ({}), {})(App);
