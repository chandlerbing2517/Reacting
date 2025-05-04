import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleUser}) {

    const {register,handleSubmit,reset} = useForm();
    const onSubmit = (data)=> {
        handleUser(data)
        reset();
    }

  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10' onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='name' type='input'/>
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='email' type='input'/>
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='image' type='input'/>
            <input type='submit' className='px-5 py-1 rounded-md bg-blue-500 text-semibold text-white mt-4'/>
        </form>
    </div>
  )
}

export default Form
