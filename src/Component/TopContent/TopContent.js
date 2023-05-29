import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Umesh S</h1>
            <p>Front End Developer</p>
            <a href='https://drive.google.com/file/d/1sdKGKSgxt1-6Iogm4nwtOjjTmoviJAY0/view?usp=sharing'>
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
