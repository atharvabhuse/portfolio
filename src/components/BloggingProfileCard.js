import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import './DSAProfileCard.css'

const BloggingProfileCard = (props) => {
    const [unavailable, setUnavailable] = useState(null)

    const [popup, setPopup] = useState(false)

    const popupHandler = () => {
        props.click(props.heading)
    }


    return (
        <div className='certificatecard'>
            <div className='certificatecard-image' onClick={popupHandler}>
                <img className='image' src={props.image} />
            </div>
            <div className='certificatecard-content'>

                <div className='certificatecard-heading'>{props.heading}</div>

                {/* <div className='portfoliocard-desc'>{props.desc1} <br />{props.desc2}<br />{props.desc3}<br />{props.desc4}</div> */}
                <span className='dsaprofile_desc'>{props.desc1}</span>
                    <a className='certificatecard-a' href='https://atharvabhuse.hashnode.dev/'>
                        <div className='certificatecard-buttons'>
                            <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.livesite == false ? '0.5' : '' }} />
                            <p style={{ opacity: props.livesite == false ? '0.5' : '' }}>
                                Profile
                            </p>
                        </div>
                    </a>
            </div>
        </div>
    )
}

export default BloggingProfileCard;
