import React from 'react';


function handlerover(){
  alert("working!");
}
const data = [
  {image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Amazon Basics", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.", instock: true},
  {image: 'https://media.istockphoto.com/id/1288818126/photo/toothbrushes-on-pink-background-with-copy-space-top-view.jpg?s=1024x1024&w=is&k=20&c=vcx9PTsPR7J-Cy6P4QRtU6zAV7ms0jMQS5xJVJX9V0Q=', name: "Daily Objects", Description: "Lorem ipsum dolor sit amet consectetur adipisicing", instock: false},
  {image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Apple", Description: "Lorem ipsum dolor ", instock: true},
]
function Card() {
  return (
      <div className='w-full h-screen bg-zinc-200 flex flex-col gap-10 items-center justify-center'>
            {data.map((item,value)=>(
                        <div className='w-90 px-3 py-2 bg-white rounded-md'>
            <h3 className='font-semibold text-xl'> {item.name}</h3>
            <p className='text-xs mt-2'> Lorem ipsum dolor sit amet.</p>
            <button onMouseOver={handlerover} className='bg-blue-300 rounded mt-3 px-2 py-1 text-sm text-zinc-100'>Download Now!</button>
          </div>
            ))}
      </div>
  );
}

export default Card;