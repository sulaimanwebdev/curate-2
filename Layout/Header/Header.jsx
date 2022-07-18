import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [header, setHeader] = useState(false);

  return (
    <div className="header">
      <img src='/Assets/logo.png' alt="" className="logo" />
      <div className={`right-header ${header ? "header-open" : ""}`}>
        <a
          onClick={() => setHeader(false)}
          href="/#works"
          className="nav-link lato"
        >
          How it works
        </a>
        <a
          onClick={() => setHeader(false)}
          href="/#analysis"
          className="nav-link lato"
        >
          Health Analysis
        </a>
        <a
          onClick={() => setHeader(false)}
          href="/#experts"
          className="nav-link lato"
        >
          Our Experts
        </a>
        <a
          onClick={() => setHeader(false)}
          href="/#contact"
          className="nav-link lato"
        >
          Contact
        </a>
        <img className="download-btn" src='/Assets/apple-btn.svg' alt="" />
      </div>
      <FontAwesomeIcon
        onClick={() =>
          setHeader((prev) => {
            return !prev;
          })
        }
        icon={header ? faXmark : faBars}
        className="mobile"
      />
      <div
        onClick={() => setHeader(false)}
        className={`overlay ${header ? "open-overlay" : ""}`}
      ></div>
    </div>
  );
}

export default Header;
