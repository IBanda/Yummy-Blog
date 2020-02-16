import React from "react";

import { BlogDetails } from "../sharedcomponents";
export default function Post() {
  const info = {
    image: "/images/big-post.jpg",
    title: `Boil The Kettle And Make A Cup Of Tea Folks, This Is Going To Be A Big
    One!`
  };
  return (
    <div className="post">
      <BlogDetails image={info.image} title={info.title} />
      <p className="snippet">
        Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodoconsequat.
      </p>
      <button>continue reading </button>
    </div>
  );
}
