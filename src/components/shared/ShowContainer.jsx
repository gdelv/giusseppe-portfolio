import React from 'react'
import { useInView } from 'react-intersection-observer';


function ShowContainer(props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .1,
      });
    // if (!inView) {
      props.func(inView)
    // }
      console.log(inView, 'this be the entry')
      return (
        <div ref={ref}>
          {props.children}
        </div>
      );
}

export default ShowContainer
