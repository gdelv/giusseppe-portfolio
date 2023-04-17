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
  let style = {
    display: "block",
    margin: "2em auto",
    paddingTop: "2em",
    width: "50px",
    height: "50px",
    transform: "rotate(180deg)"
  };
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
  const scrollToContact = () => {
    let e = document.getElementById("contact");
        // This ends the block to the window 
        // bottom and also aligns the view to the center 
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
  }
  return showDetail ? (
    //if inView and showDetail
    <div className="detail-container" ref={ref}>
      <div className={inView ? "detail-title" : "hidden hide-right"}>
        <h1>{currentProj.name}</h1>
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
       {inView ?<nav className='navbar'>
        {/* <a href="#intro">Intro</a> */}
        <a href="#about" >About</a>
        <a href="#projects" className='grow' style={{textDecoration:"underline"}}>Projects</a>
        <a href="#contact">Contact</a>
    </nav> :null}
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
      <div className="scroll-container" onClick={scrollToContact}>
        <p className={inView ? "scroll-title show delay-4 " : " hidden hide-right"}>
          Click to view contact info
        </p>
        <lord-icon
          src="https://cdn.lordicon.com/rxufjlal.json"
          trigger="loop"
          delay="0"
          colors="primary:#A9CEF4"
          state="hover-1"
          style={style}
          class={inView ? "scroll-icon show delay-4" : "hidden hide-right "}
        ></lord-icon>
      </div>
    </div>
  );
}

export default Projects;
