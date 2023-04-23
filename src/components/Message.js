import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../Context'
import './Message.css'


const Message = () => {
    const theme = useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
  <div className='message-box' style={{backgroundColor: darkMode==true?'#242D49':'lightgray'}}>
      <div className='message-first'>
        It's scientifically proven fact that,&nbsp;<span className='link'>Dark mode </span>&nbsp;will make you 10 times better developer😄.
      </div>
      <div className='message-second'>
        Consider to switch on&nbsp;<span className='link'>Dark mode</span>, it reduces eye strain.
      </div>
    </div>
  )
}

export default Message
