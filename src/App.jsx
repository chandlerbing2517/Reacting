import React from 'react'
import Card from './Components/Card'

function App() {
  const [arr, setarr] = React.useState([1,2,3,4,5,6,7,8,9,10]);

  return (
   <div>
    {arr.map(item=><h1>
          {item}
        </h1>
    )}
   <button onClick={()=>setarr(()=>arr.filter((item,index)=> index!=arr.length-1))} className='px-2 py-1 rounded mt-2 bg-red-300 text-xs text-zinc-200'>Click me</button>
   </div>
        

  );
}

export default App