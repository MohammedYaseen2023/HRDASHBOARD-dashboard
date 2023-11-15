import React, { useEffect, useState } from "react"
import {AttendCount,AbsenceCount,LateCount} from './Signals';

const AppTestApi = () => {
  //const [users, setUsers] = useState([])

    const  fetchUserData = () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://tstar.pagekite.me/api/d")    
      .then(response => {
        // console.log(response.json());
        return response.json();
        
     })
      .then(data => {
       // setUsers(data) 
        AbsenceCount.value=data.abscence;
        AttendCount.value=data.attendance;
        LateCount.value=data.late;

      })
  }
//    {users.map(user =>AttendCount.value=user.attendance)}
//   {users.map(user =>AbsenceCount.value=user.abscence)}
//   {users.map(user =>LateCount.value=user.late)}; 
   
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