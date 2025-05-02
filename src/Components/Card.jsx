import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
function Card() {
    const [val, setVal] = React.useState(false);

  return (
      <div className='w-full h-screen bg-zinc-100 flex justify-center items-center'>
        <div className=' relative w-72 h-52 bg-zinc-300 flex rounded-md overflow-hidden'>
        <img className={` shrink-0 w-full h-full transition-transform duration-500 ease-in-out ${val ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover`} src='https://images.unsplash.com/photo-1743309411498-a0f4f4b96b65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <img className={` shrink-0 w-full h-full transition-transform duration-500 ease-in-out ${val ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover`} src='https://images.unsplash.com/photo-1745676353163-539761e42831?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <span onClick= {()=>setVal(()=>!val)} className='w-10 h-10 bg-[#dadada8b] absolute bottom-[0%] flex items-center justify-center left-1/2 rounded-full -translate-x-[50%] -translate-y-[50%]'>
          <FaArrowRightLong size={"0.7em"}/>
        </span>
        </div>
      </div>
  );
}

export default Card;