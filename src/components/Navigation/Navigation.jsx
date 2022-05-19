import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useRef } from "react";
// import useScrollSpy from "react-use-scrollspy";

const Nav = ({ emailAddress }) => {

  const [activeNav, setActiveNav] = useState("#");

  // const sectionRefs = [
  //   useRef(null), 
  //   useRef(null), 
  //   useRef(null)
  // ];

  // const activeSection = useScrollSpy({
  //   sectionElementRefs: sectionRefs,
  //   offsetPx: -80,
  // });


  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
 
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
   
      >
        <BiBook />
      </a>
      <a
        href="#showcase"
        onClick={() => setActiveNav("#showcase")}
        className={activeNav === "#showcase" ? "active" : ""}
  
      >
        <RiServiceLine />
      </a>
      <a
        href={"mailto:" + emailAddress}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
