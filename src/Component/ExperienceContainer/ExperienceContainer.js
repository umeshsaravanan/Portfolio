import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
  <Element className='experienceContainer' id='exp'>
    <h1>Experience</h1>
    <div className='experienceContainer__info'>
        <ExperienceBox number="---" title="Clients"/>
        <ExperienceBox number="+2" title="Projects" style={{backgroundColor:"#235790"}}/>
        <ExperienceBox number="---" title="Teaching"/>
        <ExperienceBox number="---" title="Students"/>
    </div>
  </Element>
  )
}

export default ExperienceContainer
