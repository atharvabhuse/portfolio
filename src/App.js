import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import { themeContext } from "./Context";
import { useContext } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Additional from "./components/Additional";
import Message from "./components/Message";
import DSAProfile from "./components/DSAProfile";
import BloggingProfile from "./components/BloggingProfile";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: darkMode == true ? "#1b1b1b" : "",
        color: darkMode == true ? "#cdcdcd" : "",
      }}
    >
      <NavBar />
      <Intro />
      <Services />
      <Message />
      <Experience />
      <Portfolio />
      <DSAProfile />
      <BloggingProfile />
      <Certification />
      <Additional />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
