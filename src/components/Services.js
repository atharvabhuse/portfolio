import React from 'react'
import Card from './Card'
import './Services.css'
import emoji from '../images/emoji2.png'
import Resume from '../Resume_Atharva.pdf'
import { motion } from 'framer-motion'
import api1 from '../images/api1.png'
import database from '../images/database1.png'
import care from '../images/care.png'
import react from '../images/react.png'
const Services = () => {
    return (
        <div className='services' id='About'>
            <div className='services-left'>
                {/* <span>My Awesome</span> */}
                <span>About Me</span>
                <span>Hi, I am Atharva, a UI / Front End developer.<br /><br />I am responsible for building beautiful, elegant and functional web applications.<br /><br /> I did my bachelors in Computer Engineering in 2020.<br /><br /> Being passionate about learning & implementing new tools and technologies keeps me motivated.<br /><br />Interesting fact! I am also a certified F&O stock market trader 😀<br /><br />Coming back to web development, here are few technologies and tools that I am familar with:</span>
                <span>
                    <a href={Resume} download>
                        {/* <button className='services-button'>Download Resume</button> */}
                    </a>
                </span>
                {/* <span className='blur' style={{background: "pink", marginLeft: '0rem',marginTop: '20rem'}}></span> */}

            </div>
            <div className='services-right'>

                <motion.div initial={{left:'0%'}} whileInView={{left: '20%',top: '-2%'}} transition={{duration: '2',type: 'spring'}} style={{ position: 'absolute', marginTop: '2rem' }}>
                    <Card icon={react} heading1={"Front End"} heading2={"Development"} text={"React, Javascript, Jquery, HTML, CSS, CSS Flexbox, CSS Tailwind, Bootstrap"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '15%',top: '-8%'}} transition={{duration: '2',type: 'spring'}} style={{ position: 'absolute', marginTop: '26rem', marginLeft: '3rem' }}>
                    <Card icon={care} heading1={"Web"} heading2={"Design"} text={"Figma, Adobe Photoshop, Adobe Express"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '-3.5%',top: '0%'}} transition={{duration: '2',type: 'spring'}} style={{ position: 'absolute', marginTop: '1rem', marginLeft: '30rem' }}>
                    <Card icon={api1} heading1={"Back End"} heading2={"Development"} text={"JavaScript, Json"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '1%',top: '-14%'}} transition={{duration: '2',type: 'spring'}} style={{ position: 'absolute', marginTop: '24rem', marginLeft: '27rem' }}>
                    <Card icon={database} heading1={"Database"} heading2={"Management"} text={"Mongo DB, Database Management System, MySql"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '-3%',top: '0%'}} transition={{duration: '2',type: 'spring'}} style={{ position: 'absolute', marginTop: '1rem', marginLeft: '45rem' }}>
                    <Card icon={emoji} heading1={"Miscellinous"} heading2={"Skills"} text={"Git, Jira, Wordpress, Search Engine Optimization, Microsoft Excel, Microsoft Powerpoint, Microsoft Word"} />
                </motion.div>

                {/* <span className='blur' style={{background: "rgba(255, 0, 240, 0.22)", marginLeft: '30rem',marginTop: '5rem'}}></span> */}


            </div>
        </div>
    )
}

export default Services
