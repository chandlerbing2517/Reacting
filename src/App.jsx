import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  const [users,setUser]=useState([]);
  const handleUser = (data) => {
    setUser([...users, data]);
  }
      const handleRemove=(id)=>{
        setUser(users.filter((user,index)=>index!==id))
    }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
      <Cards handleRemove={handleRemove} users = {users}/>
      <Form handleUser={handleUser}/>
      </div>
    </div>
  )
}

export default App
