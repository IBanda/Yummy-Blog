import React from "react";
import { BlogDetails } from "../sharedcomponents";
export default function GridBlog() {
  const posts = [
    {
      image: "/images/blog-item1.jpg",
      title: "Where To Get The Best Sunday Roast In The Cotswolds"
    },
    {
      image: "/images/blog-item2.jpg",
      title: "The Top Breakfast And Brunch Spots In Hove, Brighton"
    },
    {
      image: "/images/blog-item3.jpg",
      title: "The 10 Best Pubs In The Lake District, Cumbria"
    },
    {
      image: "/images/blog-item4.jpg",
      title: "The 10 Best Brunch Spots In Newcastle, England"
    }
  ];
  return (
    <div className="row mb-5">
      {posts.map((post, index) => (
        <div key={index} className="post grid-post col-lg-6">
          <BlogDetails image={post.image} title={post.title} />
        </div>
      ))}
    </div>
  );
}
