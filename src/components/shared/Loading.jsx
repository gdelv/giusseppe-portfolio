import React from 'react'
import eggImg from '../../data/images/egg.png'
import eggBreakImg from '../../data/images/eggcrack.png'
import dinoImg from '../../data/images/dinosaur.png'
import { useInView } from "react-intersection-observer";

export default function Loading() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.9,
      });
      console.log(entry, "this be the entry");
      setTimeout(() => {
        let e = document.getElementById("intro");
        // This ends the block to the window 
        // bottom and also aligns the view to the center 
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
      }, 6000);
      
  return (
    <div ref={ref} className='loading-container'>
        <img
        width="200"
        height="200"
        className="egg egg-img"
        src={eggImg}
        alt="dinosaur"
        srcset=""
      />
        <img
        width="200"
        height="200"
        className="egg eggbreak-img"
        src={eggBreakImg}
        alt="dinosaur"
        srcset=""
      />
        <img
        width="200"
        height="200"
        className="egg dinosaur-img"
        src={dinoImg}
        alt="dinosaur"
        srcset=""
      />
      <h2 className={ inView ? 'welcome-banner': ""}>Welcome!</h2>
    </div>
  )
}
