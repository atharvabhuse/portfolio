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
    <div className='portfoliocardMain' style={props.heading=='Ecommerce App(MERN Stack)' ? {border: '5px solid #F5C32C'}:{}}>
      <div className='portfoliocardMain-imgBox'>
      <img className='portfoliocard-img' src={props.image} />
      </div>
      <div className='portfoliocard-content'>

        <div className='portfoliocard-heading'>{props.heading}</div>

        {props.heading=='Ecommerce App(MERN Stack)' ? <span className='portfoliocard-featured'>Featured</span> : ''}

        <div className='portfoliocard-desc'>{props.desc1} <br />{props.desc2}<br />{props.desc3}<br />{props.desc4}</div>

        <div className='buttons'>

          <a className='buttons-a' href={props.github} style={{ opacity: props.github == false ? '0.5' : '' }}>
            <img className='butttons-img' src={github}/>
            <p className='buttons-a'>Github</p>
          </a>
          <FontAwesomeIcon icon={faImages} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.heading=='Ecommerce App(MERN Stack)'?0.5:'' }} /><p className='buttons-a' onClick={popupHandler} style={{opacity: props.heading=='Ecommerce App(MERN Stack)'? 0.5:''}}>Images</p>
          <FontAwesomeIcon icon={faVideo} style={{ color: '#FCA61F', marginTop: '0.2rem',opacity: 0.5 }} /><p className='buttons-a' onClick={popupvideoHandler} style={{opacity: 0.5}}>Video</p>
          <a className='buttons-a' href={props.livesite}><FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.livesite == false ? '0.5' : '' }} /><p className='buttons-a' style={{ opacity: props.livesite == false ? '0.5' : '' }}>Live site</p></a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
