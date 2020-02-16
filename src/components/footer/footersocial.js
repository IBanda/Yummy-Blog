import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSocial() {
  return (
    <div className="footer-social">
      <ul>
        <li>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          <span>facebook</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <span>twitter</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
          <span>google+</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span>linkedin</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <span>instagram</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
          <span>vimeo</span>
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "youtube"]} />
          <span>youtube</span>
        </li>
      </ul>
    </div>
  );
}
