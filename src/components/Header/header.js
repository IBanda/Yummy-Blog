import React from "react";
import TopNav from "./topnav";
import Logo from "./logo";
import BottomNav from "./bottomnav";

export default function Header() {
  return (
    <div className="">
      <TopNav />
      <Logo />
      <BottomNav />
    </div>
  );
}
