import React from "react";
import { useInView } from "react-intersection-observer";
import THRESHOLD from '../data/constants.js'

export default function Intro() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });
  console.log(entry, "this be the entry");

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
        height="300"
        className={inView ? "show delay-0" : "hidden hide-right "}
        src="https://images.pexels.com/photos/3671194/pexels-photo-3671194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="dinosaur"
        srcset=""
      />
      <h2
        className={inView ? "show delay-4" : "hidden hide-right"}
      >{`(Not an actual picture of me)`}</h2>
    </div>
  );
}
