import React, { useState } from 'react'
import Card from './Components/Card'
import NavBar from './Components/NavBar';

function App() {

const [name,setName]=useState({name: ""});
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(name);
}
  return (
    <form action="" onSubmit={handleSubmit}>
      <input onChange={(event)=>setName({name: event.target.value})} placeholder='name' type='text'></input>
      <input  placeholder='age' type='text'></input>
      <input type='submit'></input>
    </form>
  );
}

export default App