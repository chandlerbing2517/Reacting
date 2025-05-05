import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import UserDetails from '../Components/UserDetails'
function Routing() {
  return (
    <div>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/user" element={<User/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/user/:name" element={<UserDetails />} />
            </Routes>
    </div>
  )
}

export default Routing
