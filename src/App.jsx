import React from 'react'
import Card from './Components/Card'

function App() {
  const data = [
    {name: "Sajal", profession: "Java Developer", image: "https://images.unsplash.com/photo-1744219792921-a74da6141822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Videh", profession: "CRM", image: "https://images.unsplash.com/photo-1744826874736-54ec3ff61a7b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Sagar", profession: "React", image: "https://images.unsplash.com/photo-1729591518341-f820f3872178?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
    {name: "Ayush", profession: "Node", image: "https://images.unsplash.com/photo-1603127357126-fb1a66a399e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
  ]
  return (
    <div className="w-full h-screen bg-zinc-200 items-center justify-center flex gap-3">
      {data.map((item,index)=> (
        <Card key={index} name={item.name} image={item.image} profession={item.profession} />
      ))}
   </div>
        

  );
}

export default App