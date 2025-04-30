import React from 'react';



const data = [
  {image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Amazon Basics", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.", instock: true},
  {image: 'https://media.istockphoto.com/id/1288818126/photo/toothbrushes-on-pink-background-with-copy-space-top-view.jpg?s=1024x1024&w=is&k=20&c=vcx9PTsPR7J-Cy6P4QRtU6zAV7ms0jMQS5xJVJX9V0Q=', name: "Daily Objects", Description: "Lorem ipsum dolor sit amet consectetur adipisicing", instock: false},
  {image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Apple", Description: "Lorem ipsum dolor ", instock: true},
]
function Card() {
  return (
    <div className='w-full h-screen  flex items-center gap-10 justify-center bg-zinc-200'>
      {data.map((item, index) => (
      <div className='w-52 bg-zinc-100 rounded-md overflow-hidden' key={index}>
        <div className='w-full h-full bg-zinc-300'>
          <img
            className='w-full h-full object-cover'
            src={item.image}
          ></img>
        </div>
        <div className='w-full px-3 py-4'>
          <h1 className='font-semibold' >{item.name}</h1>
          <p className='text-sm'>
            {item.Description}
          </p>
          <button className={`px-4 py-1 mt-3 text-sm text-zinc-100 rounded ${item.instock ? "bg-green-500" : "bg-red-500"}`}>
            {item.instock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Card;