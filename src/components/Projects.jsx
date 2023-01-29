import React, { useState } from "react";
import { projects } from "../data";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "../data/constants.js";
// import ShowContainer from './shared/ShowContainer';

function Projects() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentProj, setCurrentProj] = useState({});
  const [fadeIn, setFadeIn] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });

  if (!fadeIn) {
    setFadeIn(true);
  }
  const openProject = (e) => {
    setFadeIn(false);
    console.log(e.target.name);
    let foundProj = projects.find((proj) => proj.name === e.target.name);
    setCurrentProj(foundProj);
    setTimeout(() => {
      setShowDetail(true);
    }, 100);
    //reverse projects entrance
    //fade in information for project
  };
  const closeProject = () => {
    console.log("clicked");
    // console.log(e.taget.name)
    setCurrentProj({});
    setShowDetail(false);
  };
  return showDetail ? (
    //if inView and showDetail
    <div className="detail-container" ref={ref}>
      <div className={inView ? "detail-title" : "hidden hide-right"}>
        <h3>{currentProj.name}</h3>
        <img
          src={currentProj.img}
          alt={currentProj.name}
          className="project-img"
        />
        <p className="detail-desc">{currentProj.description}</p>
        <div className="btn-container">
          <button onClick={closeProject} className="detail-btn">
            Return
          </button>
          <button className="detail-btn">
              <a href={currentProj.url} target="_blank" rel="noopener noreferrer">See It Live</a>
          </button>
        </div>
      </div>
    </div>
  ) : (
    //if inView and !showDetail
    <div id="projects" ref={ref}>
      <h1 className={inView ? "show" : "hidden hide-right"}>Recent Projects</h1>
      {/* <h2 className={inView && currentProj.length === 0 ? "show" : "hidden hide-right"}>Projects</h2> */}
      <div className="projects-container">
        {projects.map((project, index) => {
          let hideOption = index % 2 === 0 ? "hide-left" : "hide-right";
          return (
            <div
              className={
                inView
                  ? `show project-card delay-${index + 1}`
                  : `hidden ${hideOption}`
              }
            >
              <p className="project-title">
                {project.name}
                <button
                  name={project.name}
                  onClick={openProject}
                  className="project-btn"
                >
                  See More
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
