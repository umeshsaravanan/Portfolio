import React from 'react'
import "./Project.css"
import ImageSlider from '../ImageSlider/ImageSlider';

const Project = ({title,desc,link,git,slide}) => {
  

  return (
      <div className='project'>
          <div className='projectDescription'>
              <div className='titledesc'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
              </div>
              <div className='links'>
                <a href={link} target='blank'> click here to View</a>
                <h3>Git Repositorie:</h3>
                <a href={git} target='blank'>umeshsaravanan@Github</a>
              </div>
          </div>
      </div>
  )
}

export default Project
