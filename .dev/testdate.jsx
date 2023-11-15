import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function MyDatePicker() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <div>
      <label htmlFor="fromDate">From Date:</label>
      <DatePicker
        id="fromDate"
        selected={fromDate}
        onChange={handleFromDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select From Date"
      />

      <label htmlFor="toDate">To Date:</label>
      <DatePicker
        id="toDate"
        selected={toDate}
        onChange={handleToDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select To Date"
      />
    </div>
  );
}

export default MyDatePicker;