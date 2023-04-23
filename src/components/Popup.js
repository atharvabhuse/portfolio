import React from 'react'
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import './Popup.css'
import foodapp1 from '../images/project images and video/reactFoodApp/foodapp1.png'
import SimpleImageSlider from 'react-simple-image-slider';
const Popup = (props) => {
  const clickHandler = () => {
    props.clickoverlay()
  }
console.log('props.image',props.image)
  const images=props.image;
  return (
    <>
      {
        ReactDOM.createPortal(
          <div>
            <div className='popup'
              onClick={clickHandler}>
            </div>
          </div>, document.getElementById('overlay'))
      }
      {
        ReactDOM.createPortal(
          <div>
            {
            <div className='popup-div' >
              {props.image ? <SimpleImageSlider width={'50vmax'} height={'25vmax'} images={images} showBullets={true} showNavs={true}  />:''}
              {/* <img src={props.image} /> */}
            </div>
            }
          </div>, document.getElementById('overlay'))
      }
    </>
  )
}

export default Popup
