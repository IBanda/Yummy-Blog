import React, { useState } from "react";
import { NavLinks } from "../sharedcomponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BottomNav() {
  const [menu, setMenu] = useState("mb-menu-wrapper");

  function menuToggle() {
    let status = "";
    if (menu.split(" ").includes("show")) {
      status = menu.split(" ")[0];
    } else {
      status = menu.concat(" show");
    }
    setMenu(status);
  }
  return (
    <>
      <div className="bottomnav">
        <NavLinks active="active" />
      </div>
      <div className="mobile-menu">
        <FontAwesomeIcon
          onClick={() => menuToggle()}
          className="burger"
          icon={"bars"}
        />
        <div className={menu}>
          <div className="mobile-links ">
            <FontAwesomeIcon
              onClick={() => menuToggle()}
              icon={["far", "times-circle"]}
            />
            <NavLinks active="active-mobile" />
          </div>
        </div>
      </div>
    </>
  );
}
