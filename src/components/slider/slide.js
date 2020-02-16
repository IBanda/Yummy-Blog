import React from "react";
import propTypes from "prop-types";
export default function Slide(props) {
  const { image } = props;
  return (
    <div className="slide">
      <img src={image} alt={image} />
      <div className="blog-detail">
        <p>May 19,2017</p>
        <span>|</span> <a href="/#">5 Comments</a>
        <h2>Where To Get The Best Sunday Roast In The Cotswolds </h2>
      </div>
    </div>
  );
}
Slide.propTypes = {
  image: propTypes.string.isRequired
};
