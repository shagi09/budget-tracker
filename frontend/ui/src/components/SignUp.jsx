import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const[err,setErr]=useState('')
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
        <form action="" onSubmit={HandleSubmit}>
        <h1>Sign Up</h1>
        {err&&<p> {err}</p>}
        <input type="text" name='name' placeholder='Full Name'value={user.name} onChange={HandleChange} />
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <input type="password" name='confirmPassword' placeholder='Confirm Password'value={user.confirmPassword} onChange={HandleChange} />
        <button type='submit' className='edit-btn'>Register</button>

        </form>




      </div><br />

      <p>Already have an account?<Link to='/signin' style={{ color: 'green' }}>login</Link></p>

      
    </div>
  )
}

export default Register

