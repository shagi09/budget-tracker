import React from 'react'
import Calender from './Calender'

const Transaction = () => {
  const transactions=[
    {
      id:'1',
      amount:'1000',
      category:'bitcoin',
      date:'21/03/2021',
      description:'bitcoin money'
    },
    {
      id:'2',
      amount:'1000',
      category:'bitcoin',
      date:'21/03/2021',
      description:'bitcoin money'
    }
  ]
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className='transaction-container'>
      <h1>Transactions</h1>
       <Calender/>
       {
        transactions.map((transaction)=>{
          return(
            <div style={{display:'flex',gap:'2rem',marginTop:'30px', fontSize:'30px', borderRadius:'15px',backgroundColor:'rgb(32, 32, 31)', padding:'20px'}}key={transaction.id}>
            <div>{transaction.category}</div>
            <div>{transaction.amount}</div>
            <div>{transaction.date}</div>
            <div>{transaction.description}</div>


          </div>

          )

        })
       }



      
    </div>
  )
}

export default Transaction
