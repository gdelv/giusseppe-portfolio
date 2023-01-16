import React from 'react'
import { useInView } from "react-intersection-observer";
// import ShowContainer from './shared/ShowContainer'
import THRESHOLD from '../data/constants.js'


function About() {
    // const [inView, setInView] = useState(false)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });
  console.log(entry, "this be the entry");
    return (
        <div id="about" ref={ref}>
            <h2 className={inView ? "show delay-0" : "hidden hide-right"}>About Me</h2>
            <h2 className={inView ? "show delay-2" : "hidden hide-left"}>I love Learning,</h2>
            {/* <h2 className={inView ? "show delay-4" : "hidden hide-left"}>Learning</h2> */}
            <h2 className={inView ? "show delay-3" : "hidden hide-left"}>Creating</h2>
            <h2 className={inView ? "show delay-4" : "hidden hide-left"}>& Finding Solutions</h2>
        </div>
    )
}

export default About
