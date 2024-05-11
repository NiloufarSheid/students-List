import React, { useState } from 'react';
import Button from '../UI/button/Button';
import "./student/students.css";
import jsonData from "../Data/StudentsData.json";

const Students = (props) => {
  const [studentsState, setStudents] = useState(jsonData);

  const nameChangeHandler = (event, id) => {
    const updatedStudents = studentsState.map(student => {
      if (student.id === id) {
        return { ...student, name: event.target.value };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const deleteStudent = (id) => {
    const updatedStudents = studentsState.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    studentsState.map((student, index) => (
      <div className='students' key={student.id}>
        <label>شماره دانش آموزی: {student.id}</label>
        <label>نام و نام خانوادگی</label>
        <input type="text" value={student.name} onChange={(event) => nameChangeHandler(event, student.id)} />
        <label>کلاس</label>
        <input type="text" value={student.classNumber} />
        <label>شماره تلفن</label>
        <input type="text" value={student.phoneNumber} />
        <label>ایمیل</label>
        <input type="email" value={student.email} />
        <label>
          <Button deleted={() => deleteStudent(student.id)} />
        </label>
      </div>
    ))
  );
};

export default Students;
