import "./NavBar.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  // console.log(location);

  const activeNav = location.hash;

  return (
    <nav className="navBar">
      <a href="#" className={activeNav === "" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#skills" className={activeNav === "#skills" ? "active" : ""}>
        <AiOutlineBook />
      </a>
      <a href="#project" className={activeNav === "#project" ? "active" : ""}>
        <AiOutlineProject />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default NavBar;
