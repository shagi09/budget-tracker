import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
const [error,setError]=useState('')
  const navigate=useNavigate()

  const validateForm = () => {
    if ( !email || !password) {
      return 'All fields are required';
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email format';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    return null; // No errors
  };

  async function HandleSubmit(e){
    e.preventDefault()
    const validationError=validateForm();
    if (validationError) {
      setErr(validationError);
      return;
    }
    try{
      const response=await axios.post('http://localhost:5000/login',{email,password},{withCredentials: true})
      navigate('/')

    }
    catch(error){
      console.log(error)
      if (error.response && error.response.data) {
        setError(error.response.data);
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
    }
    
  }
  
  return (
    <div className='register-container'>
      <div className='register'>
        <h1>Sign in</h1>
        {error&&<p> {error}</p>}
        <form action="" onSubmit={HandleSubmit}>
        <input type="email" name='email' placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}
        } />
        <input type="password" name='password' placeholder='Password'value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit' className='edit-btn'>Log in</button>
        </form>




      </div><br />

      <p>Don't have an account?<Link to='/signup'>Register</Link></p>

      
    </div>
  )
}


export default Login

