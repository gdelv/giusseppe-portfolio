import React from "react";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "../data/constants.js";
import HEADSHOT from "../data/images/Gheadshot.jpeg";

export default function Intro() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });
  console.log(entry, "this be the entry");

  let style = {
    display: "block",
    margin: "2em auto",
    paddingTop: "2em",
    width: "50px",
    height: "50px",
  };
  return (
    <div id="intro" ref={ref}>
      <h2
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
      <div className="scroll-container">
        <lord-icon
          src="https://cdn.lordicon.com/rxufjlal.json"
          trigger="loop"
          delay="500"
          colors="primary:#f1faee"
          state="hover-2"
          style={style}
          class={inView ? "show delay-4" : "hidden hide-right "}
        ></lord-icon>
      </div>
        <p className={inView ? "show delay-4 " : " hidden hide-right"}>
          Scroll Down
        </p>
    </div>
  );
}
