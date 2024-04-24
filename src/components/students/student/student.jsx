import React from 'react';
import "./students.css"


const Student = (props) => {
  return (
    <div className='students'>
      <label>شماره دانش آموزی: {props.id}</label>
      <label>نام و نام خانوادگی</label>
      <input type="text" value={props.name} onChange={props.nameChanged}/>
      <label>کلاس</label>
      <input type="text" value={props.classNumber} />
      <label>شماره تلفن</label>
      <input type="text" value={props.phoneNumber} />
      <label>ایمیل</label>
      <input type="email" value={props.email} />
    </div>
  );
}

export default Student;