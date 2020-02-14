import React from "react";
import Header from "../components/Header/header";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Shadows+Into+Light+Two&display=swap"
          rel="stylesheet"
        ></link>
        <title>Yummy Blog</title>
      </Head>
      <Header />
    </div>
  );
}
