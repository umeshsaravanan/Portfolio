import React from 'react'
// import ProjectImage from "../../Assets/pictures/SkillImage.jpg"
import HTMLCSSImage from "../../Assets/pictures/htmlcss.jpg"
import JavaImage from "../../Assets/pictures/java.png"
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const projects=[
        {
            img:JavaImage,
            title:"Java",
            desc:"Click here and see my Java Projects",
            link:"https://drive.google.com/drive/folders/19kHLT9r887lHHqtaEsDrNUvk-tJr0gqd?usp=sharing"
        },
        {
            img:HTMLCSSImage,
            title:"Front End Web Pages",
            desc:"Click here see my Front End Web Pages",
            link:"https://drive.google.com/drive/folders/1czPZf4P4AW7AB8hpVp-GanOSMrmwH3e0?usp=sharing"
        },
        // {
        //     img:ProjectImage,
        //     title:"Skill",
        //     desc:"Hi this my projects.I  have leanred lot of in this fields",
        //     link:"www.google.com"
        // },
       
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
