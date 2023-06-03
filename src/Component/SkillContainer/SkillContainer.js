import React from 'react'
import "./SkillContainer.css"
import { Element } from 'react-scroll'
import SkillImage from "../../Assets/pictures/SkillImage.jpg"
import { CircularProgress} from '@mui/material'
import  HorizontalScroll  from 'react-scroll-horizontal'


const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__skillheader'>
        <h1>SKILLS</h1>
        </div>
        <div className='slillContainer__body'>
        <div className='skillContainer__image'>
            <img src={SkillImage} alt="" height={300} />
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='slider'>
            <HorizontalScroll>
                <div className='skillContainer__slider skillContainer__slider1'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={80}/>
                    <h5>C</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider2'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={85}/>
                    <h5>C++</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider3'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={75}/>
                    <h5>Java</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider4'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={60}/>
                    <h5>Python</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider5'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={65}/>
                    <h5>Java Swing</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider6'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={95}/>
                    <h5>HTML</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider7'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={90}/>
                    <h5>CSS</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider8'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={80}/>
                    <h5>JS</h5>
                </div>
                <div className='skillContainer__slider skillContainer__slider9'>
                    <CircularProgress style={{width:"100px"}} variant='determinate' value={70}/>
                    <h5>React Js</h5>
                </div>
            </HorizontalScroll>
            </div>
        </div>
        </div>
    </Element>
  )
}

export default SkillContainer
