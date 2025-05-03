import React from 'react'

function Card({data,index,handleClick}) {
  const {image, artist, song, friends} = data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-12'>
      <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover ' src={image}></img>
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold'>
          {song}
        </h3>
          <h6 className='text-xs'> 
            {artist}
          </h6>
          </div>
          <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${friends ? "bg-teal-500": "bg-orange-500"} rounded-full absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] text-xs text-zinc-100`}>{friends ? "Remove from Favourite": "Add to Favourites" }</button>
      
    </div>
  )
}

export default Card