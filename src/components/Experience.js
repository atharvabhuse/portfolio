import React, { useContext } from "react";
import "./Experience.css";
import { TagCloud } from "react-tagcloud";
import foodapp from "../images/FoodApp.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
const Experience = () => {
  const myTags = [
    { value: "JavaScript", count: 40 },
    { value: "React", count: 55 },
    { value: "HTML", count: 23 },
    { value: "CSS", count: 21 },
    { value: "CSS Flexbox", count: 20 },
    { value: "CSS Tailwind", count: 20 },
    { value: "MongoDB", count: 45 },
    { value: "Jquery", count: 21 },
    { value: "MySql", count: 21 },
    { value: "Database Management System", count: 25 },
    { value: "Bootstrap", count: 20 },
    { value: "Figma", count: 30 },
    { value: "Web Design", count: 21 },
    { value: "Git", count: 20 },
    { value: "Jira", count: 20 },
    { value: "JSON", count: 20 },
    { value: "Wordpress", count: 25 },
    { value: "Adobe Photoshop", count: 20 },
    { value: "Search Engine Optimization", count: 20 },
    { value: "MS Excel", count: 20 },
    { value: "MS Word", count: 20 },
    { value: "MS Powerpoint", count: 20 },
    { value: "Trading", count: 20 },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

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
      <motion.div
        id="Experience"
        initial={{ left: "-25%" }}
        whileInView={{ left: "0%" }}
        transition={{ duration: "2", type: "spring" }}
      >
        <p className="heading">Where I've Worked</p>
      </motion.div>
      <div className="experience-timeline">
        <div className="experience-timeline-left">
          <div>
            <div style={{ borderBottom: "2px solid #FCA61F", width: "2rem" }}>
              &nbsp;
            </div>
            <div></div>
          </div>
          <div style={{ color: darkMode ? "#cdcdcd" : "black" }}>
            <ul>
              <div className="company-heading">
                <p className="experience-p">
                  Mintoak Innovations Pvt. Ltd&nbsp;|&nbsp;
                </p>
                <p style={{ color: "#FCA61F" }} className="experience-p">
                  Software Engineer
                </p>
              </div>
              <div className="company-date">
                <p>September 2024 - Present</p>
              </div>
              <li>
                <span>
                  Developed responsive and secure user interfaces for merchant
                  payment solutions using ReactJS, NextJS, and Redux, optimizing
                  transaction workflows and adhering to Agile Methodologies.{" "}
                </span>
              </li>
              <li>
                <span>
                  Implemented state management to handle transaction data,
                  improving real‑time updates for users and enhancing
                  resiliency.
                </span>
              </li>
              <li>
                <span>
                  Collaborated with backend teams to integrate payment APIs
                  (cards, UPI, wallets) and ensure compliance with PCI DSS,
                  contributing to the corporate environment’s security
                  protocols.
                </span>
              </li>
              <li>
                <span>
                  Built dynamic analytics dashboard with React, visualizing
                  revenue and transaction trends for merchants, aiding in
                  investment management insights.
                </span>
              </li>
              <li>
                <span>
                  Optimized application performance through caching, load
                  balancing, and server‑side rendering, ensuring high
                  scalability for fintech and capital mar‑ kets use cases.
                  Contributed to continuous improvement practices by analyzing
                  system architecture and implementing emerging technologies.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-timeline-right"></div>
      </div>

      <div className="experience-timeline">
        <div className="experience-timeline-left">
          <div>
            <div style={{ borderBottom: "2px solid #FCA61F", width: "2rem" }}>
              &nbsp;
            </div>
            <div></div>
          </div>
          <div style={{ color: darkMode ? "#cdcdcd" : "black" }}>
            <ul>
              <div className="company-heading">
                <p className="experience-p">
                  Polyglots Software LLP&nbsp;|&nbsp;
                </p>
                <p style={{ color: "#FCA61F" }} className="experience-p">
                  Web Developer
                </p>
              </div>
              <div className="company-date">
                <p>March 2022 - Augest 2024</p>
              </div>

              <li>
                <span>
                  Redesigned UdChalo’s web and mobile flight booking process,
                  resulting in a 40% increase in user engagement and 15%
                  decrease in bounce rate, demonstrating effective application
                  development within the Software Development Life Cycle.
                </span>
              </li>
              <li>
                <span>
                  Implemented dynamic search, sort, and multi‑select filtering
                  functionalities to enhance user experience and improve travel
                  option discoverability, reflecting strong programming and
                  debugging skills. Developed dynamic seat selection feature
                  using React components, allowing users to easily manage seats
                  for an enhanced travel experience, contributing to system
                  resiliency.
                </span>
              </li>
              <li>
                <span>
                  Implemented polling mechanism with React Query to
                  automatically refresh search results, ensuring users have
                  up‑to‑date information and system stability. Utilized custom
                  hooks to optimize data fetching and caching, reducing API
                  calls and improving application performance, reflecting robust
                  software solutions and continuous improvement.
                </span>
              </li>
              <li>
                <span>
                  Created ticket PDF view and download system for UdChalo mobile
                  app on both Android and iOS platforms, showcasing expertise in
                  build tools and database querying. Developed notification
                  system using React Native and Firebase, enabling hosts to
                  receive instant booking requests and users to stay updated on
                  flight schedules, ensuring application resiliency and
                  stability.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-timeline-right"></div>
      </div>
    </>
  );
};

export default Experience;
