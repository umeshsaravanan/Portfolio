import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import Lottie from 'lottie-react'
import animationData from '../../Assets/animation_llbod5un.json'
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';


const SkillContainer = () => {
  const technologies = [
    { icon: <FaJava style={{ color: '#007396' }} /> },
    { icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
    { icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
    { icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
    { icon: <SiMysql style={{ color: '#00758F' }} /> },
    { icon: <FaReact style={{ color: '#61DBFB' }} /> },
    { icon: <SiExpress style={{ color: 'green' }} /> },
    { icon: <FaNodeJs style={{ color: '#339933' }} /> },
    { icon: <SiMongodb style={{ color: '#47A248' }} /> },
  ];
  return (
    <Element className='skillContainer' id='skills'>
      <div className='skillContainer__image'>
        <Lottie animationData={animationData} />
      </div>
      <div className='skillContainer__text'>
        <h2 className='skillHeader'>SKILLSET</h2>
        <div className="skills_logo">
          {technologies.map((tech, index) => (
            <div key={tech.name} style={{ animationDelay: `${index * 0.2}s`, textAlign: 'center', flex: '1' }} className='movement'>
              <div style={{ fontSize: '75px' }}>{tech.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};


export default SkillContainer
