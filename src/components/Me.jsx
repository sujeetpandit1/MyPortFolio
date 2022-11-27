import './MeStyle.css'
import MeImg from "../assets/MEIMG.png"

import React from 'react'

const Me = () => {
  return (
    <div className="me">
    {<img className="myImg" src={MeImg} alt="myImg" />}
    <div className='content'>
    <h4 className='text'>Who I AM ?</h4>
    <p className='details'>
    An innovative personality, born in Bihar but raised in India as I have completed my education from different state. 10th from Bihar, 12 from Maharashtra, Graduation from Gujrat, MBA From Chhattisgarh and started my career from Madhya Pradesh.
As, I had experience in banking sector for 6 years. To change my career, I have been associated with FUNCTION UP from May 2022, Experiencing as Backend Engineer-NodeJS Developer. I have done 6 projects,— Stake has been used : Express, JavaScript, NodeJS, MongoDB. using my technical skills like REST APi, CRUD operations, AWS S, CORS, Multers etc, for database MongoDB, Redis for cashing. The whole project based on real life example. Like-URL Sortner, E-Kart Management, Blogging, Book Library, Intern Site, and last but not least My portfolio using REACT.
I am competent with GIT and GItHUB.
My strengths are flexible, innovative and having never give up Approach.
My soft skills are good in decision making and handling, time management as well as leadership as having experience in the same. 

    </p>
    </div> 
    </div>
  )
}

export default Me


