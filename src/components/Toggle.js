import React, { useContext, useState } from 'react'
import './Toggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { themeContext } from '../Context'

const Toggle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const [onToggle, setOnToggle] = useState(false)
    const handleClick = () => {
        setOnToggle(!onToggle)
        theme.dispatch({ type: 'toggle' })
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-1rem'}}>
            {onToggle && darkMode ?
                <div className='toggle1' onClick={handleClick}>
                    <div className='toggle1-div' ></div >
                    <FontAwesomeIcon icon={faSun} className='toggle1-icon' />
                </div >
                :
                <div className='toggle' onClick={handleClick}>
                    <div className='toggle-div' ></div >
                    <FontAwesomeIcon icon={faSun} className='toggle-icon' />
                </div >
            }
        </div>
    )
}

export default Toggle
