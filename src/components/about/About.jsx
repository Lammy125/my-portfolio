import { useState } from "react";
import "./About.scss";
import myImage from "../../assets/Adeyemo_Peter-removebg-preview.png";

const About = () => {
  const aboutData = {
    title: "About me",
    paragraphs: [
      "Hello there!, I'm a passionate frontend developer, software engineer, and web developer with a keen eye for detail and a relentless drive for excellence. I possess a unique ability to keenly observe the intricacies of a project, enabling me to understand the requirements and goals thoroughly. By closely examining user interactions and behaviors, I strive to create intuitive and user-friendly interfaces that enhance the overall user experience.",
      "As a detail-oriented individual, I believe that even the smallest elements can significantly impact the quality of a project. I meticulously scrutinize code, design layouts, and functionalities to ensure precision and accuracy. My dedication to perfection empowers me to deliver projects with clean, efficient, and maintainable code.",
      "I thrive on perseverance and resilience, always seeking innovative solutions to overcome obstacles. Whether it's debugging a complex issue or refining a feature to meet the highest standards, I approach every challenge with determination and tenacity.",
      "My expertise lies in frontend development, where I bring life to creative designs and turn them into functional, responsive, and visually appealing websites and applications.",
      "In summary, I am an observant, detail-oriented, and resilient frontend developer who is committed to creating exceptional digital experiences. I am excited to contribute my skills and expertise to build innovative and impactful projects that leave a positive mark on the digital realm.",
      "Thank you for taking the time to get to know me. I look forward to collaborating on exciting projects and making a significant difference in the world of software development. Let's build something amazing together!",
    ],
  };

  // State to track whether the "Read more" button has been clicked
  const [showFullContent, setShowFullContent] = useState(false);

  // Number of paragraphs to show initially
  const initialParagraphsToShow = 2;
  const showAllParagraphs =
    aboutData.paragraphs.length <= initialParagraphsToShow || showFullContent;

  return (
    <section id="about">
      <div className="about">
        <div className="imgCon">
          <img src={myImage} alt="my image" className="image" />
        </div>
        <div className="content">
          <h2>{aboutData.title}</h2>
          {aboutData.paragraphs
            .slice(
              0,
              showAllParagraphs
                ? aboutData.paragraphs.length
                : initialParagraphsToShow
            )
            .map((paragraph, index) => (
              <p key={index} className="textContent">
                {paragraph}
              </p>
            ))}
          {/* Render the "Read more" button only if there are more paragraphs to show */}
          {aboutData.paragraphs.length > initialParagraphsToShow && (
            <div className="btnCon">
              <button
                className="btn"
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? "Show less" : "Read more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
