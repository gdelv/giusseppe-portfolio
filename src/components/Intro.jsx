import React from "react";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "../data/constants.js";
import HEADSHOT from "../data/images/Gheadshot.jpeg";

export default function Intro(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });
  // console.log(entry, "this be the entry");

  let style = {
    display: "block",
    margin: "2em auto",
    paddingTop: "2em",
    width: "50px",
    height: "50px",
    transform: "rotate(180deg)"
  };
  const scrollToAbout = () => {
    let e = document.getElementById("about");
        // This ends the block to the window 
        // bottom and also aligns the view to the center 
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
  }
  return (
    <div id="intro" ref={ref}>
      <h2 ref={props.ref}
        className={inView ? "show delay-0" : "hidden hide-left"}
      >{`Giusseppe Del Vecchio`}</h2>
      <h2
        className={inView ? "show delay-0" : "hidden hide-right"}
      >{`Software Engineer`}</h2>
      <img
        width="200"
        height="200"
        className={inView ? "show delay-0" : "hidden hide-right "}
        src={HEADSHOT}
        alt="dinosaur"
        srcset=""
      />
      <div className="scroll-container" onClick={scrollToAbout}>
        <p className={inView ? "scroll-title show delay-4 " : " hidden hide-right"}>
          Click to learn more about me
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
