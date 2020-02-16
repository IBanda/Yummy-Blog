import React from "react";
import propTypes from "prop-types";
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

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired
};

export default MyApp;
