import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = ({ selectedDate, handleDateChange, isVisited }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange} // Ensure this is correctly set
        renderDay={(day, _selectedDays, pickersDayProps) => (
          <div
            {...pickersDayProps}
            style={{
              backgroundColor: isVisited(day) ? 'rgba(0, 255, 0, 0.3)' : 'inherit', // Example styling for visited days
            }}
          >
            {day.format('D')}
          </div>
        )}
        sx={{
          '& .MuiPickersDay-root': {
            fontSize: '1rem',
            color: 'white',
          },
          '& .MuiCalendarPicker-root': {
            padding: '1rem',
            maxWidth: '800px',
            color: 'white',
          },
          '& .MuiTypography-caption': {
            fontSize: '1rem', // Set the font size for the day names
            color: 'white',
          },
          '& .MuiIconButton-root': {
            color: 'white', // Set the color of the navigation buttons
          },
          '& .MuiButtonBase-root': {
            color: 'white', // Change month selector color
          },
          '& .MuiCalendarPicker-header': {
            color: 'white', // Change header color
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;