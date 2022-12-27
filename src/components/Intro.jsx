import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  // console.log(entry, 'this be the entry')

  return (
    <div ref={ref}>
      <h2
        className={inView ? "show" : "hidden hide-left"}
      >{`Giusseppe Del Vecchio`}</h2>
      <h2
        className={inView ? "show" : "hidden hide-right"}
      >{`Portfolio`}</h2>
      <img width="200" height="400" className={inView ? "show" : "hidden hide-left "}src="https://images.pexels.com/photos/3671194/pexels-photo-3671194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="dinosaur" srcset="" />
      <h2
        className={inView ? "show" : "hidden hide-left"}
      >{`Web Developer`}</h2>
    </div>
  );
}
