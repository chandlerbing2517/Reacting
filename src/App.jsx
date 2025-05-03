import React, { useRef } from 'react'
import Card from './Components/Card'
import NavBar from './Components/NavBar';

function App() {
const name= useRef(null);
const age= useRef(null);

const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(name.current.value);
}
  return (
    <form action="" onSubmit={handleSubmit}>
      <input ref={name} placeholder='name' type='text'></input>
      <input ref={age} placeholder='age' type='text'></input>
      <input type='submit'></input>
    </form>
  );
}

export default App