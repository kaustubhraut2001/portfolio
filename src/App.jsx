import React from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SocialLink from "./Components/SocialLink";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experiance from "./Components/Experiance";
import Contact from "./Components/Contact";


function App() {
  return(
  <>
    <NavBar />

    <Home />
    <About/>
    <Portfolio/>
    <SocialLink/>
    <Experiance/>
    <Contact/>

   </>
  )
}

export default App;
