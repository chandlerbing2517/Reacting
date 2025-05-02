import React from 'react';

function Card({values,handlemouseclick, index}) {
  const {name, profession, image,friends} = values; 

  return (

      <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
          <img src={image} className='w-full h-full object-cover'></img>
        </div>
          <div className='w-full p-3'>
          <h3 className='text-sm'>{name}</h3>
          <h5 className='text-xs'>{profession}</h5>
          <button onClick={()=>handlemouseclick(index)} className='px-3 py-1 bg-blue-500 text-xs text-white font-semibold rounded-md mt-1'> {friends?"Add Friend":"Lose Friend"}</button>
        </div>
      </div>
  );
}

export default Card;