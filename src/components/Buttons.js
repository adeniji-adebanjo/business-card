import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
  return (
    <>
      <button className="email-btn">
        <a href="mailto:aeben.adebanjo@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </button>
      <button className="linkedin-btn">
        <a href="https://linkedin.com/in/adebanjo-adeniji">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </button>
    </>
  );
}
