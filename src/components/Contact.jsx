import React from "react";
import { useInView } from "react-intersection-observer";
// import ShowContainer from './shared/ShowContainer'
import THRESHOLD from "../data/constants.js";

function Contact() {
  // const [inView, setInView] = useState(false)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });
  console.log(entry, "this be the entry");

  return (
    <div id="contact" ref={ref}>
      <h2 className={inView ? "show delay-0" : "hidden hide-left"}>
        Get In Touch
      </h2>
      {/* <h2 className={inView ? "show delay-0" : "hidden hide-right"}>Touch</h2> */}
      <h2 className={inView ? "show delay-3" : "hidden hide-left"}>
        <a
          href="mailto:giudelvecchio@gmail.com?subject=Let's Connect!&body=Shoot me an email and I will respond ASAP."
          target="_blank"
          rel="noopener noreferrer"
        >
          giudelvecchio@gmail.com
        </a>
      </h2>
      {/* Social Media Links */}
    </div>
  );
}

export default Contact;
