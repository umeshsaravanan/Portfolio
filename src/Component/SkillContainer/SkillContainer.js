import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import SkillImage from "../../Assets/pictures/SkillImage.png"
import { LinearProgress } from '@mui/material'


const Skill = ({ title, value }) => {
    return (
      <div className='skillContainer__skillSet'>
        <h5>{title}</h5>
        <div className={`skillContainer__slider skillContainer__slider${value}`}>
          <LinearProgress variant='determinate' value={value} />
        </div>
      </div>
    );
  };
  
  const SkillContainer = () => {
    return (
      <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
          <img src={SkillImage} alt="" height={300} />
        </div>
        <div className='skillContainer__text'>
          <h2>SKILLSET</h2>
          <Skill title="C and C++" value={75} />
          <Skill title="Java" value={80} />
          <Skill title="HTML and CSS" value={90} />
          <Skill title="Js" value={60} />
          <Skill title="React js" value={50} />
          <Skill title="Java Frames" value={40} />
        </div>
      </Element>
    );
  };
  

export default SkillContainer
