import React from 'react'
import Card from './Components/Card'

function App() {
  const [arr, setarr] = React.useState([{name:"John", age: 20}, {name:"Doe", age: 25}, {name:"Jane", age: 30}]);

  return (
   <div>
    {arr.map(item=> 
    <div>
      <h1>
          {item.name}
        </h1>
        <h1>
          {item.age}
        </h1>
    </div>
    )}
   <button onClick={()=>setarr(()=> arr.map(item=> item.name === "John" ?  {name:"John", age: item.age+1} : item ))} className='px-2 py-1 rounded mt-2 bg-red-300 text-xs text-zinc-200'>Click me</button>
   </div>
        

  );
}

export default App