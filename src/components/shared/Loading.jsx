import React, {useState, useEffect} from 'react'
import THRESHOLD from '../../data/constants'
import { useInView } from "react-intersection-observer";

export default function Loading() {
  const [showImg, setShowImg] = useState(true)
  const [loadingHeight, setLoadingHeight] = useState(100)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: THRESHOLD,
      });
      // console.log(entry, "this be the entry");
      setTimeout(() => {
        setLoadingHeight(0)
      }, 3500);
      setTimeout(() => {
        let e = document.getElementById("intro");
        // This ends the block to the window 
        // bottom and also aligns the view to the center 
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
        setShowImg(false)
      }, 5000);
      useEffect(() => {
        for (let i = 100; i < -1; i--) {
          console.log(i);
          setLoadingHeight(i)
        }
      }, [])
      
  return (
      showImg ? 
    <div ref={ref} className='loading-container'>
        {/* <img
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
      />  */}
      <h2 className={ inView ? 'welcome-banner': ""} style={{height: `${loadingHeight}vh`}}>Welcome!</h2>
    </div>
    : null
  )
}
