import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Header = ({
  name,
  title,
  photoPath,
  linkedinProfileName,
  githubProfileName,
  emailAddress
}) => {

   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);

  return (
    <section id="home">
      <header>
        <div className="container header__container" data-aos="zoom-in">
          <h5>Hi there 👋 I'm</h5>
          <h1>{name}</h1>
          <h5>{title}</h5>
          <CTA emailAddress={emailAddress} />
          <HeaderSocials
            linkedinProfileName={linkedinProfileName}
            githubProfileName={githubProfileName}
            emailAddress={emailAddress}
          />

          <div className="me">
            <img src={photoPath} alt={`${name}`} />
          </div>

          <a href="#footer" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
