import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLocationPin, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import github from '../images/github1.png'
import linkedin from '../images/linkedin1.png'
import whatsapp from '../images/whatsapp.png'
const Contact = () => {
  return (
    <div className='contact' id='Contact'>
      <div className='contact-left'>
        <div className='portfolioMain-heading'>Get In Touch</div>
        <div>Have Something to talk about?</div>
        <div>My inbox is always open.  Whether you have a question or just want to say hi, I'll get back to you sooner than you expect.</div>
        <br />
        <div className='contact-row'>
          <div className='contact-div'>
            <span className='contact-span-1'><FontAwesomeIcon icon={faUser} style={{ color: '#FCA61F', fontSize: '14px', paddingRight: '1rem' }} /></span>
            <span className='contact-span-2'>Name<br />Atharva Bhuse</span>
          </div>
          <div className='contact-div'>
            <span className='contact-span-1'><FontAwesomeIcon icon={faLocationPin} style={{ color: '#FCA61F', fontSize: '14px', paddingRight: '1rem' }} /></span>
            <span className='contact-span-2'>Location<br />Dadar, Mumbai, Maharastra, India</span>
          </div>
        </div>

        <div className='contact-row'>
          {/* <div className='contact-div'>
            <span className='contact-span-1'><FontAwesomeIcon icon={faPhone} style={{ color: '#FCA61F', fontSize: '20px', paddingRight: '1rem' }} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>Phone</span>
              <span><a href='tel:7588509301' style={{ textDecoration: 'none', color: '#0068CC' }}>+91 75888509301</a></span>
            </div>
          </div> */}
          <div className='contact-div'>
            <span className='contact-span-1'><FontAwesomeIcon icon={faAt} style={{ color: '#FCA61F', fontSize: '14px', paddingRight: '1rem' }} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>Gmail</span>
              <span className='contact-span-2-link'><a href='mailto:atharvabhuse1@gmail.com' style={{ textDecoration: 'none', color: '#0068CC' }}>atharvabhuse1@gmail.com</a></span>
            </div>
          </div>
          <div className='contact-div'>
            <span className='contact-span-1'><img className='linkedin-contact' src={linkedin} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>LinkedIn Profile</span>
              <span className='contact-span-2-link'><a href='https://www.linkedin.com/in/atharva-bhuse/' style={{ textDecoration: 'none', color: '#0068CC' }}>View LinkedIn Profile</a></span>
            </div>
          </div>
        </div>

        <div className='contact-row'>
          {/* <div className='contact-div'>
            <span className='contact-span-1'><img className='linkedin-contact' src={linkedin} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>LinkedIn Profile</span>
              <span><a href='https://www.linkedin.com/in/atharva-bhuse/' style={{ textDecoration: 'none', color: '#0068CC' }}>View LinkedIn Profile</a></span>
            </div>
          </div> */}
          <div className='contact-div'>
            <span className='contact-span-1'><img className='linkedin-contact' src={github} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>Github Profile</span>
              <span className='contact-span-2-link'><a href='https://github.com/atharvabhuse' style={{ textDecoration: 'none', color: '#0068CC' }}>View github profile</a></span>
            </div>
          </div>
        </div>

        {/* <div>
          <div className='contact-div'>
            <span className='contact-span-1'><img className='linkedin-contact' src={whatsapp} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='contact-span-2'>WhatsApp</span>
              <span><a href='https://wa.me/917588509301' style={{ textDecoration: 'none', color: '#0068CC' }}>Send a message</a></span>
            </div>
          </div>
          <div className='contact-div'>

          </div>
        </div> */}


      </div>
      <div className='contact-right'></div>
    </div>
  )
}

export default Contact
