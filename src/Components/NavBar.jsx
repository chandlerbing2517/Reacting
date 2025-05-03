import React from 'react'

function NavBar({data}) {
  return (
    <div className='w-full h-16 bg-zinc-200 flex items-center justify-between px-4'>
        <h3 className='text-md text-orange-700'>Orange</h3>
        <div className='flex items-center gap-2 bg-orange-500 rounded-md p-2'>
        <h3 className='text-zinc-100' >Favourites</h3>
        <h4 className='text-zinc-100' >{data.filter(item=> item.friends===true).length}</h4>
        </div>
    </div>
  )
}

export default NavBar