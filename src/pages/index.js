import React from "react";
import Layout from "../components/Layout";
import Loader from "../components/loader";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true
    };
    this.handleLoader = this.handleLoader.bind(this);
  }

  handleLoader() {
    this.setState(state => ({
      loader: !state.loader
    }));
  }
  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        <Layout loaderState={this.state.loader} load={this.handleLoader} />
      </>
    );
  }
}
