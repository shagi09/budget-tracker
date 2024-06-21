import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
        <nav>
            <div className='logo-container'><img className='logo' src={logo} alt="" /><p>Kotabi</p></div>
            
            <ul>
                <li>Statistics</li>
                <li>Transactions</li>
                <li>Incomes</li>
                <li>Expenses</li>
                <li><button className='btn'>Sign Up</button></li>
            </ul>

        </nav>

      
    </div>
  )
}

export default Header
