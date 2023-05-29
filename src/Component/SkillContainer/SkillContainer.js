import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import SkillImage from "../../Assets/pictures/SkillImage.jpg"
import { LinearProgress} from '@mui/material'


const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__skillheader'>
        <h1>SKILLS</h1>
        </div>
        <div className='skillContainer__image'>
            <img src={SkillImage} alt="" height={300} />
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant='determinate' value={100}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant='determinate' value={100}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JS</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>React Js</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Java Swing</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                <LinearProgress variant='determinate' value={65}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
