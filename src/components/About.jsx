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
            <h2 className={inView ? "show" : "hidden hide-right"}>About Me</h2>
            <h2 className={inView ? "show" : "hidden hide-left"}>I love Technology</h2>
        </ShowContainer>
    )
}

export default About
