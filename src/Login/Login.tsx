import React,{useState} from 'react'
import { Ajax } from '@/Services/Ajax'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const Login = () => {
  const dispatch = useDispatch()
const [data,setData]=useState({})

  const handleChange =(eve: any)=> {
    const {id,value} = eve.target
    setData({
      ...data,
      [id]:value
    })
  }
  const handleClick = async ()=> {
    try{
   const res = await Ajax.sendPostReq("student/login", data)
   console.log(res)
   if(res?.data?.length > 0) {
    if(typeof window !== 'undefined'){
      sessionStorage.user = res?.data?.[0]?.uid
    }
    
     dispatch ({type:"LOGIN",payload:{isLoggedIn:true,user:res?.data?.[0]?.uid}})
   } else{
    alert("please check uid and pwd")
   }
  } catch(ex){

  }
  }
  return (
    <div>
        <p><b>UserID:</b> <input  id="uid" onChange={handleChange} /></p>
        <p><b>Password:</b> <input type="password" id="pwd" onChange={handleChange}  /></p>
        <button onClick={handleClick} >LogIn</button>
    </div>
  )
}
