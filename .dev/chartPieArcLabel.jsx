// import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const data1 = [
{ id: 0, value: 40,label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
  { id: 2, value: 20, label: 'المتاخرين' },

];

const size = {
  // width: 350,
  height: 300,
};

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data: data1,
        },
      ]}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: 0,
        },
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      width={400}
      height={300}
    />
  );
}