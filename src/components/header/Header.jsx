import "./Header.scss";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/Peter's CV.pdf";

const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const activeNav = location.hash;
  console.log(activeNav === "#project" ? "active" : "");
  console.log({ activeNav }, activeNav);
  const handleItemClick = () => {
    setClick(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <h1>Portfolio.</h1>
      <ul className="list">
        <li>
          <a
            href="#"
            onClick={handleItemClick}
            className={activeNav === "" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={handleItemClick}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleItemClick}
            className={activeNav === "#skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={handleItemClick}
            className={activeNav === "#project" ? "active" : ""}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleItemClick}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>

        <Link to={CV} target="_blank">
          <button className="btn">Download CV</button>
        </Link>
      </ul>
      <div className="menuBar" onClick={handleClick}>
        {click ? <FaTimes size={23} /> : <FaBars size={23} />}
      </div>
    </div>
  );
};

export default Header;
