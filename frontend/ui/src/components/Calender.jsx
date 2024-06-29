import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [visitedDays, setVisitedDays] = useState(new Set());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
    setVisitedDays((prevVisitedDays) => new Set([...prevVisitedDays, date.toString()]));
  };
  const isVisited = (date) => {
    return visitedDays.has(date.toString());
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
        renderDay={(day, _selectedDays, pickersDayProps) => (
            <div
              {...pickersDayProps}
              style={{
                backgroundColor: isVisited(day) ? 'white' : 'inherit',
              }}
            >
              {day.format('D')}
            </div>)}

        sx={{
          '& .MuiPickersDay-root': {
            fontSize: '1rem',
            color: 'white',
            backgroundColor: (date) => isVisited(date) ? 'green' : 'inherit',
          },
          '& .MuiCalendarPicker-root': {
            padding: '1rem',
            width:'100%',
            maxWidth:'800px'
          },
          '& .MuiTypography-caption': {
            fontSize: '1rem', // Set the font size for the day names
            color:'white'
          },
          '& .MuiIconButton-root': {
            color: 'white', // Set the color of the "<>" buttons
          },
        }}
      />
    </LocalizationProvider>

  );
};

export default Calendar;