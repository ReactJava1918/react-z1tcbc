import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <marquee>Below is Routing Use Case and Nested Routing Use case</marquee>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/ctp">CTP</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
