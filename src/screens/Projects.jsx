import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "./../assets/projects.json";

export default function Projects() {

  return (
    <>
      <div id="paper-overlay"></div>
      <section id="all-projects">
        <div id="heading">
          <h2>Projects</h2>
          <Link to="/"><button>Go back</button></Link>
        </div>
        <div id="projects-container">
          {projects.map((project) => (
            <div 
              className="project" 
              key={project.name}
              style={{fontSize: "0.8em"}}
            >
              <img src={`/${project.name}.png`} />
              <h5>{project.name}</h5>
              <div className="stack">
                {project.tech.map((stack) => (
                  <p 
                    key={stack} 
                    className="tech" 
                  >{stack}</p>
                ))}
              </div>
              <div id="preview-links">
              <a href={project.repo} target="_blank">
                <FontAwesomeIcon icon={faGithub} id="visit-icon" />
              </a>
              <a href={project.link} target="_blank">
                Visit Site <FontAwesomeIcon icon={faArrowRight} id="visit-icon" />
              </a>
            </div>
            </div>
            ))}
        </div>
      </section>
    </>
  )
}
