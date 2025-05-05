import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
         <nav className='flex items-center justify-center gap-10 p-4'>
            <NavLink style={(e)=>{
              return {
                color: e.isActive ? 'tomato' : 'black'
              }}
            } to='/home' >Home</NavLink>
            <NavLink className={(e)=>{
              return e.isActive ? 'text-red-500' : 'text-black'
            }
            } to='/user' >User</NavLink>
            <NavLink style={(e)=>{
              return {
                color: e.isActive ? 'tomato' : 'black'
              }}
            } to='/about'>About</NavLink>
        </nav>
    </div>
  )
}

export default NavBar
