import React, { useContext } from 'react'
import './Experience.css'
import { TagCloud } from 'react-tagcloud'
import foodapp from '../images/FoodApp.png'
import { themeContext } from '../Context'
import { motion } from 'framer-motion'
const Experience = () => {

  const myTags = [
    { value: 'JavaScript', count: 40 },
    { value: 'React', count: 55 },
    { value: 'HTML', count: 23 },
    { value: 'CSS', count: 21 },
    { value: 'CSS Flexbox', count: 20 },
    { value: 'CSS Tailwind', count: 20 },
    { value: 'MongoDB', count: 45 },
    { value: 'Jquery', count: 21 },
    { value: 'MySql', count: 21 },
    { value: 'Database Management System', count: 25 },
    { value: 'Bootstrap', count: 20 },
    { value: 'Figma', count: 30 },
    { value: 'Web Design', count: 21 },
    { value: 'Git', count: 20 },
    { value: 'Jira', count: 20 },
    { value: 'JSON', count: 20 },
    { value: 'Wordpress', count: 25 },
    { value: 'Adobe Photoshop', count: 20 },
    { value: 'Search Engine Optimization', count: 20 },
    { value: 'MS Excel', count: 20 },
    { value: 'MS Word', count: 20 },
    { value: 'MS Powerpoint', count: 20 },
    { value: 'Trading', count: 20 },
  ]
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode


  // const customRenderer=(tag, size,color)=>{
  //   <span key={tag.value}
  //     style={{animation: 'blinker 3s linear infinite', animationDelay:  `${Math.random() * 2}s`,fontSize: `${size / 2}em`, border: `2px solid ${color}`}}>
  //       {tag.value}
  //   </span>
  // }



  // const customRenderer = (tag, size, color) => (
  //   <span
  //     key={tag.value}
  //     style={{
  //       animation: 'blinker 3s linear infinite',
  //       animationDelay: `${Math.random() * 2}s`,
  //       border: `2px solid ${color}`,
  //       margin: '3px',
  //       padding: '3px',
  //       display: 'inline-block',
  //       color: color,
  //     }}
  //   >
  //     {tag.value}
  //   </span>
  // )


  return (
    // <div id='Experience' style={{display: 'flex',flexDirection: 'row'}}>
    //   <div className='experience' style={{ display: 'flex', flex: 1 }}>
    //     <span className='experience-span'>
    //       <p className='experience-circle'>3+</p>
    //       <p>Months</p>
    //       <p>Experience</p>
    //     </span>
    //     <span className='experience-span'>
    //       <p className='experience-circle'>4+</p>
    //       <p>Completed</p>
    //       <p>Projects</p>
    //     </span>
    //     <span className='experience-span'>
    //       <p className='experience-circle'>1</p>
    //       <p>Company</p>
    //       <p>Works</p>
    //     </span>
    //     <span className='blur' style={{ background: "rgb(173 255 47 / 43%)", marginRight: '70rem', marginBottom: '20rem' }}></span>
    //     <span className='blur' style={{ background: "rgb(27 242 37 / 34%)", marginLeft: '70rem', marginTop: '25rem' }}></span>
    //   </div>

    //   <span style={{ display: 'flex',flexDirection: 'column', flex: 1,justifyContent: 'center',alignItems: 'center',padding: '2rem',borderRadius: '3rem'}}>
    //     <TagCloud minSize={20} maxSize={60} tags={myTags} onClick={tag => alert(`'${tag.value}' was selected`)} style={{width: '500px'}}
    //     //  renderer={customRenderer}
    //      />
    //     <h6>Choose skill</h6>

    //   </span>
    // </div>
    <>
      <motion.div id='Experience' initial={{ left: '-25%' }} whileInView={{ left: '0%' }} transition={{ duration: '2', type: 'spring' }}><p className='heading'>Where I've Worked</p></motion.div>
      <div className='experience-timeline'>
        <div className='experience-timeline-left'>
          <div>
            <div style={{ borderBottom: '2px solid #FCA61F', width: '2rem' }}>&nbsp;</div>
            <div></div>
          </div>
          <div style={{ color: darkMode ? '#cdcdcd' : 'black' }}>
            <ul>
              <div className='company-heading' ><p className='experience-p'>Polyglots Software LLP&nbsp;|&nbsp;</p><p style={{ color: '#FCA61F' }} className='experience-p'>UI Developer</p></div>
              <div className='company-date' ><p>March 2022 - Present</p></div>


              <li><span>Convert web deign into websites using ReactJs, Javascript, HTML, CSS(Flexbox/ Tailwind), Bootstrap with 100% accuracy and maintaining the code using GitHub.</span></li>
              <li><span>Worked on in-house Admin software based on React.js with REST API consumption using tools like Webpack, Axios, React Query etc.</span></li>
              <li><span>Collaborated with Product team for detail Design flows, Wireframes, Prototype and making trending UI/UX experience using Figma.</span></li>
              <li><span>Troubleshooting application for its better online presence. Optimized websites for higher Google page speedscores for better Search engine ranking and faster loading.</span></li>
              <li><span>Testing and Debiugging source code for better optimazation. Tested code in various browsers and devices to ensure cross-browser compatibility and responsive behaviour.</span></li>
              <li><span>Documenting the work done to client and support team for organisation</span></li>
            </ul>
          </div>
        </div>
        <div className='experience-timeline-right'></div>
      </div>
    </>
  )
}

export default Experience
