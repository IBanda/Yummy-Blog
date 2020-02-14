import React from "react";

export default function BottomNav() {
  return (
    <div className="bottomnav">
      <ul>
        <li>
          <a className="active" href="/#">
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
    </div>
  );
}
