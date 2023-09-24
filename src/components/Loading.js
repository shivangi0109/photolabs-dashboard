import React, { Component } from "react";

class Loading extends Component {
  constructor() {
    super();
      this.state = {
        loading: true
      }
  }

  render() {
    return <section className="loading">Loading</section>;
  }
}

export default Loading;
