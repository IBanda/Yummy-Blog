import React from "react";

export default class Loader extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
}
