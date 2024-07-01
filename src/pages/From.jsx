import React from "react"
import {useForm} from 'react-hook-form'


export const Form = ()=>{
    const {register, handleSubmit} = useForm()

    const submitHandler = async (data)=>{
        console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(submitHandler)} style={{display:'flex', gap: '10px'}}>
            <input {...register('name',{required: 'name required'})} type="text" placeholder="name" />
            <input{...register('email',{required: true})} type="text" placeholder="email" />
            <button type="submit">Submit</button>
        </form>
    
        </>
    )
}