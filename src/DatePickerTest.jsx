import   React, { useState }  from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

   import {AttendCount,AbsenceCount,LateCount,FromDate,ToDate} from './Signals';
 

/*export default function ClearableProp() {
  const [cleared, setCleared] = React.useState(false);
  
  AttendCount.value=100;
  AbsenceCount.value=10;
  LateCount.value=20;
 
   React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);

      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'end',
          position: 'relative',
        }}
      >
        <DemoItem  label="التاريخ">
         <DatePicker
            sx={{ width: 260 }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </DemoItem>

        {cleared && (
          <Alert
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>
  );
}*/

export function DateFrom() {
    // console.log(dayjs(fromDate.value).format('DD/MM/YYYY'));
    return (
  
      <Box dir='rtl' >
        <Box sx={{ display: 'flex' }} >
          <Box p={1} >
            <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
              <label htmlFor="fromDate">التاريخ   </label>
            </Box>
            <DatePicker
              id="fromDate"
              selected={FromDate.value}
              onChange={(event) => FromDate.value = event}
              dateFormat="dd/MM/yyyy"
  
            />
            {/* <Alert1 /> */}
          </Box>
          {/* <Box p={1} >
            <Box sx={{ textAlign: 'center', fontWeight: 'bold' }} >
              <label htmlFor="toDate"> الى تاريخ  </label>
            </Box>
  
            <DatePicker
              id="toDate"
              selected={ToDate.value}
              onChange={(event) => ToDate.value = event}
              dateFormat="dd/MM/yyyy"
            />
          </Box> */}
        </Box>
      </Box>
  
    );
  }
  
  export function Alert1(){
    return FromDate
  }


  export default DateFrom;