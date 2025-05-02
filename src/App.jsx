import React from 'react'
import Card from './Components/Card'

function App() {
  const dataa = [
    {name: "Sajal", profession: "Java Developer", image: "https://images.unsplash.com/photo-1744219792921-a74da6141822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Videh", profession: "CRM", image: "https://images.unsplash.com/photo-1744826874736-54ec3ff61a7b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Sagar", profession: "React", image: "https://images.unsplash.com/photo-1729591518341-f820f3872178?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}, 
    {name: "Ayush", profession: "Node", image: "https://images.unsplash.com/photo-1603127357126-fb1a66a399e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}, 
  ]
  const [data,setdata] = React.useState(dataa);

  const handlemouseclick=(cardindex)=>{
    setdata((prevdata)=>{
      return prevdata.map((item,index)=>{
        if(index === cardindex){
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }
  
  return (
    <div className="w-full h-screen bg-zinc-200 items-center justify-center flex gap-3">
      {data.map((item,index)=> (
        <Card values = {item} index ={index} handlemouseclick={handlemouseclick} />
      ))}
   </div>
        

  );
}

export default App