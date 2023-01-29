import React from "react";
import { useInView } from "react-intersection-observer";
// import ShowContainer from './shared/ShowContainer'
import THRESHOLD from "../data/constants.js";

function Contact() {
  // const [inView, setInView] = useState(false)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: THRESHOLD,
  });

  return (
    <div id="contact" ref={ref}>
      <h1 className={inView ? "show delay-0" : "hidden hide-left"}>
        Get In Touch
      </h1>
      {/* <h2 className={inView ? "show delay-0" : "hidden hide-right"}>Touch</h2> */}
      {/* <h2 className={inView ? "show delay-3" : "hidden hide-left"}>
        <a
          href="mailto:giudelvecchio@gmail.com?subject=Let's Connect!&body=Shoot me an email and I will respond ASAP."
          target="_blank"
          rel="noopener noreferrer"
        >
          giudelvecchio@gmail.com
        </a>
      </h2> */}
      {/* Social Media Links */}
      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/giusseppe-del-vecchio/"
          target="_blank"
          rel="noopener noreferrer"
          className={inView ? "show delay-4" : "hidden hide-left"}
        >
          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/gdelv"
          target="_blank"
          rel="noopener noreferrer"
          className={inView ? "show delay-4" : "hidden hide-left"}
        >
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="mailto:giudelvecchio@gmail.com?subject=Let's Connect!&amp;body=Shoot me an email and I will respond ASAP."
          target="_blank"
          rel="noopener noreferrer"
          className={inView ? "show delay-4" : "hidden hide-left"}
        >
          <i class="far fa-envelope" aria-hidden="true"></i>
        </a>
        {/* <a href="tel:+15168643657" className={inView ? "show delay-3" : "hidden hide-left"}>
          <i class="fas fa-phone" aria-hidden="true"></i>
        </a> */}
      </div>
    </div>
  );
}

export default Contact;
