import React from "react";
import Slider from "./slider";
import FooterSocial from "../footer/footersocial";
import Logo from "../Header/logo";
import BottomNav from "../Header/bottomnav";
export default function Footer() {
  return (
    <>
      <Slider />;
      <FooterSocial />
      <Logo />
      <BottomNav />
    </>
  );
}
