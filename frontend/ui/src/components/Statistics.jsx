import React from 'react'
import {Chart, defaults as ChartJS, defaults} from 'chart.js/auto'
import {Bar,Doughnut,Line} from 'react-chartjs-2'
import data from '../data/data.json'
import categories from '../data/categories.json'

defaults.maintainAspectRatio=false
defaults.responsive=true



const Statistics = () => {
  return (
    <div className='statistics-container'>
        <div className='bar-chart'>
          <Line
          data={{
            labels:data.map((data)=>data.label),
            datasets:[
              {
                label:"income",
                data:data.map((data)=>data.income),
                backgroundColor: 'green',
                borderColor:'green'
              },
              {
                label:"expense",
                data:data.map((data)=>data.expense),
                backgroundColor: 'red',
                borderColor:'red'
              }
            ]
          }}
          options={{
            plugins:{
              title:{
                display: true,
                text: "Trends",
                color: 'white',
              },
              legend: {
                labels: {
                  color: 'white' // Change legend label color
                }
              }

            },
            scales: {
              x: {
                ticks: {
                  color: 'white' // Change x-axis label color
                }
              },
              y: {
                ticks: {
                  color: 'white' // Change y-axis label color
                }
              }
            },
            
          }}/>



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
                color: 'white'
              },
              legend: {
                labels: {
                  color: 'white' // Change legend label color
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
