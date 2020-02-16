import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const posts = [
  {
    image: "images/pop-post1.jpg",
    title: "Top Wineries To Visit In England"
  },
  {
    image: "images/pop-post2.jpg",
    title: "The 8 Best Gastro Pubs In Bath"
  },
  {
    image: "images/pop-post3.jpg",
    title: "Zermatt Unplugged the best festival"
  },
  {
    image: "images/pop-post4.jpg",
    title: "Harrogate's Top 10 Independent Eats"
  },
  {
    image: "images/pop-post5.jpg",
    title: "Eating Out On A Budget In Oxford"
  }
];
export default function PopularPost() {
  return (
    <div className="popularpost">
      <div className="title">
        <p>popular post</p>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="row">
          <div className="col-lg-6 col-6">
            <img src={post.image} alt="" />
          </div>
          <div className="col-lg-6 col-6">
            <h3>{post.title}</h3>
            <p>tuesday, october 3, 2017</p>
          </div>
        </div>
      ))}
      <div className="sidebar-cta">
        <img className="cta-img" src="images/cta-img.jpg" alt="cta image" />
        <div className="overlay">
          <div>
            <h2>cooking book</h2>
            <p>buy online now</p>
            <button>buy now</button>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="title">
          <p>newsletter</p>
        </div>
        <div className="form-wrapper">
          <p>
            Subscribe our newsletter gor get notification about new updates,
            information discount, etc.
          </p>
          <div className="sign-up-input">
            <input type="text" placeholder="Your email" />
            <div className="icon rounded-circle">
              <FontAwesomeIcon icon="paper-plane" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
