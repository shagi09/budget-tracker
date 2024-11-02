import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import image from '/src/images/profile.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
  const navigate=useNavigate()
  function HandleSignIn(){
    navigate('/signup')

  }
  async function HandleLogOut(){
    try{
      await axios.post('http://localhost:5000/logout',{},{withCredentials:true})
      localStorage.removeItem('token')
      navigate('/signin')
}
    catch(err){
      console.log('error',err)

    }

  }
  return (
    <div>
        <nav>
            <div ><Link className='logo-container' to='/'><img className='logo' src={logo} alt="" /><p ><b>KOTABI</b></p></Link></div>
            <div className='profile'>
              <Link to='/userprofile' className='user-profile'>
              <img src={image} alt="" />
              <div className='text'>Profile</div>
              </Link>

            </div>

          
            
            <ul>

                <li><Link to='/statistics'>Statistics</Link></li>
                <li><Link to='/transaction'>Transactions</Link></li>
                <li><Link to='/income'>Incomes</Link></li>
                <li><Link to='/expense'>Expenses</Link></li>
                <li><button className='btn' onClick={HandleSignIn}>Sign Up</button></li>
                <button className='log-out' onClick={HandleLogOut}>Log Out</button>
            </ul>

        </nav>

      
    </div>
  )
}

export default Header
