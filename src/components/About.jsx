import React, { useState } from 'react'
import ShowContainer from './shared/ShowContainer'

function About() {
    const [inView, setInView] = useState(false)
    const isInView = (data) => {
        setInView(data)
        console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      }
    return (
        <ShowContainer func={isInView}>
            <h2 className={inView ? "show delay-0" : "hidden hide-right"}>About Me</h2>
            <h2 className={inView ? "show delay-2" : "hidden hide-left"}>I love Learning,</h2>
            {/* <h2 className={inView ? "show delay-4" : "hidden hide-left"}>Learning</h2> */}
            <h2 className={inView ? "show delay-3" : "hidden hide-left"}>Creating</h2>
            <h2 className={inView ? "show delay-4" : "hidden hide-left"}>& Finding Solutions</h2>
        </ShowContainer>
    )
}

export default About
