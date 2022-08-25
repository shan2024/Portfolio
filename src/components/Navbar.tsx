import React from 'react';
import {  Link } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className = "navbar">
      <li id="home-link"><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </div>
  );
}