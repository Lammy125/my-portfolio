import "./Project.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import adviceGenerator from "../../assets/advice generator.jpg";
import deliverX from "../../assets/deliver x.jpg";
import pricingComponent from "../../assets/pricing component with toggle button.jpg";
import interactiveCard from "../../assets/interactive card.png";
import countryRestApi from "../../assets/country api.png";
import cardSection from "../../assets/card section.png";
import socialMediaDashboard from "../../assets/social media dashboard.jpeg";
import sliderImage from "../../assets/slider images.jpeg";
import countdownTimer from "../../assets/countdown timer.png";

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
        projectTitle: "Pricing-component-with-toggle",
        text: "The 'Pricing Component with Toggle' is a dynamic and user-friendly interface designed to showcase different pricing plans with the added functionality of a toggle switch.",
        image: pricingComponent,
      },
      {
        projectTitle: "social-media-dashboard",
        text: "The 'Social Media Dashboard with Light/Dark Mode' is a versatile and visually appealing user interface designed to enhance the user experience of managing and monitoring social media activities.",
        image: socialMediaDashboard,
      },
      {
        projectTitle: "testimonial-sliders",
        text: "The 'Testimonial Sliders' component is a dynamic and interactive feature commonly integrated into websites to showcase users testimonials in a visually appealing manner.",
        image: sliderImage,
      },
      {
        projectTitle: "countdown-timer",
        text: "The 'Countdown Timer' is a digital clock that counts down from a specified time interval, creating a visual representation of the time remaining until a specific event, deadline, or activity.",
        image: countdownTimer,
      },
    ],
  };

  const links = [
    "https://lammy-advice-generator.netlify.app/",
    "https://lammy-deliver-x.netlify.app/",
    "https://interactive-card-rating-review.netlify.app/",
    "https://four-card-component-section.netlify.app/",
    "https://lammy-country-api.netlify.app/",
    "https://pricing-component-toggle-button.netlify.app/",
    "https://social-media-dashboard-light-darkmode.netlify.app/",
    "https://testimonial-sliders.netlify.app/",
    "https://lammy-countdown-timer.netlify.app/",
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project">
      <div className="project">
        <h2 data-aos="fade-right">{projectData.title}</h2>
        <div className="projectCon">
          {projectData.project.map((project, index) => (
            <div className="projectBox" key={index} data-aos="flip-left">
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
