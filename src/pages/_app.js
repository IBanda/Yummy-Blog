import React from "react";
import PropTypes from "prop-types";
import "../static/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

MyApp.PropTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.toString
};

export default MyApp;
