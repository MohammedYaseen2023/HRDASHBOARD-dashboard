// import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
 
const data = [
  { id: 0, value: 40,label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
  { id: 2, value: 20, label: 'المتاخرين' },
];
// const data = [
//   { id: 6,date : '07/11/2023', Attend: 60,Absence:40 , Late:20},
// ];

 function PieActiveArc() {
  // const newData = data.filter((item) => item.date <= '07/11/2023' && item.date >= '01/05/2022' );
  // console.log(dayjs(fromDate.value).format('DD/MM/YYYY') );
 
  // const newData = data.filter((item) => item.date >= dayjs(fromDate.value).format('DD/MM/YYYY') && item.date <= dayjs(toDate.value).format('DD/MM/YYYY') ).map((item) => ({ ...item, value: item.Attend }));
  // console.log(newData);
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

export default  PieActiveArc();