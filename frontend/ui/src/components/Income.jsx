import React from 'react'
import { IoIosAdd } from "react-icons/io";

const Income = () => {
  return (
    <div className='income-container'>
        <h1>Incomes</h1>
        <h2>Total Income: $10,000</h2>
        <div className='form-container'> 
          <form className='form' action="">
            <input type="text" placeholder='Income type' />
            <input type="number" placeholder='Income Amount' />
            <input type="date" placeholder='Enter a Date'/>
            <select name="" id="">
              <option value="">Salary</option>
              <option value="">Freelance</option>
              <option value="">Investments</option>
              <option value="">Stocks</option>
              <option value="">Youtube</option>
              <option value="">Others</option>
            </select>
            <input type="text" placeholder='Income Description' />
            <button className='income-btn'><IoIosAdd style={{fontSize: '20px',padding:'2px'}}/> Add Income</button>
          </form>
        </div>

      
    </div>
  )
}

export default Income
