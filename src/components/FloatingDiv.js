import React, { createContext, useContext, useRef } from 'react'
import { themeContext } from '../Context'
import './FloatingDiv.css'
const FloatingDiv = (props) => {


  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const text = useRef()

  const clickHandler = () => {

    if (text.current.value == 'React') {
      props.color('rgb(0 255 248 / 56%)')
    }
     else if (text.current.value == 'Web') {
      props.color('rgb(6 255 0 / 31%)')

    }
     else {
      props.color('rgb(251 210 28 / 88%)')

    }
  }

  return (
    <div style={{ color: darkMode ? 'white' : 'black' }} onClick={clickHandler}>
      <span className='floatingspan' style={props.text1 == 'React' ? { backgroundColor: 'rgb(0 255 248 / 56%)' } : props.text1 == 'Web' ? { backgroundColor: 'rgb(6 255 0 / 31%)' } : { backgroundColor: 'rgb(251 210 28 / 88%)' }}>
        <img src={props.icon} />
        <span>
          <b ref={text}>{props.text1}</b>
          <b>{props.text2}</b>
        </span>
      </span>
    </div>
  )
}

export default FloatingDiv
