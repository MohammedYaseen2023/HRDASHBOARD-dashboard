// import * as React from 'react';
import { PieChart, pieArcClasses, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import { FromDate, ToDate } from './Signals';
import { Stack } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//
import R_StatusFunc from './R_Status';
import {ChartPieAttend,ChartPiePrecision} from "./ChartPieAttend";


//
export function DateFrom() {
  // console.log(dayjs(fromDate.value).format('DD/MM/YYYY'));
  return (

    <Box dir='rtl' >
      <Box sx={{ display: 'flex' }} >
        <Box p={1} >
          <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
            <label htmlFor="fromDate">من تاريخ   </label>
          </Box>
          <DatePicker
            id="fromDate"
            selected={FromDate.value}
            onChange={(event) => FromDate.value = event}
            dateFormat="dd/MM/yyyy"

          />
        </Box>
        <Box p={1} >
          <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
            <label htmlFor="toDate"> الى تاريخ  </label>
          </Box>

          <DatePicker
            id="toDate"
            selected={ToDate.value}
            onChange={(event) => ToDate.value = event}
            dateFormat="dd/MM/yyyy"
          />
        </Box>
      </Box>
    </Box>

  );
}

function App() {
  return (
    <div dir="rtl" spacing={3}>

      <DateFrom fromDate={fromDate} />
      <Stack direction={'row'}  >
        <Box width={400} >
          <Card sx={{ minWidth: 275 }} >
            <CardContent >

              <Typography dir="rtl" sx={{ fontSize: 15 ,bgcolor :"#e3f2fd",borderRadius:"8px"}} color="text.primary" gutterBottom>
                 الحضور والانصراف للفترة من  {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
              </Typography>
              <ChartPiePrecision />
            </CardContent>
          </Card>

        </Box>
        <Box width={400}>
          <Card sx={{ minWidth: 275 }} >
            <CardContent>

              <Typography dir="rtl" sx={{ fontSize: 15 ,bgcolor :"#e3f2fd",borderRadius:"8px" }} color="text.primary" gutterBottom>
                 الحضور والانصراف للفترة من  {dayjs(fromDate).format('DD/MM/YYYY')} و {dayjs(toDate).format('DD/MM/YYYY')}
              </Typography>
              <ChartPieAttend />
            </CardContent>
          </Card>

        </Box>

      </Stack>
      {/* </Box> */}
      {/* <SimpleMediaQuery /> */}
      <R_StatusFunc />
    </div>
  );
}

export default App;

//
