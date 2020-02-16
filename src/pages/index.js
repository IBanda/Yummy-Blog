import React from "react";
import Header from "../components/Header/header";
import Head from "next/head";
import MainSlider from "../components/slider/slider";
import Categories from "../components/category-folder/category";
import Blog from "../components/Blog/blog";
import Footer from "../components/footer/footer";
import Loader from "../components/loader";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true
    };
  }

  componentDidMount() {
    console.log("did mount");
    this.setState(prevState => ({
      loader: !prevState.loader
    }));
  }
  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        <div>
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
