import './FooterStyle.css'
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'> 
    <div className='footer-container'>
    <div className='left'>
    <div className='location'>
    <FaHome size={20} style={{color: 'green', marginRight: "2rem"}}/>
    <p>India</p>
    </div>
    
    <div className='phone'>
    <FaPhone size={20} style={{color: 'yellow', marginRight: "2rem"}}/>
    <p> <h4> +91-XXXXXXXXXX</h4></p>
    </div>
    
    <div className='email'>
    <FaMailBulk size={20} style={{color: 'blue', marginRight: "2rem"}}/>
    <p><a href='mailto:sujeet4545@gmail.com'>sujeet4545@gmail.com</a></p>
    </div>
    </div>

    <div className='right'>
    <h4>About Me :</h4>
    <p>This is me Sujeet Pandit. Skilled MERN Developer with never give up APPROACH.</p>
    <div className='social'>
    <a href="https://www.linkedin.com/in/sujeet-pandit/" target="blank">
    <FaLinkedin size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>

    <a href="https://github.com/sujeetpandit1/Projects.git" target="blank">
    <FaGithub size={30} style={{color: 'black', marginRight: "1rem"}}/></a>

    <a href="https://twitter.com/mr_sujeetpandit" target="blank">
    <FaTwitter size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>

    <a href="https://www.facebook.com/chettanpandit" target="blank">
    <FaFacebook size={30} style={{color: 'blue', marginRight: "1rem"}}/></a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
