import React from 'react';

function Card({text,color}) {

  return (
        <button className={`px-2 py-2 ${color} text-black rounded-md m-3`}>
          {text}
          </button>      
  );
}

export default Card;