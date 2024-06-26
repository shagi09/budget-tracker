import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Income = () => {
  const [formData,setFormData]=useState({
    amount:'',
    date:'',
    category:'',
    description:''

  })

  function HandleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

}
  const Incomes=[
    {
      id: 1,
      amount: '2000 birr',
      date:'22/04/2022',
      category:'bitcoin',
      description:'this is bitcoin income'

    },
    {
      id: 1,
      amount: '2000 birr',
      date:'22/04/2022',
      category:'bitcoin',
      description:'this is bitcoin income'

    },
    {
      id: 1,
      amount: '2000 birr',
      date:'22/04/2022',
      category:'bitcoin',
      description:'this is bitcoin income'

    }
  ]
  return (
    <div className='income-container'>
        <h1>Incomes</h1>
        <h2>Total Income:{formData.amount}$</h2>
        <div className='form-container'> 
          <form className='form' action="">
            <input name='amount' type="number" placeholder='Income Amount' value={formData.amount} onChange={HandleChange}/>
            <input name='date' type="date" placeholder='Enter a Date' value={formData.date} onChange={HandleChange}/>
            <select name="category" id="" value={formData.category} onChange={HandleChange}>
              <option value='Salary'>Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Investments">Investments</option>
              <option value="Stocks">Stocks</option>
              <option value="Youtube">Youtube</option>
              <option value="Others">Others</option>
            </select>
            <input name='description' type="text" placeholder='Income Description' value={formData.description} onChange={HandleChange}/>
            <button className='income-btn'><IoIosAdd style={{fontSize: '20px',padding:'2px'}}/> Add Income</button>
          </form>
          <div className='incomes'>
            {
              Incomes.map((income)=>(
                <div className='income-box' key={Incomes.id}>
                  <div className='income-category'><GoDotFill/>{income.category} </div>
                  <div className='income-contents'>
                    <div className='income-icon'><FaBitcoin style={{fontSize: '25px'}}/></div>
                    <div className='income-amount'><FaDollarSign style={{fontSize: '15px'}}/>{income.amount} </div>
                    <div className='income-date'><MdOutlineDateRange style={{fontSize: '15px'}}/>{income.date} </div>
                    <div className='income-description'><FaMessage style={{fontSize: '12px'}}/>{income.description} </div>
                    <div className='delete-income'><button className='dlt-btn'><MdDelete style={{fontSize: '25px'}}/></button></div>
                  </div>


                </div>
              ))
            }


          </div>
        </div>

      
    </div>
  )
}

export default Income
