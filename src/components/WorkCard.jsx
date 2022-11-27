import './WorkCardStyle.css'
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='img' />
    <h2 className='project-title'>{props.title}</h2>
      
          <div className='prod-details'>
            <p>
              {props.text}
            </p>

            <button className='prod-btns'><a href={props.GitHub} target="blank">GitHub Link</a></button>

          </div>
        </div>
    
  )
}

export default WorkCard
