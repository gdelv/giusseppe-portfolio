import React from 'react'
import { useInView } from 'react-intersection-observer';

// export default function Test() {
//   return (
//     <div>Test</div>
//   )
// }

// import React from 'react';

export const Test = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .1,
  });

  console.log(entry, 'this be the entry')
  return (
    <div ref={ref}>
      <h2 className={inView ? 'show' : 'hidden hide-right'}>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};