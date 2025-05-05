import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 flex flex-col gap-4 m-auto mt-4 p-4'>
      <h1 className='text-blue-300 text-4xl font-semibold'>User</h1>
      <Link to='/user/Sajal' className='bg-blue-500 text-white text-2xl p-2 rounded-md'>Sajal</Link>
      <Link to='/user/Videh' className='bg-blue-500 text-white text-2xl p-2 rounded-md'>Videh</Link>
      <Link to='/user/Sagar' className='bg-blue-500 text-white text-2xl p-2 rounded-md'>Sagar</Link>
    </div>
  )
}

export default User
