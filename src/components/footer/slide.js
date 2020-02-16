import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slide(props) {
  return (
    <div className="footer-slider">
      <img src={props.image} alt={props.image} />
      <div>
        <span>follow me</span>
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
    </div>
  );
}
Slide.propTypes = {
  image: propTypes.string.isRequired
};
