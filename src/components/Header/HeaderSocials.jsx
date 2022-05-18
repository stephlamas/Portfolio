import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

const HeaderSocials = ({
  linkedinProfileName,
  githubProfileName,
  emailAddress,
}) => {
  const linkedinUrlFor = (p) => `https://www.linkedin.com/in/${p}`;
  const githubUrlFor = (p) => `https://github.com/${p}`;

  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
