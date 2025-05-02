import React from 'react'

function NavBar() {
  return (
    <div className='w-full h-16 bg-zinc-200 flex items-center justify-between px-4'>
        <h3 text-md font-semibold>Orange</h3>
        <div className='flex items-center gap-2 bg-orange-500 rounded-md p-2'>
        <h3 text-md font-semibold>Favourites</h3>
        <h4 text-md>2</h4>
        </div>
    </div>
  )
}

export default NavBar