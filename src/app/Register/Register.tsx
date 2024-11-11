'use client'
import React from 'react'

export const Register = () => {
    const [data,setData]=React.useState({})

    const handleChange=(eve:any)=>{
        const {name,value}=eve.target
        setData({...data,[name]:value})
        
    }

    const fnRegister= async ()=>{
        try{ 
             var dataObj = {
            "data":data
        }
       const res = await fetch('http://localhost:3030/student/register',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(dataObj),

          })
          const result = await res.json()
          console.log(result)
        } catch(ex){
            console.error(ex)
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
