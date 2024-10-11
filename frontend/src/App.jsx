import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import About from './Components/About'
import Register from './Components/Register'
import Abouts from './about/Abouts'
import {  Route, Routes } from "react-router-dom";
import Register_model from './Components/Register_model'
import Home from './home/Home'
import Feedback from './Components/Feedback'
function App() {
    return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/register_model" element={<Register_model />} />
        </Routes> 
        </div>
  </>
    )
}

export default App
