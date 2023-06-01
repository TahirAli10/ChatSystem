import { Button } from 'bootstrap';
import React from 'react';

export default function Header() {
  return (
    <nav
      className="container navbar navbar-expand-lg "
      style={{
        boxShadow: "none",
        outline: "none !important",
        border: "none",
      }}
    >
      <a className="navbar-brand pl-3 text-white navbarHeading" href="#">
      BizGPT
      </a>
      <button
        className="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto"> 
          <li className="nav-item active">
            <a className="nav-link text-white active" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
               Affiliate
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Live Demo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              FAQ
            </a>
          </li>
        </ul>
        <div className="navbar-nav ml-auto"> 
       <button type="button" className="btn btn btn-outline-secondary headerContract text-white">Contract</button>
       <button  className='btn btn btn-dark ml-2 headerTryDante' >Try Dante for free</button>
        </div>
      </div>
    </nav>
  );
}
