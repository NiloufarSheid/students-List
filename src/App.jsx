import React, { useState } from "react";
import "./App.css";
import Students from "./components/students/Students"




const App=()=> {
const [studentsState,setStudents]=useState([

  {id:0,name:"niloofar",classNumber:102,phoneNumber:1234,email:"sheidniloufar@yahoo.com"},
  {id:1,name:"sara",classNumber:204,phoneNumber:4567,email:"shayasara@yahoo.com"},
  {id:2,name:"maryam",classNumber:307,phoneNumber:8976,email:"dehqanimaryam@yahoo.com"},
  {id:3,name:"amir",classNumber:501,phoneNumber:9876,email:"soheiliamir@yahoo.com"}

])
    const nameChangeHandler=(event,id)=>{
      const studentIndex=studentsState.findIndex (student=>{
        return student.id===id
        console.log(studentIndex)
      })
      const student={...studentsState[studentIndex]}
      console.log(student)
      student.name=event.target.value;
      const students=[...studentsState]
      students[studentIndex]=student;
      setStudents(students);
      

    }
  return(
    <div className="App">
      
<Students
studentList={studentsState}
nameChanged={nameChangeHandler}

/>
       
    </div>
 
  )}




export default App
