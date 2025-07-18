import React from "react";
import PortfolioCard from "./PortfolioCard";
import UdemyReact from "../images/udemy_react.jpg";
import UdemyGraphQL from "../images/udemy_graphQL.jpg";
import HackerRank from "../images/HackerRankCertificate.png";
import zerodha1 from "../images/zerodha1.jpg";
import zerodha2 from "../images/zerodha2.jpg";
import JPMorganAgile from "../images/JP Morgan agile.png";
import DaleCarnegie from "../images/DaleCarnegie.png";
import UdemyAWS from "../images/udemy AWS.jpg";
import CertificateCard from "./CertificateCard";
import "./Certification.css";
import { useState } from "react";
import Popup from "./Popup";
import FoodApp1 from "../images/project images and video/reactFoodApp/foodapp1.png";
import FoodApp2 from "../images/project images and video/reactFoodApp/foodapp2.png";

const Certification = () => {
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState();

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
  };

  const clickoverlay = () => {
    setPopup(false);
  };

  return (
    <div className="portfolio" id="Certification">
      <div className="portfolioMain-heading">Certifications</div>
      <div className="certification-row">
        <CertificateCard
          image={DaleCarnegie}
          heading={"Dale Carnegie How to handle multiple demands on your time"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={JPMorganAgile}
          heading={"JP Morgan Agile"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={UdemyAWS}
          heading={"Udemy AWS"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={UdemyReact}
          heading={"Udemy React"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={UdemyGraphQL}
          heading={"Udemy GraphQL"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={HackerRank}
          heading={"HackerRank Problem Solving"}
          desc1={""}
          desc2={""}
          livesite={true}
        />
        <CertificateCard
          image={zerodha2}
          heading={"Zerodha"}
          desc1={""}
          desc2={""}
          livesite={false}
        />
        <CertificateCard
          image={zerodha1}
          heading={"Zerodha"}
          desc1={""}
          desc2={""}
          livesite={false}
        />
      </div>
      {popup ? <Popup image={image} clickoverlay={clickoverlay} /> : ""}
    </div>
  );
};

export default Certification;
