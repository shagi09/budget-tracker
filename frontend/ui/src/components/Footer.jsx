import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer-icons'>
                <ul>
                    <li><FaTwitter/></li>
                    <li><FaFacebookF/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaInstagram/></li>
                </ul>
            </div>
            <div className='footer-nav'>
                <ul>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/transaction'>Transaction</Link></li>
                    <li><Link to='/income'>Incomes</Link></li>
                    <li><Link to='/expense'>Expenses</Link></li>
                </ul>
            </div>
            <div className='copyright'>© KOTABI APP, 2024. All Rights Reserved.</div>
        </footer>
      
    </div>
  )
}

export default Footer
