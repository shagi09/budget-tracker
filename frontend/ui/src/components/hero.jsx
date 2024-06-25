import React from 'react'
import transaction from'../images/transaction.jpg'
import spending from '../images/spending.jpg'
import income from '../images/income.jpg'

const Hero = () => {
  return (
    < div className='content'>
      <h1>Know Where Your Money <span>Is Going </span></h1>


        <p className='p-1'>Track how you're spending every dollar</p>
            <p className='p-2'>discover trends in your spending to figure out</p>

             <p className='p-3'>how to improve</p>
        <button className='get-started-btn'>Get Started</button>
        <div className='transaction-content'>
          <div className='transaction-image'>
          <img src={transaction} alt="" />
          </div>
          <div className='transaction-header'>
          <h2>Effortless Transaction Tracking</h2>
          <p>Discover the ease of viewing all your transactions in one <br />intuitive dashboard. Stay in control of your spending <br />with real-time updates and never miss a single detail.</p>
          </div>
          </div>
          <div className='spending-content'> 

          <div className='spending-header'>
          <h2>In-Depth Spending Insights</h2>
          <p>Delve into comprehensive statistics that reveal your <br />spending habits. Our detailed reports empower you to make <br />informed decisions and optimize your financial health.</p>
          </div>
          <div className='spending-image'>
          <img src={spending} alt="" />
          </div>
          </div>
          <div className='income-content'> 
          <div className='income-image'>
<img src={income} alt="" />
</div>

<div className='income-header'>
<h2>In-Depth Spending Insights</h2>
<p>Delve into comprehensive statistics that reveal your <br />spending habits. Our detailed reports empower you to make <br />informed decisions and optimize your financial health.</p>
</div>

</div>

      </div>




      
  
  )
}

export default Hero
