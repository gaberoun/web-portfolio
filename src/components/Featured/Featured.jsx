import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Featured.css";
import projects from "../../assets/projects.json";


export default function Featured() {
  const [preview, setPreview] = useState({...projects[0]});

  const previewProject = (selected) => {
    const filtered = projects.filter((project) => project.name === selected);
    setPreview({...filtered[0]});
  }

  const projectSection = (          
    <div className="section">
      {projects.slice(0,6).map((project) => (
        <div 
          className="featured" 
          onClick={() => previewProject(project.name)}
          key={project.name}
        >
          <img src={`/${project.name}.png`} alt={`${project.name} image`} />
          <h5>{project.name}</h5>
          <div className="stack">
            {project.tech.map((stack) => (
              <p key={stack} className="tech">{stack}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="featured">
      <div id="heading">
        <h3>Featured Projects</h3>
        <Link to="/projects"><button>View All</button></Link>
      </div>
      <div className="scroller">
        <div id="featured-container" className="inner-scroller">
          {projectSection}
          {projectSection}
        </div>
      </div>
      
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={preview.name}
          timeout={1000}
          classNames="fade"
        >
          <div id="preview-container">
            <div id="preview">
              <img src={`/${preview.name}.png`} />
              <div>
                <h5>{preview.name}</h5>
                <p>{preview.description}</p>
                <div className="stack">
                  {preview.tech.map((stack) => (
                    <p key={stack} className="tech">{stack}</p>
                  ))}
                </div>
              </div>
            </div>
            <div id="preview-links">
              <a href={preview.repo} target="_blank">
                <FontAwesomeIcon icon={faGithub} id="visit-icon" />
              </a>
              <a href={preview.link} target="_blank">
                Visit Site <FontAwesomeIcon icon={faArrowRight} id="visit-icon" />
              </a>
            </div>
         </div>
        </CSSTransition>
      </TransitionGroup>
    </section>
  )
}
