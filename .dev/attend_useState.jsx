// import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'

import React, { useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file


export function DateFrom({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) {
  const handleFromChange = (date) => {

    // onFromDateChange(dayjs(date).format('DD/MM/YYYY'))
    onFromDateChange(date);
  }
  const handleToChange = (date) => {

    // onToDateChange(dayjs(date).format('DD/MM/YYYY'))
    onToDateChange(date);
  }

  return (

    <Box sx={{ display: 'flex' }} >
      <Box p={1} >
        <label htmlFor="fromDate">من تاريخ :</label>
        <DatePicker
          id="fromDate"
          selected={fromDate}
          onChange={handleFromChange}
          dateFormat="dd/MM/yyyy"

        />
      </Box>
      <Box p={1}>
        <label htmlFor="toDate">الى تاريخ:</label>
        <DatePicker
          id="toDate"
          selected={toDate}
          onChange={handleToChange}
          dateFormat="dd/MM/yyyy"
        />
      </Box>
    </Box>
  );
}
//



//


// const data = [
//   { id: 0, value: 40, date : '1/1/2022',label: 'الحضور' },
//   { id: 1, value: 15, label: 'الغياب' },
//   { id: 2, value: 20, label: 'المتاخرين' },
// ];
const data = [
  { id: 0,date : '01/01/2022', Attend: 40,Absence:20 , Late:10},
  { id: 1,date : '01/02/2022', Attend: 40,Absence:20 , Late:10},
  { id: 2,date : '01/03/2022', Attend: 40,Absence:20 , Late:10},
  { id: 3,date : '01/04/2022', Attend: 40,Absence:20 , Late:10},
  { id: 4,date : '01/05/2022', Attend: 40,Absence:20 , Late:10},
  { id: 5,date : '01/11/2023', Attend: 40,Absence:20 , Late:10},
  { id: 6,date : '07/11/2023', Attend: 60,Absence:40 , Late:20},
];

export function PieActiveArc( fromDate , toDate) {
  // const newData = data.filter((item) => item.date <= '07/11/2023' && item.date >= '01/05/2022' );
  console.log(dayjs(fromDate.value).format('DD/MM/YYYY') );
 
  const newData = data.filter((item) => item.date >= dayjs(fromDate.value).format('DD/MM/YYYY') && item.date <= dayjs(toDate.value).format('DD/MM/YYYY') );
  console.log(newData);
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: "gray",
        },
      }}
      height={300}
    />
  );
}

function App() {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  return (
    <div>
      <DateFrom fromDate={fromDate} toDate={toDate} onFromDateChange={(value) => setFromDate(value)}
        onToDateChange={(value) => setToDate(value)}
      />

      <br />
      <br />
      <br />
      <Box dir="rtl" sx={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'secondary.main' }} >
        كشف الحضور والانصراف للفترة من {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
      </Box>

      <Box sx={{ pt: 2 }} />
      <PieActiveArc fromDate={fromDate} toDate={toDate} />

    </div>
  );
}

export default App;

//
