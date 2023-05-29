import React from 'react'
import "./ExperienceBox.css"

const ExperienceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} className='experience'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExperienceBox
