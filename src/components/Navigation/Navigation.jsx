import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useRef } from "react";
import Scrollspy from "react-scrollspy";

const Nav = ({ homeRef, aboutRef, skillsRef, showCaseRef }) => {

  const [activeNav, setActiveNav] = useState("#");

  // const activeSection = useScrollSpy({
  //   sectionElementRefs: [homeRef, aboutRef, skillsRef, showCaseRef],
  //   offsetPx: -80,
  // });
  // console.log(activeSection);

  return (
    <Scrollspy
      className="scrollspy"
      items={["about", "skills", "showcase", "contact"]}
      currentClassName="isCurrent"
    >
      
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
          // className={activeSection == 0 ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          // className={activeSection == 1 ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
          // className={activeSection == 2 ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#showcase"
          onClick={() => setActiveNav("#showcase")}
          className={activeNav === "#showcase" ? "active" : ""}
          // className={activeSection == 3 ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
     
    </Scrollspy>
  );
};

export default Nav;
