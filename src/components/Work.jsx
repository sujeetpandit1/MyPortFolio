import React from 'react'
import './WorkCardStyle.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'


const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'>PROJECTS. :-  Glimps of My Recent Work.</h1>
    <div className='project-container'>
    {WorkCardData.map((value, ind) =>{
        return(
            <WorkCard 
            key={ind}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            GitHub={value.GitHub}
            />
        )
    })}
    </div>
  </div>
  )
}

export default Work
