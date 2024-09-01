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
import { MdFastfood } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";
import { FaHouseChimney } from "react-icons/fa6";
import { SiDcentertainment } from "react-icons/si";
import { CiCirclePlus } from "react-icons/ci";
import { GiHealthNormal } from "react-icons/gi";
import { FcDebt } from "react-icons/fc";
import {Link} from 'react-router-dom'
import image from '/src/images/profile.jpg'

const Expense = () => {
  const[amount,setAmount]=useState('')
  const[date,setDate]=useState('')
  const[category,setCategory]=useState('')
  const[description,setDescription]=useState('')
  const[expenses,setExpenses]=useState([])


  const [error,setError]=useState('')

async function HandleSubmit (e){
  e.preventDefault()
  const newExpense = {
    amount,
    date,
    category,
    description,
  };
  try{
    setExpenses(prevExpenses => [
      ...prevExpenses,
      { ...newExpense,id: Date.now()  } // Temporarily assign an ID
    ]);

    
    const response=await axios.post('http://localhost:5000/expense',newExpense)
    setExpenses(prevExpenses => 
      prevExpenses.map(expense => 
        expense.id === Date.now() ? response.data : expense
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
async function fetchExpenses(){
  try{
    const response=await axios.get('http://localhost:5000/expense')
    setExpenses(response.data)
    console.log(response.data)
}
  catch(err){
    console.log(err)

  }

}
useEffect(()=>{
  fetchExpenses()
},[])
 async function HandleDelete(id){
  const expenseToDelete = expenses.find(expense => expense._id === id);

  // Optimistically remove the expense from the state
  const updatedExpenses = expenses.filter(expense => expense._id !== id);
  setExpenses(updatedExpenses);
    try {
      await axios.delete(`http://localhost:5000/expense/${id}`);

    } catch (error) {
      console.error('Error deleting expense:', error);
      setExpenses(prevExpenses => [...prevExpenses, expenseToDelete]);
    }
  };

function displayCategoryIcon(category) {
  const categoryIcons = {
    'Investments': <FaBitcoin style={{ fontSize: '25px' }} />,
    'Food and Groceries': <MdFastfood className='dollar' style={{ fontSize: '25px' }} />,
    'House Rent': <FaHouseChimney className='dollar' style={{ fontSize: '25px' }} />,
    'Transportation': <MdEmojiTransportation className='dollar' style={{ fontSize: '25px' }} />,
    'Stocks': <RiStockLine className='dollar' style={{ fontSize: '25px' }} />,
    'Health': <GiHealthNormal className='dollar' style={{ fontSize: '25px' }} />,
    'Entertainment': <SiDcentertainment className='dollar' style={{ fontSize: '25px' }} />,
    'Education': <MdCastForEducation className='dollar' style={{ fontSize: '25px' }} />,
    'debt': <FcDebt className='dollar' style={{ fontSize: '25px' }} />,
    'others': <CiCirclePlus className='dollar' style={{ fontSize: '25px' }} />,

  };

  return categoryIcons[category] || <GoDotFill />;
}



  return (
    <div className='income-container'>

        <h1>Expenses</h1>
        <h2>Total Expense:-{amount}$</h2>
        {error && <div style={{backgroundColor: 'red',width:'320px',marginLeft: '100px',marginBottom:'20px',borderRadius: '20px',padding: '10px'}}>{error}</div>}
        <div className='form-container'> 
          <form className='form' action="">
            <input name='amount' type="number" placeholder='Expense Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} required=''/>
            <input name='date' type="date" placeholder='Enter a Date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <select name="category" type="text" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
              <option value='House Rent'>House Rent</option>
              <option value="Transportation">Transportation</option>
              <option value="Investments">Investments</option>
              <option value="Stocks">Stocks</option>
              <option value="Food and Groceries">Food and Groceries</option>
              <option value="Health">Health</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Education">Education</option>
              <option value="debt">debt</option>
              <option value="others">others</option>
            </select>
            <input name='description' type="text" placeholder='Expense Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <button type='submit'onClick={HandleSubmit} className='expense-btn'><IoIosAdd style={{fontSize: '20px',padding:'2px'}}/> Add Expense</button>
          </form>
          <div className='incomes'>
            {
              expenses.map((expense)=>(
                <div className='income-box' key={expense.id}>
                  <div className='income-category'>{expense.category} </div>
                  <div className='income-contents'>
                    <div className='income-icon'>{displayCategoryIcon(expense.category)}</div>
                    <div className='income-amount'><FaDollarSign className='dollar'style={{fontSize: '15px'}}/>{expense.amount} </div>
                    <div className='income-date'><MdOutlineDateRange style={{fontSize: '15px'}}/>{expense.date.split('T')[0]} </div>
                    <div className='income-description'><FaMessage style={{fontSize: '10px'}}/>{expense.description} </div>
                    <div className='delete-income'><button className='dlt-btn' onClick={()=>{
                          console.log('Deleting expense ID:', expense._id)
                          HandleDelete(expense._id)}}><MdDelete style={{cursor:'pointer', fontSize: '25px'}}/></button></div>
                  </div>


                </div>
              ))
            }


          </div>
        </div>

      
    </div>
  )
}

export default Expense
