import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className='w-52 h-32 bg-zinc-100 absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-md'>
      <div className='w-full h-full'>
        <img src='https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      </div>
      <div className='w-full h-full'>
         <h1 className='font-semibold '>Cards</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
         </div>
        </div>
    </div>
  )
}

export default Card