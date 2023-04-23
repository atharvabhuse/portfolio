import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Services.css'
import emoji from '../images/emoji2.png'
import Resume from '../Atharva_Bhuse_Resume.pdf'
import { motion } from 'framer-motion'
import api1 from '../images/api1.png'
import database from '../images/database1.png'
import care from '../images/care.png'
import react from '../images/react.png'
const Services = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=> {
        setWidth(window.innerWidth)
    }, [window.innerWidth])
    console.log('width', width, window.innerWidth)
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

                {width > 600 ? <><motion.div initial={{left:'0%'}} whileInView={{left: '20%',top: '-2%'}} transition={{duration: '2',type: 'spring'}} className='motion1'>
                    <Card className='services_card' icon={react} heading1={"Front End"} heading2={"Development"} text={"React, Javascript, Typescript, HTML, CSS, SASS, JQuery"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '15%',top: '-15%'}} transition={{duration: '2',type: 'spring'}} className='motion2'>
                    <Card className='services_card' icon={care} heading1={"Web"} heading2={"Design"} text={"Redux, React‑Redux, Redux‑toolkit, RTK Query, Redux‑Thunk, React‑router‑dom, Axios, Formik, Yup, React query, React‑Stripe‑js, React‑PDF, React‑Helmet, Material UI, Bootstrap"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '-3.5%',top: '0%'}} transition={{duration: '2',type: 'spring'}} className='motion3'>
                    <Card className='services_card' icon={api1} heading1={"Back End"} heading2={"Development"} text={"NodeJs, ExpressJs, MongoDB, Mongoose, Restful APIs"} />
                </motion.div>

                <motion.div initial={{left:'0%',bottom: '-2%'}} whileInView={{left: '1%',top: '-8%'}} transition={{duration: '2',type: 'spring'}} className='motion4'>
                    <Card className='services_card' icon={database} heading1={"Database"} heading2={"Management"} text={"React Native, React Navigation, React Native Paper, Android Studio, Pagination, Async storage, PDF download, Push Notifications, Google Firebase, Expo, Publishing"} />
                </motion.div>

                <motion.div initial={{left:'0%'}} whileInView={{left: '-3%',top: '0%'}} transition={{duration: '2',type: 'spring'}} className='motion5'>
                    <Card className='services_card' icon={emoji} heading1={"Miscellaneous"} heading2={"Skills"} text={"Problem solving, Data structure, Algorithms, Speed Optimization, Responsive, designs, Figma, Git, Jira, Agile Methodologies, Adobe Photoshop, SEO, Wordpress, Technical writting, MS Office"} />
                </motion.div>
                </>
                :
                <>
                <Card icon={react} heading1={"Front End"} heading2={"Development"} text={"React, Javascript, Typescript, HTML, CSS, SASS, Jquery"}/>
                <Card className='services_card' icon={care} heading1={"Web"} heading2={"Design"} text={"Redux, React‑Redux, Redux‑toolkit, RTK Query, Redux‑Thunk, React‑router‑dom, Axios, Formik, Yup, React query, React‑Stripe‑js, React‑PDF, React‑Helmet, Material UI, Bootstrap"} />
                <Card className='services_card' icon={api1} heading1={"Back End"} heading2={"Development"} text={"NodeJs, ExpressJs, MongoDB, Mongoose, Restful APIs"} />
                <Card className='services_card' icon={database} heading1={"Database"} heading2={"Management"} text={"React Native, React Navigation, React Native Paper, Android studio, Pagination, Async Storage, PDF download, Push notifications, Google Firebase, Expo, Publishing"} />
                <Card className='services_card' icon={emoji} heading1={"Miscellinous"} heading2={"Skills"} text={"Problem solving, Data structure, Algorithms, Speed Optimization, Responsive, designs, Figma, Git, Jira, Agile Methodologies, Adobe Photoshop, SEO, Wordpress, Technical writting, MS Office"} />
                 </>}

            </div>
        </div>
    )
}

export default Services
