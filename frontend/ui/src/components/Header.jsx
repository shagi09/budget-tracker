import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <div className='logo-container'><img className='logo' src={logo} alt="" /><p>Kotabi</p></div>
            
            <ul>
                <li><Link to='/statistics'>Statistics</Link></li>
                <li><Link to='/transaction'>Transactions</Link></li>
                <li><Link to='/income'>Incomes</Link></li>
                <li><Link to='/expense'>Expenses</Link></li>
                <li><button className='btn'>Sign Up</button></li>
            </ul>

        </nav>

      
    </div>
  )
}

export default Header
