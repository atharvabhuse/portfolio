import React, { useRef, useState } from 'react'
import './Portfolio.css'
import todo from '../images/Screenshot (184).png'
import traderdemo from '../images/TradeDemo.png'
import bizzlab from '../images/Bizzlab.png'
import foodapp from '../images/FoodApp.png'
import PortfolioCard from './PortfolioCard'

import Popup from './Popup'

import FoodApp from '../images/FoodApp.png'
import TodoApp from '../images/project images and video/reactTodoApp/todo.png'
import MobileApp from '../images/project images and video/wordpressMobileApp/mobileapp.png'
import ClothApp from '../images/project images and video/wordpressClothApp/clothapp.png'

import FoodApp1 from '../images/project images and video/reactFoodApp/foodapp1.png'
import FoodApp2 from '../images/project images and video/reactFoodApp/foodapp2.png'

import TodoApp1 from '../images/project images and video/reactTodoApp/todoapp1.png'
import TodoApp2 from '../images/project images and video/reactTodoApp/todoapp2.png'

import ClothApp1 from '../images/project images and video/wordpressClothApp/clothapp1.png'
import ClothApp2 from '../images/project images and video/wordpressClothApp/clothapp2.png'
import ClothApp3 from '../images/project images and video/wordpressClothApp/clothapp3.png'
import ClothApp4 from '../images/project images and video/wordpressClothApp/clothapp4.png'
import ClothApp5 from '../images/project images and video/wordpressClothApp/clothapp5.png'
import ClothApp6 from '../images/project images and video/wordpressClothApp/clothapp6.png'
import ClothApp7 from '../images/project images and video/wordpressClothApp/clothapp7.png'
import ClothApp8 from '../images/project images and video/wordpressClothApp/clothapp8.png'
import ClothApp9 from '../images/project images and video/wordpressClothApp/clothapp9.png'
import ClothApp10 from '../images/project images and video/wordpressClothApp/clothapp10.png'
import ClothApp11 from '../images/project images and video/wordpressClothApp/clothapp11.png'
import ClothApp12 from '../images/project images and video/wordpressClothApp/clothapp12.png'


import MobileApp1 from '../images/project images and video/wordpressMobileApp/mobileapp1.png'
import MobileApp2 from '../images/project images and video/wordpressMobileApp/mobileapp2.png'
import MobileApp3 from '../images/project images and video/wordpressMobileApp/mobileapp3.png'
import MobileApp4 from '../images/project images and video/wordpressMobileApp/mobileapp4.png'
import MobileApp5 from '../images/project images and video/wordpressMobileApp/mobileapp5.png'
import MobileApp6 from '../images/project images and video/wordpressMobileApp/mobileapp6.png'
import MobileApp7 from '../images/project images and video/wordpressMobileApp/mobileapp7.png'
import MobileApp8 from '../images/project images and video/wordpressMobileApp/mobileapp8.png'
import MobileApp9 from '../images/project images and video/wordpressMobileApp/mobileapp9.png'
import MobileApp10 from '../images/project images and video/wordpressMobileApp/mobileapp10.png'
import MobileApp11 from '../images/project images and video/wordpressMobileApp/mobileapp11.png'

const Portfolio = () => {

  const foodref = useRef()
  const todoref = useRef()

  const [popup, setPopup] = useState(false)
  const [image1,setImage1]=useState()
  const [image2,setImage2]=useState()
  const [image3,setImage3]=useState()
  const [image,setImage]=useState()
  const [video,setVideo]=useState()




  const clickHandler = (data) => {
    setPopup(true)
    if (data=='Food App') {
      let imgvar=[{url: FoodApp1},{url: FoodApp2}]
      setImage(imgvar)

    } else if (data=='Todo App') {
      let imgvar=[{url: TodoApp1},{url: TodoApp2}]
      setImage(imgvar)

    } else if (data=='Cloth App'){
      let imgvar=[{url: ClothApp1},{url: ClothApp2},{url: ClothApp3},{url: ClothApp4},{url: ClothApp5},{url: ClothApp6},{url: ClothApp7},{url: ClothApp8},{url: ClothApp9},{url: ClothApp10},{url: ClothApp11},{url: ClothApp12}]
      setImage(imgvar)
    } else if(data=='Mobile App'){
      let imgvar=[{url: MobileApp1},{url: MobileApp2},{url: MobileApp3},{url: MobileApp4},{url: MobileApp5},{url: MobileApp6},{url: MobileApp7},{url: MobileApp8},{url: MobileApp9},{url: MobileApp10},{url: MobileApp11}]
      setImage(imgvar)
    }
  }

  const clickvideoHandler=(data)=>{
    if (data=='Food App') {
      let videovar=[]
      setVideo(videovar)
      
    }
  }

  const clickoverlay = () => {
    setPopup(false)
  }

  return (
    <div className='portfolio' id='Portfolio'>
      <div className='portfolio-heading'>Something I've build</div>
      <div className='grid-row' ref={foodref} >
        <PortfolioCard image={FoodApp} heading={"Food App"} desc1={"Implemented a basic react food app, where user can order dishes in number of quantites and it will be added to reflected to cart button."} desc2={"Technologies used- React, JavaScript, HTML, Tailwind CSS, Bootstrap."} livesite={false} github={'https://github.com/atharvabhuse/foodApp'} click={clickHandler} clickvideo={clickvideoHandler} />
      </div>
      <div className='grid-row' ref={todoref}>
        <PortfolioCard image={TodoApp} heading={"Todo App"} desc1={"Implemented a basic react todo app, where user can list tasks to do by filling form and task data is been saved in local storage. As user complete tasks one by one user has to click completed button. User can perform crud operations on task table as well."} desc2={"Technologies used- React, Redux, JavaScript, HTML, Tailwind CSS, Bootstrap."} livesite={false} github={'https://github.com/atharvabhuse/todoApp'} click={clickHandler} />
      </div>
      <div className='grid-row'>
        <PortfolioCard image={MobileApp} heading={"Mobile App"} desc1={"Implemented mobile review app where user can get full information of smartphones including its features, comparisons, technology news, paid joining, ai bot, mobile buying advisor facility and many other features to give full fledge mobile buying guide website."} desc2={"Technologies used- Wordpress, JavaScript, HTML, CSS."} livesite={false} github={false} click={clickHandler} />
      </div>
      <div className='grid-row'>
        <PortfolioCard image={ClothApp} heading={"Cloth App"} desc1={"Implemented a cloth app where user can add product in wishlist, cart and buy as well using paypal online transaction facility."} desc2={"Technologies used- Wordpress, JavaScript, HTML, CSS."} livesite={false} github={false} click={clickHandler} />
      </div>

      {popup ? <Popup image={image} clickoverlay={clickoverlay} /> : ''}
    </div>
  )
}

export default Portfolio
