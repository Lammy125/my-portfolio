import "./About.scss";
import myImage from "../../assets/Adeyemo_Peter-removebg-preview.png";

const About = () => {
  const aboutData = {
    title: "About me",
    paragraphs: [
      "Front-End Engineer with over 2 years of experience using ReactJS, NextJS Framework, Tailwind CSS & TypesScript in implementing designs, building scalable applications & optimizing applications for good user experience, co-operating with product designers & managers. I have a strong academic background in Mathematics with Computer Science, which I obtained from the University of Lagos in 2019.",
    ],
  };

  return (
    <section id="about">
      <div className="about">
        <div className="imgCon" data-aos="flip-left">
          <img src={myImage} alt="my image" className="image" />
        </div>
        <div className="content">
          <h2 data-aos="fade-down">{aboutData.title}</h2>
          <div data-aos="fade-right">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="textContent">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
