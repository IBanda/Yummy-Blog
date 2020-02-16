import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcons } from "../sharedcomponents";
export default function TopNav() {
  return (
    <section className="topnav" id="top-nav">
      <div className="row">
        <div className="col-lg-5 col-5 top-social">
          <SocialIcons />
        </div>
        <div className="col-lg-7 col-7 account-section">
          <a href="/#">Sing in</a> | <a href="/#">Sing up</a>
          <FontAwesomeIcon icon={"search"} />
        </div>
      </div>
    </section>
  );
}
