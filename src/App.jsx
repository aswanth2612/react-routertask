import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/NavComp'
import HomePage from './Components/HomePage'
import CAREER from './Components/CAREER'
import CS from './Components/CS'
import  FSD from './Components/FSD'
import DS from './Components/DS'
import All from './Components/All'


function App() {

  return (
    <>
     <Router>
       <NavComp/>
       <Routes>
         <Route path="/" element ={<HomePage/>} />
         <Route path="/All" element ={<All/>} />
         <Route path="/FSD" element = {<FSD/>} />
         <Route path="/DS" element = {<DS/>} />
         <Route path="/CS" element= {<CS/>} />
         <Route path="/CAREER" element= {<CAREER/>} />
       </Routes>
     </Router>
      
    </>
  )
}

export default App
