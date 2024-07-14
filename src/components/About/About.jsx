import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faTerminal, faFileCode } from "@fortawesome/free-solid-svg-icons";
import ResumeFile from "../../assets/Resume_Aguilar.pdf";
import "./About.css";

const skills = [
  {
    key: "heading1",
    heading: "Front-end development", 
    icon: {...faCode},
    alt: "code-icon",
    skill: [
      {name: "HTML5", years: 2, rating: 5},
      {name: "CSS", years: 2, rating: 5},
      {name: "Tailwind", years: 1, rating: 4.5},
      {name: "Bootstrap", years: 1, rating: 4},
      {name: "JavaScript/TypeScript", years: 1, rating: 4.5},
      {name: "React", years: 1, rating: 4.5}
    ]
  },
  {
    key: "heading2",
    heading: "Database Management", 
    icon: {...faDatabase},
    alt: "database-icon",
    skill: [
      {name: "PostgreSQL", years: 1, rating: 4},
      {name: "MongoDB", years: 1, rating: 5},
    ]
  },
  {
    key: "heading3",
    heading: "Back-end Development", 
    icon: {...faFileCode},
    alt: "file-icon",
    skill: [
      {name: "Node", years: 1, rating: 3.5},
      {name: "Express", years: 1, rating: 4},
    ]
  },
  {
    key: "heading4",
    heading: "Other Programming Languages", 
    icon: {...faTerminal},
    alt: "terminal-icon",
    skill: [
      {name: "Python", years: 2, rating: 4},
      {name: "C#", years: 1, rating: 3},
      {name: "Java", years: 1, rating: 4},
    ]
  }
];

const tools = ["Git Version Control", "REST API", "Microsoft 365", "Google Suite", "Adobe Photoshop", "ASP.NET"];

export default function About() {

  return (
    <section id="about">
      <div>
        <h3>About Me</h3>
        <p>I am Patricia Marie Aguilar, a materials engineering graduate of University of the Philippines Diliman. I have been working as a Software Support Analyst but 
        I am currently looking for opportunities to become a Full-Stack Web Developer.
        </p>
      </div> 

      <div>
        <h3>Skills and Tools</h3>
        <div id="skills-container">
          {skills.map((entry) => (
            <div className="skill" key={entry.key}>
              <div className="heading">
                <FontAwesomeIcon icon={entry.icon} alt={entry.alt} />
                <h4>{entry.heading}</h4>
              </div>
              {entry.skill.map((item) => (
                <div className="item" key={item.name}>
                  <p>{item.name}</p>
                  <Rating 
                    value={item.rating} 
                    size="small" 
                    readOnly 
                    sx={{filter: "invert(0.5)"}} 
                    precision={0.5}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="skill">
        <h4 className="heading">Knowledgable in:</h4>
          <div id="tools-container">
            {tools.map((tool) => (
              <p className="tool" key={tool}>{tool}</p>
            ))}
          </div>
        </div>
      </div>
      <button>
        <a href={ResumeFile} download="Resume_Aguilar" target="_blank">View Resume</a>
      </button>
    </section>
  )
}
