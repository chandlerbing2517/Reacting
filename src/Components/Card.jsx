import React from 'react'

function Card({user,handleRemove,id}) {
  return(
<div className='w-52 h-full bg-zinc-100 flex flex-col items-center rounded-md p-2'>
      <div className='w-[3vw] h-[3vw] bg-zinc-200 rounded-full flex overflow-hidden'>
        <img src = {user.image} ></img>
      </div>
      <h1 className='text-xl mt-1 font-semibold'>{user.name}</h1>
      <h3 className='text-sm mt-1 opacity-50 font-semibold'>{user.email}</h3>
      <p className='text-xs mt-2 font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quo!</p>
      <button onClick={()=>handleRemove(id)}className='px-3 py-1 rounded-md bg-red-500 text-semibold text-white mt-4'>Remove It</button>
    </div>

)}
export default Card
