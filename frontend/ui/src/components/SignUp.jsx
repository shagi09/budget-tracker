import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[err,setErr]=useState('')
  const navigate=useNavigate()

  const validateForm = () => {
    if (!name || !email || !password) {
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
    const validationError = validateForm();
    if (validationError) {
      setErr(validationError);
      return;
    }
    try{
      await axios.post('http://localhost:5000/signup',{name,email,password},{withCredentials: true})
      setName(''),
      setEmail(''),
      setPassword('')
      navigate('/signin');

    }
    catch(err){
      console.log(err)
      setErr('Registration failed. Please try again.');
    }



    }
  return (
    <div className='register-container'>
      <div className='register'>
        <form action="" onSubmit={HandleSubmit}>
        <h1>Sign Up</h1>
        {err&&<p> {err}</p>}
        <input type="text" name='name' placeholder='Full Name'value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" name='email' placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" name='password' placeholder='Password'value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit' className='edit-btn'>Register</button>

        </form>




      </div><br />

      <p>Already have an account?<Link to='/signin' style={{ color: 'green' }}>login</Link></p>

      
    </div>
  )
}

export default Register

