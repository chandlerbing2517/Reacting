import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Routing from './utils/Routing'

function App(){
  return (
            <>
            <NavBar />
            <Routing />
            </>
  )
}
export default App



//---------Form with card----------------

// function App() {
//   const [users,setUser]=useState([]);
//   const handleUser = (data) => {
//     setUser([...users, data]);
//   }
//       const handleRemove=(id)=>{
//         setUser(users.filter((user,index)=>index!==id))
//     }
//   return (
//     <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
//       <div className='container mx-auto'>
//       <Cards handleRemove={handleRemove} users = {users}/>
//       <Form handleUser={handleUser}/>
//       </div>
//     </div>
//   )
// }
