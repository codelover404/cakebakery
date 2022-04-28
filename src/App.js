import logo from './logo.svg';
import './Style.css';
import {Back_banner} from './images/back-banner.png'
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import React from "react";
import Contact from './components/Contact';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <>
      {/* <Navigation/> */}
      
      {/* <Home/> */}
      {/* <About/> */}
    {/* <Contact/> */}
    {/* <Project/> */}

    <Router>
      <Navigation/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>
     
    </>
  );
}

export default App;
