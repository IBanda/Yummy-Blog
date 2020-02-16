import React from "react";

export default function Categories() {
  return (
    <div className="container category-section">
      <div className="row">
        <div className="col-lg-4 col-md-4 cat-card">
          <img src="/images/food-category.jpg" alt="food" />
          <button>food</button>
        </div>
        <div className="col-lg-4 col-md-4 cat-card">
          <img src="/images/cooking-category.jpg" alt="cooking" />
          <button>cooking</button>
        </div>
        <div className="col-lg-4 col-md-4  cat-card">
          <img src="images/lifestyle-category.jpg" alt="life style" />
          <button>life style</button>
        </div>
      </div>
    </div>
  );
}
