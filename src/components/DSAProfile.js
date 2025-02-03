import React from 'react'
import PortfolioCard from './PortfolioCard'
import Leetcode from '../images/leetcode.png'
import HackerRank from '../images/hackerrank.png'
import zerodha1 from '../images/zerodha1.jpg'
import zerodha2 from '../images/zerodha2.jpg'
import CertificateCard from './CertificateCard'
import { useState } from 'react'
import Popup from './Popup'
import DSAProfileCard from './DSAProfileCard'

const DSAProfile = () => {
    const [popup, setPopup] = useState(false)
    const [image, setImage] = useState()

    const clickHandler = (data) => {
        // console.log(data)
        // if (data == 'Udemy React') {
        //     let imgvar = [{ url: FoodApp1 }, { url: FoodApp2 }]
        //     setImage(imgvar)

        // }
        // else if (data == 'Todo App') {
        //     let imgvar = [{ url: TodoApp1 }, { url: TodoApp2 }]
        //     setImage(imgvar)

        // } else if (data == 'Cloth App') {
        //     let imgvar = [{ url: ClothApp1 }, { url: ClothApp2 }, { url: ClothApp3 }, { url: ClothApp4 }, { url: ClothApp5 }, { url: ClothApp6 }, { url: ClothApp7 }, { url: ClothApp8 }, { url: ClothApp9 }, { url: ClothApp10 }, { url: ClothApp11 }, { url: ClothApp12 }]
        //     setImage(imgvar)
        // } else if (data == 'Mobile App') {
        //     let imgvar = [{ url: MobileApp1 }, { url: MobileApp2 }, { url: MobileApp3 }, { url: MobileApp4 }, { url: MobileApp5 }, { url: MobileApp6 }, { url: MobileApp7 }, { url: MobileApp8 }, { url: MobileApp9 }, { url: MobileApp10 }, { url: MobileApp11 }]
        //     setImage(imgvar)
        // }
    }

    const clickoverlay = () => {
        setPopup(false)
    }

    return (
        <div className='portfolio' id='Certification'>
            <div className='portfolioMain-heading'>DSA Profiles</div>
            <div className='certification-row'>
            <DSAProfileCard image={Leetcode} heading={"Leetcode"} desc1={"300+ Problem solved"} desc2={"4 badges"} livesite={true} />
            <DSAProfileCard image={HackerRank} heading={"HackerRank"} desc1={"5 star in problem solving"} desc2={""} livesite={true} />
            </div>
            {popup ? <Popup image={image} clickoverlay={clickoverlay} /> : ''}
        </div>
    )
}

export default DSAProfile
