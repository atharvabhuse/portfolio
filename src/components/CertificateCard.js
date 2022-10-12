import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import './CertificateCard.css'

const CertificateCard = (props) => {
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

                {props.heading=="Udemy React"?<a className='certificatecard-a' href='https://www.udemy.com/certificate/UC-bf94c31c-cb7e-4ede-81a4-227370d36255/'><div className='certificatecard-buttons'>
                    <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.livesite == false ? '0.5' : '' }} />
                    <p style={{ opacity: props.livesite == false ? '0.5' : '' }}>
                        {props.heading == "Udemy React" ? "Credential" : "Image"}
                    </p>
                </div></a>
                :
                <div className='certificatecard-buttons'>
                <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: '#FCA61F', marginTop: '0.2rem', opacity: props.livesite == false ? '0.5' : '' }} />
                <p style={{ opacity: props.livesite == false ? '0.5' : '' }}>
                    Credential
                </p>
            </div>}

            </div>
        </div>
    )
}

export default CertificateCard
