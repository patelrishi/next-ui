'use client'
import React,{useState} from 'react'

export const Register = () => {
    const [data,setData]=useState({})

    const handleChange=(eve: any)=>{
        const {name,value}=eve.target
        setData({...data,[name]:value})
        
    }

    const fnRegister= async ()=>{
        try{ 
             var dataObj = {
            "data":data
        } 
       const res = await fetch('https://next-server-theta.vercel.app/student/register',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(dataObj),

          })
          const result = await res.json()
          const { acknowledged,insertedId } = result;
          if (acknowledged && insertedId) {
            alert("success")
          } else {
            alert("fail")
          }
          
        } catch(ex: any){
            console.error(ex)
            alert(ex.message)
        }
    }

  return (
    <div>
    <h3>Register</h3><br/>
    <p>
        <b>Name:</b> <input name='name' onChange={handleChange} />
    </p><br/>
    <p>
        <b>Roll No:</b> <input name='roll' type='number' onChange={handleChange} />
    </p><br/>
    <p>
        <b>Location:</b> <input name='loc' onChange={handleChange} />
    </p><br/>
    <p>
        <b>comments :</b> <textarea name='textarea' onChange={handleChange} />
    </p><br/>

    <p>
        <button  onClick={fnRegister} > Registration</button>
    </p>

    </div>
  )
}
