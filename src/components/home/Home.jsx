import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.scss";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import CV from "../../assets/Peter's CV.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Software Engineer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/adeyemo.olamide3", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/peter-adeyemo", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/lammy125", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/Lammy125", "_blank");
  };

  return (
    <section id="#">
      <div className="home">
        <div className="container">
          <div className="me">
            <h3>Hi, It&apos;s Me</h3>
            <h1>Peter Adeyemo</h1>
            <h3>
              And I&apos;m a <span ref={textRef} className="title"></span>
            </h3>
          </div>
          <div className="iconDiv">
            <div className="icon">
              <FaFacebookF size={18} onClick={handleFacebookClick} />
            </div>
            <div className="icon">
              <FaInstagram size={18} onClick={handleInstagramClick} />
            </div>
            <div className="icon">
              <FaLinkedinIn size={18} onClick={handleLinkedinClick} />
            </div>
            <div className="icon">
              <FaGithub size={18} onClick={handleGithubClick} />
            </div>
          </div>
          <div className="btnCon">
            <Link to={CV} target="_blank">
              <button className="btn">Download CV</button>
            </Link>
            <Link to="#contact">
              <button className="btn">Let talk</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
