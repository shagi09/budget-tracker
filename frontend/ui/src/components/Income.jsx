import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { IoIosAdd } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RiStockLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { SiFreelancer } from "react-icons/si";
import {Link} from 'react-router-dom'
import image from '/src/images/profile.jpg'

const Income = () => {
  const[amount,setAmount]=useState('')
  const[date,setDate]=useState('')
  const[category,setCategory]=useState('')
  const[description,setDescription]=useState('')
  const[incomes,setIncomes]=useState([])


  const [error,setError]=useState('')

async function HandleSubmit (e){
  e.preventDefault()
  const newIncome = {
    amount,
    date,
    category,
    description,
  };
  try{
    setIncomes(prevIncomes => [
      ...prevIncomes,
      { ...newIncome,id: Date.now()  } // Temporarily assign an ID
    ]);

    
    const response=await axios.post('http://localhost:5000/income',newIncome)
    setIncomes(prevIncomes => 
      prevIncomes.map(income => 
        income.id === Date.now() ? response.data : income
      )
    );
    setAmount(''),
    setDate(''),
    setCategory('')
    setDescription('')


    let emptyFieldCount = 0;
      if(amount===''){
        setError('please enter amount')
      }
      if(date===''){
        setError('please enter date')
      }
      if(category===''){
        setError('please select income type')
      }
      if(description===''){
        setError('please enter description')
      }
  }
  catch(err){
    console.log('error adding the data:',err)

  }


}
async function fetchIncomes(){
  try{
    const response=await axios.get('http://localhost:5000/income')
    setIncomes(response.data)
    console.log(response.data)
}
  catch(err){
    console.log(err)

  }

}
useEffect(()=>{
  fetchIncomes()
},[])
 async function HandleDelete(id){
  const incomeToDelete = incomes.find(income => income._id === id);

  // Optimistically remove the income from the state
  const updatedIncomes = incomes.filter(income => income._id !== id);
  setIncomes(updatedIncomes);
    try {
      await axios.delete(`http://localhost:5000/income/${id}`);

    } catch (error) {
      console.error('Error deleting income:', error);
      setIncomes(prevIncomes => [...prevIncomes, incomeToDelete]);
    }
  };

function displayCategoryIcon(category) {
  const categoryIcons = {
    'Investments': <FaBitcoin style={{ fontSize: '25px' }} />,
    'Youtube': <FaYoutube style={{ fontSize: '25px' }} />,
    'Salary': <FaBitcoin style={{ fontSize: '25px' }} />,
    'Stocks': <RiStockLine className='dollar' style={{ fontSize: '25px' }} />,
    'Freelance': <SiFreelancer  className='dollar' style={{ fontSize: '25px' }} />,
    'others': <CiCirclePlus className='dollar' style={{ fontSize: '25px' }} />,

  };

  return categoryIcons[category] || <GoDotFill />;
}



  return (
    <div className='income-container'>

        <h1>incomes</h1>
        <h2>Total income:{amount}$</h2>
        {error && <div style={{backgroundColor: 'red',width:'320px',marginLeft: '100px',marginBottom:'20px',borderRadius: '20px',padding: '10px'}}>{error}</div>}
        <div className='form-container'> 
          <form className='form' action="">
            <input name='amount' type="number" placeholder='income Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} required=''/>
            <input name='date' type="date" placeholder='Enter a Date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <select name="category" type="text" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Salary">Salary</option>
              <option value="Investments">Investments</option>
              <option value="Stocks">Stocks</option>
              <option value="Youtube">Youtube</option>

              <option value="others">others</option>
            </select>
            <input name='description' type="text" placeholder='income Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <button type='submit'onClick={HandleSubmit} className='income-btn'><IoIosAdd style={{fontSize: '20px',padding:'2px'}}/> Add income</button>
          </form>
          <div className='incomes'>
            {
              incomes.map((income)=>(
                <div className='income-box' key={income.id}>
                  <div className='income-category'>{income.category} </div>
                  <div className='income-contents'>
                    <div className='income-icon'>{displayCategoryIcon(income.category)}</div>
                    <div className='income-amount'><FaDollarSign className='dollar'style={{fontSize: '15px'}}/>{income.amount} </div>
                    <div className='income-date'><MdOutlineDateRange style={{fontSize: '15px'}}/>{income.date.split('T')[0]} </div>
                    <div className='income-description'><FaMessage style={{fontSize: '10px'}}/>{income.description} </div>
                    <div className='delete-income'><button className='dlt-btn' onClick={()=>{
                          console.log('Deleting income ID:', income._id)
                          HandleDelete(income._id)}}><MdDelete style={{cursor:'pointer', fontSize: '25px'}}/></button></div>
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
