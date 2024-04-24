import React from 'react';
import Student from "./student/student";

const Students =(props)=>{
  return( 
    props.studentList.map((student, index) => 
    <Student
    key={index}
    id={student.id}
    name={student.name}
    classNumber={student.classNumber}
    phoneNumber={student.phoneNumber}
    email={student.email}
    nameChanged={(event)=>props.nameChanged(event,student.id)}
    
    />
      
    
    
  
  )
  )
}

export default Students;