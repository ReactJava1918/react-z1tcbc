// src/components/Home.js
import React, { useState } from 'react';
import Child from './child';
import { Outlet, Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div>Welcome to the contact Page</div>
      <Link to="hyd">hyd</Link>
      <Link to="che">Che</Link>
      <Link to="bang">Bang</Link>

      <Outlet />
    </>
  );
}

export function Hyd() {
  return <div>This is hyderababd</div>;
}

export function Che() {
  return <div>This is cheenai</div>;
}

export function Bang() {
  return <div>This is Bang</div>;
}

export function Parent() {
  let [patentData, setPatentData] = useState('');

  let p = (data) => {
    console.log("------------------"+data)
    setPatentData("siva");
  };

  return (
    <>
      <div>This is chilld to parent demo</div>

      <h1>Data from child :{patentData} </h1>
      <marquee>--------------------------------------</marquee>
      <br></br>
      <Child fun={p} />
    </>
  );
}
