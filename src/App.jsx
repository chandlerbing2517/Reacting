import React from 'react'
import Card from './Components/Card'

function App() {
  const [score, setScore] = React.useState({name: "sajal", isAllowed: false});

  return (
   <div>
   <h1 className='p-4'>{score.name}</h1>
   <h1 className='p-4'>{score.isAllowed.toString()}</h1>
   <button onClick={()=>{
    setScore({...score, isAllowed: !score.isAllowed})
  }} className={`px-2 py-1 rounded mt-2 ${score.isAllowed ? 'bg-red-300' : 'bg-blue-300'} text-xs text-zinc-200`}>Click me</button>
   </div>
        

  );
}

export default App