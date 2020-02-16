import React from "react";

import { BlogImage, BlogMeta } from "../sharedcomponents";
export default function ListBlog() {
  const posts = [
    {
      image: "images/list1.jpg",
      title: "The 10 Best Bars By The Seaside In Blackpool, UK"
    },
    {
      image: "images/list2.jpg",
      title: "How To Get A Narcissist To Feel Empathy"
    },
    {
      image: "images/list3.jpg",
      title: "Bristol's 10 Amazing Weekend Brunches And Late Breakfasts"
    },
    {
      image: "images/list4.jpg",
      title: "10 Of The Best Places To Eat In Liverpool, England"
    }
  ];
  return (
    <div className="post">
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <div className="row list-blog-wrapper">
            <div className="col-lg-6">
              <BlogImage image={post.image} />
            </div>
            <div className="col-lg-6 list-blog">
              <BlogMeta title={post.title} />
              <p className="snippet">
                Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <button>continue reading </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
