import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TopNav() {
  return (
    <div className="topnav">
      <div className="row">
        <div className="col-lg-5 col-5 top-social">
          <ul>
            <li>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "skype"]} />
            </li>
            <li className="mr-0">
              <FontAwesomeIcon icon={["fab", "dribbble"]} />
            </li>
          </ul>
        </div>
        <div className="col-lg-7 col-7 account-section">
          <a href="/#">Sing in</a> | <a href="/#">Sing up</a>
          <FontAwesomeIcon icon={"search"} />
        </div>
      </div>
    </div>
  );
}
