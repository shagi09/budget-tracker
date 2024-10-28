import React, { useState } from 'react';
import axios from 'axios';
import Calendar from './Calendar'; // Assuming Calendar is your date picker component

const Transactions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [visitedDays, setVisitedDays] = useState(new Set());
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setVisitedDays((prevVisitedDays) => new Set([...prevVisitedDays, date.toString()]));

    // Fetch expenses for the selected date
    if (date) {
      fetchExpensesForDate(date);
    }
  };

  const isVisited = (date) => {
    return visitedDays.has(date.toString());
  };

  const fetchExpensesForDate = async (date) => {
    try {
      const formattedDate = date.format('YYYY-MM-DD'); // Ensure the date is in the correct format
      const response = await axios.post('http://localhost:5000/expense/date', { date: formattedDate }, { withCredentials: true });
      setExpenses(response.data.expenses);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Error fetching expenses:', err);
      setError('Failed to fetch expenses. Please try again.');
    }
  };

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'white'}}>Transactions</h1>
      <Calendar 
        selectedDate={selectedDate} 
        handleDateChange={handleDateChange} 
        visitedDays={visitedDays} 
        isVisited={isVisited} // Pass the isVisited function
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {expenses.length > 0 ? (
        <ul>
          {expenses.map(expense => (
            <li key={expense._id}>
              <p style={{backgroundColor:'brown',color:'white',width:'700px',borderRadius:'20px',marginLeft:'400px'}}>{expense.category}: ${expense.amount} - {expense.description} on {expense.date.split('T')[0]}</p>
            </li>
          ))}
        </ul>
      ) : (
        selectedDate && <p>No expenses found for {selectedDate.format('YYYY-MM-DD')}.</p>
      )}
    </div>
  );
};

export default Transactions;