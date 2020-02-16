import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";

const NavLinks = props => (
  <ul>
    <li>
      <a className={props.active} href="/#">
        home
      </a>
    </li>
    <li>
      <a href="/#">features</a>
    </li>
    <li>
      <a href="/#">categories</a>
    </li>
    <li>
      <a href="/#">archive</a>
    </li>
    <li>
      <a href="/#">about</a>
    </li>
    <li>
      <a href="/#">contact</a>
    </li>
  </ul>
);
NavLinks.propTypes = {
  active: propTypes.string
};

const BlogImage = props => <img src={props.image} alt={props.image} />;
BlogImage.propTypes = {
  image: propTypes.string
};

const BlogMeta = props => (
  <>
    <div className="meta-info">
      <div>
        <a href="/#">by marian</a>
        <span>|</span>
        <p className="date">May 19,2017</p>
      </div>

      <div>
        <FontAwesomeIcon className="likes" icon={["far", "heart"]} />
        <span>10</span>
        <FontAwesomeIcon className="comments" icon={["far", "comments"]} />
        <span>12</span>
        <FontAwesomeIcon icon="share-alt" />
      </div>
    </div>
    <h3 className="post-title">{props.title}</h3>
  </>
);
BlogMeta.propTypes = {
  title: propTypes.string
};

const BlogDetails = props => (
  <>
    <BlogImage image={props.image} />
    <BlogMeta title={props.title} />
  </>
);
BlogDetails.propTypes = {
  image: propTypes.string,
  title: propTypes.string
};

const SocialIcons = () => (
  <>
    <ul>
      <li>
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </li>
      <li>
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </li>
      <li>
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </li>
      <li>
        <FontAwesomeIcon icon={["fab", "skype"]} />
      </li>
      <li className="mr-0">
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </li>
    </ul>
  </>
);

export { NavLinks, BlogDetails, BlogImage, BlogMeta, SocialIcons };
