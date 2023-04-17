import React from 'react'
import { useInView } from "react-intersection-observer";
// import ShowContainer from './shared/ShowContainer'
import THRESHOLD from '../data/constants.js'


function About() {
    // const [inView, setInView] = useState(false)
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
  }
  const scrollToProjects = () => {
    let e = document.getElementById("projects");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });
  }
  // console.log(entry, "this be the entry");
    return (
        <div id="about" ref={ref}>
          {inView ?<nav className='navbar'>
        {/* <a href="#intro">Intro</a> */}
        <a href="#about" className='grow' style={{textDecoration:"underline"}}>About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav> :null}
          
            <h1 className={inView ? "show delay-0" : "hidden hide-right"}>About Me</h1>
            <h2 className={inView ? "show delay-1" : "hidden hide-left"}>My happy places are:</h2>
            <h2 className={inView ? "show delay-2" : "hidden hide-left"}>#learning</h2>
            <h2 className={inView ? "show delay-3" : "hidden hide-left"}>#creating</h2>
            <h2 className={inView ? "show delay-4" : "hidden hide-left"}>#problem-solving</h2>
            <div className="scroll-container" onClick={scrollToProjects}>
        <p className={inView ? "scroll-title show delay-4 " : " hidden hide-right"}>
          Click to view my recent projects
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
    )
}

export default About
