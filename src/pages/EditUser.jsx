import React from 'react'
import {useForm, } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'

export const EditUser = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate();
  const id = useParams().id;
  const submitHandler = async (data)=>{
      console.log(data)
  }
  return (
   <>
   <form onSubmit={handleSubmit(submitHandler)} style={{display:'flex', gap: '10px'}}>
            <input {...register('name',{required: 'name required'})} type="text" placeholder="name" />
            <input{...register('email',{required: true})} type="text" placeholder="email" />
            <button type="submit">Submit</button>
        </form>
   </>
  )
}
