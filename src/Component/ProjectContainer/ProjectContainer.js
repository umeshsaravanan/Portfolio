import React from 'react'
// import ProjectImage from "../../Assets/pictures/SkillImage.jpg"
import HTMLCSSImage from "../../Assets/pictures/htmlcss.jpg"
import ReactjsImage from "../../Assets/pictures/Reactjs.png"
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const projects=[
        {
            img:ReactjsImage,
            title:"React js",
            desc:"Click here and see my React js Projects",
            link:"https://todo-list-853a5.web.app/"
        },
        {
            img:HTMLCSSImage,
            title:"Front End Web Pages",
            desc:"Click here see my Front End Web Pages",
            link:"https://umeshsaravanan.github.io/Revive-CSE/"
        },
    ]
  return (
   <Element className='projectContainer' id='projects'>
    <h1>Projects</h1>
    <p>Here are my projects</p>
    <div className='projectContainer__projects'>
        {
            projects.map((project,index)=>{
                return(
                    <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                );
            })
        }
    </div>
   </Element>
  )
}

export default ProjectContainer
