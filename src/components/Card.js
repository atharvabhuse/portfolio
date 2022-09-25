import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <span className='card'>
      <span><img className='card-img' src={props.icon}></img></span>
      <b>{props.heading1}</b>
      <b>{props.heading2}</b>
      <p>{props.text}</p>
    </span>
  )
}

export default Card
