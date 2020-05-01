import React, { Component } from "react";
import { connect } from "react-redux";

import { apiGetImage } from "../actions";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickMessage = () => {
    this.props.apiGetImage();
    console.log(this.props.img)
  }

  render() {
    return (
      <React.Fragment>
        <h1 onClick={this.handleClickMessage}>Click To See Image In console</h1>
      </React.Fragment>
    );
  }
}

export default connect(
  (state, props) => ({
    img: state.img,
  }),
  {
    apiGetImage: apiGetImage,
  }
)(Test);
