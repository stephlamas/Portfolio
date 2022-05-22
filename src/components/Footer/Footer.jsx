import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

const Footer = ({ linkedinProfileName, githubProfileName, emailAddress }) => {
  const linkedinUrlFor = (p) => `https://www.linkedin.com/in/${p}`;
  const githubUrlFor = (p) => `https://github.com/${p}`;

  return (
    <footer id="footer">
      <h2 className="footer__logo">
        My portfolio
      </h2>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#showcase">Showcase</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={linkedinUrlFor(linkedinProfileName)}>
          <BsLinkedin />
        </a>
        <a href={githubUrlFor(githubProfileName)}>
          <FaGithub />
        </a>
        <a href={"mailto:" + emailAddress}>
          <BiMessageSquareDetail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
