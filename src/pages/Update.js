import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Update = () => {
    const[book,setBook]=useState({
        title:'',
        desc:'',
        cover:''
    })
    const navigate = useNavigate()
    const handleChange=(e)=>{
    setBook(prev=>({
        ...prev,[e.target.name]: e.target.value
    }))   
    }
   const handleClick=async e=>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:8800/books",book)
        navigate("/")
    }catch(err){
        console.log(err)
    }
   }
  return (
    <div className='form'>
        <h1>Update the Book</h1>
        <input type="text" placeholder="title" onChange={handleChange} name='title'/>
        <input type="text" placeholder="desc"onChange={handleChange} name='desc'/>
        <input type="text" placeholder="cover"onChange={handleChange} name='cover'/>
        <button  className='formButton' onClick={handleClick}>Update</button>

    </div>
  )
}

export default Update