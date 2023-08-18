import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const TopContent = () => {
  
  const [text] = useTypewriter({
    words: ['UI/UX Designer','Programmer','Creative Designer'],
    loop :{},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (

    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Umesh S</h1>
            <h3 style={{fontSize:'30px'}}>I'm a{' '}
              <span style={{fontSize:'30px',fontWeight:'bold'}}>{text}</span>
              <span style={{color: '#235790'}}><Cursor/></span>
            </h3>
            <a href='https://drive.google.com/file/d/153xFCB1v8jVqo8Mb3JP8kKXbLyrIQsY2/view?usp=drive_link'>
                <button className='topContent__downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500} offset={-80}>
                <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
