import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Chart, defaults as ChartJS, defaults} from 'chart.js/auto'
import {Bar,Doughnut,Line} from 'react-chartjs-2'
import data from '../data/data.json'
import categories from '../data/categories.json'

defaults.maintainAspectRatio=false
defaults.responsive=true



const Statistics = () => {
  const [monthlyData, setMonthlyData] = useState({ income: [], expense: [] });
  const [error, setError] = useState(null);

  const fetchMonthlyData = async () => {
    try {
      const [incomeResponse, expenseResponse] = await Promise.all([
        axios.get('http://localhost:5000/income/all', { withCredentials: true }),
        axios.get('http://localhost:5000/expense/all', { withCredentials: true }),
      ]);

      console.log('Income data:', incomeResponse.data); // Debugging line
      console.log('Expense data:', expenseResponse.data); // Debugging line
      const expenseData = expenseResponse.data.map(exp => exp.amount); 
      const incomeData = incomeResponse.data.map(inc => inc.amount); 

      setMonthlyData({
        income: incomeData,
        expense: expenseData,
      });
    } catch (err) {
      console.error('Error fetching monthly data:', err.response ? err.response.data : err.message);
      setError('Failed to fetch monthly data.');
    }
  };

  useEffect(() => {
    fetchMonthlyData();
  }, []); // Fetch data once on component mount
  return (
    <div className='statistics-container'>
      <div className='bar-chart'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Line
          data={{
            labels: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            datasets: [
              {
                label: "Income",
                data: monthlyData.income,
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                fill: true,
              },
              {
                label: "Expense",
                data: monthlyData.expense,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'red',
                fill: true,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Monthly Income and Expenses",
                color: 'white',
                font: {
                  size: 35,
                },
              },
              legend: {
                labels: {
                  color: 'white',
                  font: {
                    size: 15,
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: 'white',
                },
              },
              y: {
                ticks: {
                  color: 'white',
                },
              },
            },
          }}
        />
      </div>

        <div className='pie-chart'>
        <Doughnut
          data={{
            labels:categories.map((category)=>category.label),
            datasets:[
              {
                label:"income",
                data:categories.map((category)=>category.income),
                backgroundColor: 'green',
                borderColor:'green'
              },
              {
                label:"expense",
                data:categories.map((category)=>category.expense),
                backgroundColor: 'red',
                borderColor:'red'
              }
            ]
          }}
          options={{
            plugins:{
              title:{
                display: true,
                text: "Categories",
                color: 'white',
                font: {
                  size: 35// Increase title font size
                }
        
              },
              legend: {
                labels: {
                  color: 'white',
                  font: {
                    size: 15 // Increase title font size
                  }
           // Change legend label color
                }
              }

            },
          }}
          />
        </div>
      
    </div>
  )
}

export default Statistics
