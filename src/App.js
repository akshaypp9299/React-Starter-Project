import React from 'react';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import {Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


export default function App(){
  return (
  <>
    <Navbar/>

    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
      <Route path="*" element={<Home/>}></Route>
    </Routes>
  </>
  )
}