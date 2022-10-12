import React, { useContext } from 'react'
import './NavBar.css'
import Toggle from './Toggle'
import { Link } from 'react-scroll'
import { themeContext } from '../Context'
import Popup from './Popup'
import Resume from '../Resume_Atharva.pdf'


const NavBar = () => {

  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (

    <>
    <div className='navbar' style={{color: darkMode?'#cdcdcd': 'black',backgroundColor: darkMode?'rgb(27, 27, 27,0.50)':'rgba(255,255,255,0.50)'}}>


        <ul className='navbar-ul-1'>
          <li className='navbar-li' style={{color: darkMode?'white': 'black'}}>Atharva</li>
          <li><Toggle /></li>
        </ul>

        <ul className='navbar-ul-2'>
          <li><Link spy={true} to='Intro' smooth={true}>Home</Link></li>
          <li><Link spy={true} to='About' smooth={true}>About</Link></li>
          <li><Link spy={true} to='Experience' smooth={true}>Experience</Link></li>
          <li><Link spy={true} to='Portfolio' smooth={true}>Portfolio</Link></li>
          <li><Link spy={true} to='Certification' smooth={true}>Certification</Link></li>
          <li><Link spy={true} to='Contact' smooth={true}>Contact</Link></li>
          <li><a href={Resume} download><button className='navbar-button'>Resume</button></a></li>
         </ul>
    </div>
    </>
  )
}

export default NavBar
