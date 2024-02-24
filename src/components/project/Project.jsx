import "./Project.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import adviceGenerator from "../../assets/advice generator.jpg";
import deliverX from "../../assets/deliver x.jpg";
import googleSearch from "../../assets/google search.jpg";
import interactiveCard from "../../assets/interactive card.png";
import countryRestApi from "../../assets/country api.png";
import cardSection from "../../assets/card section.png";

const Project = () => {
  const projectData = {
    title: "Project",
    project: [
      {
        projectTitle: "advice-generator",
        text: "Introducing the 'Advice Generator App' – an ideal project that allows users to generates random quotes of insightful advice",
        image: adviceGenerator,
      },
      {
        projectTitle: "deliver-x",
        text: "'Deliver-X' is a cutting-edge delivery service that promises efficiency and convenience.",
        image: deliverX,
      },
      {
        projectTitle: "interactive-card-rating-review",
        text: "'Interactive Card Rating Review' is an innovative platform designed to allow users to provide ratings and reviews effortlessly.",
        image: interactiveCard,
      },
      {
        projectTitle: "four-card-component-section",
        text: "The 'Four Card Component Section' is a versatile and visually engaging design, commonly used in web development and user interfaces.",
        image: cardSection,
      },
      {
        projectTitle: "country-rest-api",
        text: "The 'Country REST API' is a valuable resource that allows users to access a range of data, including details about a country's geography, population, currency, time zone, and more.",
        image: countryRestApi,
      },
      {
        projectTitle: "google-search",
        text: "Google Search is the world's most widely used search engine, developed by Google Inc. It serves as a gateway to an immense repository of information available on the internet.",
        image: googleSearch,
      },
    ],
  };

  const links = [
    "https://lammy-advice-generator.netlify.app/",
    "https://lammy-deliver-x.netlify.app/",
    "https://interactive-card-rating-review.netlify.app/",
    "https://four-card-component-section.netlify.app/",
    "https://lammy-country-api.netlify.app/",
    "https://google-search-messi.netlify.app/",
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project">
      <div className="project">
        <h2>{projectData.title}</h2>
        <div className="projectCon">
          {projectData.project.map((project, index) => (
            <div className="projectBox" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="projectContent">
                <h4>{project.projectTitle}</h4>
                <p>{project.text}</p>
                <div
                  className="linkCon"
                  onClick={() => handleClick(links[index])}
                >
                  <RiExternalLinkFill style={{ color: "#013a51" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
