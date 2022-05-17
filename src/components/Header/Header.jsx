import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials"

const Header = ({
  name,
  title,
  photoPath,
  linkedinProfileName,
  githubProfileName,
  emailAddress
}) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi there 👋 I'm</h5>
        <h1>{name}</h1>
        <h5>{title}</h5>
        <CTA />
        <HeaderSocials
          linkedinProfileName={linkedinProfileName}
          githubProfileName={githubProfileName}
          emailAddress={emailAddress}
        />

        <div className="me">
          <img src={photoPath} alt={`${name}`} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
