import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import Scrollspy from "react-scrollspy";

const Nav = () => {

  return (
    <Scrollspy
      className="nav"
      items={["home","about", "skills", "showcase", "contact"]}
      currentClassName="isCurrent"
    >
        <a
          href="#home"
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
        >
          <BiBook />
        </a>
        <a
          href="#showcase"
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
        >
          <BiMessageSquareDetail />
        </a>
     
    </Scrollspy>
  );
};

export default Nav;
