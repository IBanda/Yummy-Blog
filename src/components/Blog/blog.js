import React from "react";
import Post from "./post";
import Author from "./author";
import GridBlog from "./gridblog";
import ListBlog from "./listblog";
import BlogSocial from "./blogsocial";
import PopularPost from "./popularpost";
export default function Blog() {
  return (
    <div className="container blog">
      <div className="row">
        <div className="col-lg-8">
          <Post />
          <GridBlog />
          <ListBlog />
        </div>
        <div className="col-lg-4">
          <Author />
          <BlogSocial />
          <PopularPost />
        </div>
      </div>
    </div>
  );
}
