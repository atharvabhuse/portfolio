import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import love from '../images/love.svg'
const Footer = () => {
  return (
    <div className='footer'>
     {/* <span style={{fontSize: '1rem',display: 'flex',marginRight: '0px',fontSize: '10px'}}>Copyright&nbsp;<FontAwesomeIcon icon={faCopyright} style={{fontSize: '10px',color: '#cdcdcd',paddingTop: '0.1rem'}}/>&nbsp;All rights reserved 2022</span> */}
     <span style={{display: 'flex',fontSize: '1rem',margin: 'auto',justifyContent: 'center',alignItems: 'center'}}>Built with&nbsp; <img src={love} style={{width: '15px',height: '15px'}} />&nbsp; by Atharva</span>
     <span style={{display: 'flex',fontSize: '10px',marginLeft: 'auto',justifyContent: 'end',alignItems: 'end'}}>version 1 .2 .0</span>
    </div>
  )
}

export default Footer
