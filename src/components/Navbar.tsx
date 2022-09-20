import React from 'react';
import {  Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className = "navbar-container">
      <div className = "navbar">
        <li id="home-link"><Link to="/">Seulchan Han</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/studio">Studio</Link></li>
      </div>
      <hr className = "hor-line"></hr>
    </div>
  );
}