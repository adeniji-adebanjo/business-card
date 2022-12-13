import React from "react";
import { FaBeer, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

export default function Buttons() {
  return (
    <>
      <button className="email-btn">
        <a href="mailto:aeben.adebanjo@gmail.com">
          <span>
            <FaBeer />
          </span>
          Email
        </a>
      </button>
      <button className="linkedin-btn">
        <a href="https://linkedin.com/inadebanjo-adeniji">
          <span>
            <FaLinkedin />
          </span>
          LinkedIn
        </a>
      </button>
    </>
  );
}
