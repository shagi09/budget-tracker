import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import image from '/src/images/profile.jpg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  function HandleSignIn(){
    navigate('/signup')

  }
  return (
    <div>
        <nav>
            <div className='logo-container'><img className='logo' src={logo} alt="" /><p><b>KOTABI</b></p></div>
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
                <button className='log-out'>Log Out</button>
            </ul>

        </nav>

      
    </div>
  )
}

export default Header
