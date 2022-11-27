import "./HeroImageStyle.css"
import backgroundImg from "../assets/background.jpg"
import {motion} from "framer-motion"
import TypeWriter from "typewriter-effect"
import React from 'react'
import { Link } from "react-router-dom"
import MyPDF from '../assets/Resume Sujeet Pandit.pdf';

const HeroImage = () => {
    const animations={
        h1:{
        initial:{
            x: "-100%",
            opacity:0,  
        },
        whileInView:{
            x:0,
            opacity:1
          }
        },
        button:{
            initial:{
                y: "-100%",
                opacity:0,  
            },
            whileInView:{
                y:0,
                opacity:1
              }
            }
    }
  return (
    <div className="hero">
    <div className="mask">
    <img className="into-img" src={backgroundImg} alt="backgroundImg" />
    </div>
    <div className="content">
    <motion.p {...animations.p}>
      <p>Hi, I Am </p>
      </motion.p>
      <h1>
      <TypeWriter options={{
        strings:["A Developer", "A Passionate Developer", "A Techie"],
        autoStart: true,
        loop: true,
        cursor:" < />",
        wrapperClassName:"TypeWriterPara"
      }}/>
      </h1>
      <div>
      <Link to="/Projects" className="btn">Projects</Link>
      <button><a href={MyPDF} download="MyResume.pdf"> Download CV Here</a></button>
      <Link to="/Contact" className="btn">Contact</Link>
      </div>
    </div>
    </div>
   
  )
}

export default HeroImage
