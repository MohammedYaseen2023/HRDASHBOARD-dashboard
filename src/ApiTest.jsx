import React, { useEffect, useState } from "react"
import {AttendCount,AbsenceCount,LateCount} from './Signals';

const AppTestApi = () => {
  const [data, setData] = useState([])

    const  fetchUserData = () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://tstar.pagekite.me/api/d")    
      .then(response => {
        // console.log(response.json());
        return response.json();
        
     })
      .then(data => {
        setData(data) 
      })
  }
//   {data.map(dat =>AttendCount.value=dat.attendance)}
//   {data.map(dat =>AbsenceCount.value=dat.abscence)}
//   {data.map(dat =>LateCount.value=dat.late)};
   

  {data.map(dat =>AttendCount.value=1000)}
  {data.map(dat =>AbsenceCount.value=999)}
  {data.map(dat =>LateCount.value=998)};

  useEffect(() => { 
    fetchUserData()
   //.then(data => console.log(data));
  }, [])

  return (
    <>
    {/* {users.map(user =>AttendCount.value=user.attendance)}
    {users.map(user =>AbsenceCount.value=user.abscence)}
    {users.map(user =>LateCount.value=user.late)} */}
     
     </>
    // <div>
    //   {users.length > 0 && (

    //     <ul>
    //       {users.map(user => (
    //         <li key={user.attendance}>{user.attendance}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
  
}
 
export default AppTestApi;