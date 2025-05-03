import React from 'react'
import { useForm } from 'react-hook-form'
import Card from './Components/Card'
import NavBar from './Components/NavBar';
import { data } from 'autoprefixer';

function App() {

const {register, handleSubmit} = useForm()
  return (
    <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
      <input {...register('name')} placeholder='name' type='text'></input>
      <input  placeholder='age' type='text'></input>
      <input type='submit'></input>
    </form>
  );
}

export default App