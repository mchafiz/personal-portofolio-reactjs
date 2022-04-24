import { useState } from "react";
import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" && "active"}
        onClick={() => {
          setActiveNav("#home");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" && "active"}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" && "active"}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#service"
        className={activeNav === "#service" && "active"}
        onClick={() => {
          setActiveNav("#service");
        }}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        className={activeNav === "#contact" && "active"}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
