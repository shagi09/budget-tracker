import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {
  const[user,setUser]=useState({
    email:'',
    password:''
  })
const [error,setError]=useState('')
  const navigate=useNavigate()
  function HandleChange(e){
    setUser((previousState)=>(
      {
        ...previousState,[e.target.name]:e.target.value

      }
    ))

  }
  function HandleSubmit(e){
    e.preventDefault()
    
  }
  
  return (
    <div className='register-container'>
      <div className='register'>
        <h1>Sign in</h1>
        {error&&<p> {error}</p>}
        <form action="" onSubmit={HandleSubmit}>
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <button type='submit' className='edit-btn'>Log in</button>
        </form>




      </div><br />

      <p>Don't have an account?<Link to='/signup'>Register</Link></p>

      
    </div>
  )
}


export default Login

