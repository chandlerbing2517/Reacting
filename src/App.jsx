import React from 'react'
import Card from './Components/Card'
import NavBar from './Components/NavBar';

function App() {
  const data = [
    {
      image:"https://plus.unsplash.com/premium_photo-1690922641593-9eb56a204364?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",artist:"Eminem",song: "Rap God", friends: false
    },
    {
      image:"https://images.unsplash.com/photo-1744658840716-a4a7734402fd?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",artist:"Weekend",song: "Blinding Lights", friends: false
    },
    {
      image:"https://images.unsplash.com/photo-1745179178656-5d2795ec5d31?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",artist:"Linkin Park",song: "Numb", friends: false
    },
    {
      image:"https://images.unsplash.com/photo-1739989934289-4cb75f451a56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",artist:"Seedhe Maut",song: "11K", friends: false
    }
  ]

  const [songData,setsongData]=React.useState(data);
  const handleClick=(index)=>{
      setsongData((prev)=>{
        return prev.map((item,itemindex)=>{
          if(itemindex === index)
            return {...item, friends: !item.friends}
          return item;
        })

      })
  }
  return (
< >   
<div className="w-full h-screen bg-zinc-300">
      <NavBar data={songData}/>
      
      <div className='flex flex-wrap gap-10 px-20 mt-10'>
      {
        songData.map((obj,index)=>(
          <Card data={obj} index={index} key={index} handleClick={handleClick}/>
        ))
      }
      </div>
   </div>
   </>
  );
}

export default App