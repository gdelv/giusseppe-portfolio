import React, { useState } from 'react'
import ShowContainer from './shared/ShowContainer'

function Contact() {
    const [inView, setInView] = useState(false)
    const isInView = (data) => {
        setInView(data)
        console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      }
    return (
        <ShowContainer func={isInView}>
            <h2 className={inView ? "show delay-0" : "hidden hide-left"}>Get In Touch</h2>
            {/* <h2 className={inView ? "show delay-0" : "hidden hide-right"}>Touch</h2> */}
            <h2 className={inView ? "show delay-1" : "hidden hide-left"}>giudelvecchio@gmail.com</h2>
            {/* Social Media Links */}
        </ShowContainer>
    )
}

export default Contact
