import React, { useRef, useState } from "react";
import "./Intro.css";
import github from "../images/github1.png";
import linkedin from "../images/linkedin1.png";
import svg1 from "../images/yellowvector5.svg";
import svg2 from "../images/bluevector.svg";
import svg3 from "../images/portfolioIntroAtharva.png";
import thumb from "../images/thumb1.png";
import emoji from "../images/emoji.png";
import cup from "../images/PngItem_3433294.png";
import api from "../images/api.png";
import FloatingDiv from "./FloatingDiv";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./Popup";
import background from "../images/background.svg";

const Intro = () => {
  const [colorChange, setColorChange] = useState(false);
  const [color, setColor] = useState("white");
  const [popup, setPopup] = useState(false);
  const clickHandler = (color) => {
    setColorChange(!colorChange);
    setColor(color);
    setPopup(!popup);
  };

  const overlayClickHandler = () => {
    setPopup(false);
  };

  return (
    <>
      {/* <div className='intro-div' style={{ backgroundImage: `url(${background})`}} > */}
      {/* <img src={background} /> */}
      <div className="intro-div" id="Intro">
        <div
          className="intro-div-left"
          style={{
            backgroundImage: `url(${background})`,
            animation: "fadeIn 1s forwards",
            transform: "rotateZ(30deg) !important",
          }}
        >
          <span>Hi! I am</span>
          <span>Atharva Prashant Bhuse</span>
          <span>Frontend Developer @Mintoak</span>
          <span>
            React | React Native | Next | Redux | React Query | Express | Node |
            MongoDB | AWS | DSA | Tech Blogger | F&O Stock market trader
          </span>
          {/* <span>Full stack react developer with high level of experience in web designing and development and producting the Quality work.</span> */}
          {/* <span><button className='intro-button'>Resume</button></span> */}
          <span>
            <span>
              <a href="https://github.com/atharvabhuse">
                <img className="github" src={github} />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/atharva-bhuse/">
                <img className="linkedin" src={linkedin} />
              </a>
            </span>
          </span>
        </div>
        <div className="intro-div-right">
          <img src={svg2} />
          <img src={svg1} />
          <img src={svg3} />

          <motion.div
            initial={{ left: "-15%" }}
            whileInView={{ left: "0%" }}
            transition={{ duration: "2", type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            style={{
              position: "absolute",
              zIndex: 5,
              marginTop: "2rem",
              marginLeft: "0rem",
              cursor: "pointer",
            }}
          >
            <FloatingDiv
              className="FloatingDivblue"
              text1={"React"}
              text2={"Proficiency"}
              icon={cup}
            />
          </motion.div>

          <motion.div
            initial={{ left: "-15%" }}
            whileInView={{ left: "0%" }}
            transition={{ duration: "2", type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            style={{
              position: "absolute",
              zIndex: 5,
              marginTop: "22rem",
              marginLeft: "0rem",
              cursor: "pointer",
            }}
          >
            <FloatingDiv text1={"Full Stack"} text2={"Developer"} icon={api} />
          </motion.div>
          <div className="web-designer">
            <motion.div
              initial={{ right: "-10%" }}
              whileInView={{ left: "-40%" }}
              transition={{ duration: "2", type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              style={{
                position: "absolute",
                zIndex: 5,
                marginTop: "27rem",
                marginLeft: "43vw",
                cursor: "pointer",
              }}
            >
              <FloatingDiv text1={"Web"} text2={"Designer"} icon={thumb} />
            </motion.div>
          </div>

          <span
            className="blur"
            style={{
              background: "rgb(0 255 248 / 76%)",
              marginLeft: "2rem",
              zIndex: 1,
              marginTop: "7rem",
            }}
          ></span>
          <span
            className="blur"
            style={{
              background: "rgb(251 210 28 / 88%)",
              marginLeft: "0rem",
              zIndex: 1,
              marginTop: "22rem",
            }}
          ></span>
          <span
            className="blur"
            style={{
              background: "rgb(6 255 0 / 61%)",
              marginLeft: "22rem",
              zIndex: 1,
              marginTop: "22rem",
            }}
          ></span>
        </div>
      </div>
      {popup ? (
        <Popup
          click={overlayClickHandler}
          style={{ backgroundColor: colorChange ? color : "" }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Intro;
