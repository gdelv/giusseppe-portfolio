import React, { useState } from 'react'
import { projects } from '../data';
import ShowContainer from './shared/ShowContainer';

function Projects() {
    const [inView, setInView] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [currentProj, setCurrentProj] = useState({})
    const isInView = (data) => {
        setInView(data)
        console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    }
    const openProject = (e) => {
        console.log(e.target.name);
        let foundProj = projects.find(proj => proj.name === e.target.name)
        setCurrentProj(foundProj)
        setShowDetail(true)
        //reverse projects entrance
        //fade in information for project
    }
    const closeProject = () => {
        console.log('clicked')
        // console.log(e.taget.name)
        setShowDetail(false)
    }
    return (
        showDetail ?
            <ShowContainer func={isInView}>
                <div>
                    <h2>{currentProj.name}</h2>
                    {/* <p className={inView ? "show" : "hidden hide-right"}>test</p> */}
                    <button onClick={closeProject} className='detail-btn'>Return</button>
                </div>
            </ShowContainer> :
            <ShowContainer func={isInView}>
                <h2 className={inView ? "show" : "hidden hide-right"}>Projects</h2>
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
            </ShowContainer>

    )
}

export default Projects
