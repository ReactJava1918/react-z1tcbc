import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
//import Contact from './Contact';
import Contact, { Hyd, Che, Bang, Parent } from './Contact';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from 'react-router-dom';
import './style.css';
//import {useState} from "react";

export default function App() {
  let p = [
    { rollno: '1', name: 'siva', city: 'hyderabad' },
    { rollno: '2', name: 'ravi', city: 'cvpm' },
  ];

  let a = [];

  let [studentdata, ShowDetails] = useState([]);

  let addEmployeeData = () => {
    let intputRollno = document.getElementById('rollno').value;
    let inputName = document.getElementById('name').value;
    let inputCity = document.getElementById('city').value;

    ShowDetails([
      ...studentdata,
      { rollno: intputRollno, name: inputName, city: inputCity },
    ]);

    document.getElementById('rollno').value = ' ';
    document.getElementById('name').value = ' ';
    document.getElementById('city').value = ' ';
  };

  let deleteEmployeeData = (e) => {
    let rollno = e.target.getAttribute('value');
    console.log(rollno);
    let newStudentdata = studentdata.filter((data) => data.rollno !== rollno);
    console.log(JSON.stringify(newStudentdata));
    ShowDetails(newStudentdata);
  };

  let updateEmployeeData = (e) => {
    let rollno = e.target.getAttribute('value');
    console.log(rollno);
    let takeDataFromListBasedOnId = studentdata.filter(
      (data) => data.rollno == rollno
    );

    document.getElementById('rollno').value =
      takeDataFromListBasedOnId[0].rollno;
    document.getElementById('name').value = takeDataFromListBasedOnId[0].name;
    document.getElementById('city').value = takeDataFromListBasedOnId[0].city;

    let newStudentdata = studentdata.filter((data) => data.rollno !== rollno);
    console.log(JSON.stringify(newStudentdata));
    ShowDetails(newStudentdata);
  };

  return (
    <>
      <h1>Employee Curd Operations</h1>
      <div>
        RollNo:-
        <input id="rollno" />
        Name:-
        <input id="name" />
        City:-
        <input id="city" />
        <button onClick={addEmployeeData}>Add</button>
      </div>

      <table className="table">
        <tr className="tr">
          <th className="th">Rol No</th>
          <th className="th">Name</th>
          <th className="th">City</th>
          <th className="th">Action</th>
        </tr>
        <tbody>
          <tbody>
            {studentdata.map((data) => (
              <tr key={data.rollno}>
                <td className="td">{data.rollno}</td>
                <td className="td">{data.name}</td>
                <td className="td">{data.city}</td>
                <td className="td">
                  <button onClick={updateEmployeeData} value={data.rollno}>
                    Update
                  </button>
                  <button onClick={deleteEmployeeData} value={data.rollno}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </tbody>
      </table>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="hyd" element={<Hyd />} />
            <Route path="che" element={<Che />} />
            <Route path="bang" element={<Bang />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/ctp" element={<Parent />} />
        </Routes>
      </Router>
    </>
  );
}
