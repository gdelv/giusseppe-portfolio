import React from 'react'
import { useInView } from "react-intersection-observer";
// import ShowContainer from './shared/ShowContainer'
import THRESHOLD from '../data/constants.js'


function Contact() {
    // const [inView, setInView] = useState(false)
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: THRESHOLD,
      });
    return (
        <div id='contact' ref={ref}>
            <h2 className={inView ? "show delay-0" : "hidden hide-left"}>Get In Touch</h2>
            {/* <h2 className={inView ? "show delay-0" : "hidden hide-right"}>Touch</h2> */}
            <h2 className={inView ? "show delay-3" : "hidden hide-left"}>giudelvecchio@gmail.com</h2>
            {/* Social Media Links */}
        </div>
    )
}

export default Contact
