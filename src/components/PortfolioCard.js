import React, { useRef, useState } from 'react'
import './PortfolioCard.css'
import github from '../images/github1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import { faL, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
const PortfolioCard = (props) => {
  const [unavailable, setUnavailable] = useState(null)

  const [popup, setPopup]=useState(false)

  const popupHandler=()=>{
    props.click(props.heading)
  }

  const popupvideoHandler=()=>{
    props.clickvideo(props.heading)
  }
  
  return (
    <div className='portfoliocard'>
      <img src={props.image} />
      <div className='portfoliocard-content'>

        <div className='portfoliocard-heading'>{props.heading}</div>

        <div className='portfoliocard-desc'>{props.desc1} <br />{props.desc2}<br />{props.desc3}<br />{props.desc4}</div>

        <div className='buttons'>

          <a href={props.github} style={{ opacity: props.github == false ? '0.5' : '' }}>
            <img src={github}/>
            <p>Github</p>
          </a>

          <FontAwesomeIcon icon={faImages} style={{ color: '#FCA61F', marginTop: '0.2rem' }} /><p onClick={popupHandler}>Images</p>
          <FontAwesomeIcon icon={faVideo} style={{ color: '#FCA61F', marginTop: '0.2rem' }} /><p onClick={popupvideoHandler}>Video</p>
          <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.livesite == false ? '0.5' : '' }} /><p style={{ opacity: props.livesite == false ? '0.5' : '' }}>Live site</p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
