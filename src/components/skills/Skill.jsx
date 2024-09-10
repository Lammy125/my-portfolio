import "./Skill.scss";
import javascriptImage from "../../assets/Javascript.png";
import reactImage from "../../assets/React.png";
import reduxImage from "../../assets/Redux.png";
import chakraUiImage from "../../assets/Chakra UI.png";
import muiImage from "../../assets/Mui.png";
import figmaImage from "../../assets/Figma.png";
import viteImage from "../../assets/Vite.png";
import typeScriptImage from "../../assets/Typescript.png";
import tailwindImage from "../../assets/Tailwind.png";
import gitImage from "../../assets/Git.png";
import adobeXDImage from "../../assets/adobe-xd.png";
import htmlImage from "../../assets/Html.png";
import cssImage from "../../assets/Css.png";
import bootstrapImage from "../../assets/Bootstrap.png";
import sassImage from "../../assets/Sass.png";
import nextImage from "../../assets/Next.png";

const Skill = () => {
  const skillData = {
    title: "My Skills",
    skill: [
      { name: "Javascript", image: javascriptImage },
      { name: "React", image: reactImage },
      { name: "Next JS", image: nextImage },
      // { name: "Redux", image: reduxImage },
      { name: "Chakra UI", image: chakraUiImage },
      { name: "Material UI", image: muiImage },
      { name: "Html5", image: htmlImage },
      { name: "Css3", image: cssImage },
      { name: "Tailwind", image: tailwindImage },
      { name: "Bootstrap", image: bootstrapImage },
      { name: "Sass", image: sassImage },
      { name: "Figma", image: figmaImage },
      { name: "Git", image: gitImage },
      { name: "Adobe XD", image: adobeXDImage },
      { name: "Vite", image: viteImage },
      { name: "TypeScript", image: typeScriptImage },
    ],
  };

  return (
    <section id="skills">
      <div className="skills">
        <h2 data-aos="fade-right">{skillData.title}</h2>
        <div className="skillCon">
          <div className="skillContainer">
            {skillData.skill.map((skill, index) => (
              <div className="skillData" key={index} data-aos="zoom-in">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skillImage"
                />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
