import React, { useState } from 'react'
import { projects } from '../data';
import { useInView } from "react-intersection-observer";
import THRESHOLD from '../data/constants.js'
// import ShowContainer from './shared/ShowContainer';

function Projects() {
    const [showDetail, setShowDetail] = useState(false)
    const [currentProj, setCurrentProj] = useState({})
    const [fadeIn, setFadeIn] = useState(false)
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: THRESHOLD,
    });
    console.log(entry, "this be the entry");

    if (!fadeIn) {
        setFadeIn(true)
    }
    const openProject = (e) => {
        setFadeIn(false)
        console.log(e.target.name);
        let foundProj = projects.find(proj => proj.name === e.target.name)
        setCurrentProj(foundProj)
        setTimeout(() => {
            setShowDetail(true)
        }, 500);
        //reverse projects entrance
        //fade in information for project
    }
    const closeProject = () => {
        console.log('clicked')
        // console.log(e.taget.name)
        setCurrentProj({})
        setShowDetail(false)
    }
    return (
        showDetail ?
            //if inView and showDetail 
            <div>
                <div className='detail-title egg'>
                    <h2>{currentProj.name}</h2>
                    {/* <p className={inView ? "show" : "hidden hide-right"}>test</p> */}
                    <button onClick={closeProject} className='detail-btn'>Return</button>
                </div>
            </div> :
            //if inView and !showDetail
            <div id='projects' ref={ref}>
                <h2 className={inView ? "show" : "hidden hide-right"}>Projects</h2>
                {/* <h2 className={inView && currentProj.length === 0 ? "show" : "hidden hide-right"}>Projects</h2> */}
                <div className='projects-container'>
                    {projects.map((project, index) => {
                        let hideOption = index % 2 === 0 ? "hide-left" : "hide-right"
                        return (
                            <div className={inView ? `show project-card delay-${index + 1}` : `hidden ${hideOption}`}>
                                <p className='project-title'>
                                    {project.name}
                                    <button name={project.name} onClick={openProject} className='project-btn'>See More</button>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

    )
}

export default Projects
