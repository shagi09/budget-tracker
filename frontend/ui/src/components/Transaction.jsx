import React from 'react'
import Calender from './Calender'

const Transaction = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className='transaction-container'>
      <h1>Transactions</h1>
       <Calender/>
      
    </div>
  )
}

export default Transaction
