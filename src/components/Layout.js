import React from "react";
import Header from "../components/Header/header";
import Head from "next/head";
import MainSlider from "../components/slider/slider";
import Categories from "../components/category-folder/category";
import Blog from "../components/Blog/blog";
import Footer from "../components/footer/footer";
import propTypes from "prop-types";

export default class Layout extends React.Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    const display = this.props.loaderState ? "none" : "block";
    return (
      <>
        <div>
          <style jsx>{`
            display: ${display};
          `}</style>
          <Head>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans|Shadows+Into+Light+Two&display=swap"
              rel="stylesheet"
            ></link>
            <title>Yummy Blog</title>
          </Head>
          <Header />
          <MainSlider />
          <Categories />
          <Blog />
          <Footer />
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  load: propTypes.func.isRequired,
  loaderState: propTypes.bool.isRequired
};
