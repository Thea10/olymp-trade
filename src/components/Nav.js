import React from "react";
import logo from "../img/logo.png";

export const Nav = () => {

 function toggleButton(){
   let btn = document.getElementById('animate-btn');
   btn.classList.toggle('open')
  }

  return (
    <nav
      className="nav text-center navbar-expand-lg navbar-light justify-content-between  align-items-center px-2 px-lg-3 px-xl-5"
      id="head-nav"
    >
      
      <div className="navbar-brand  ">
        <a href="index.html" title="home">
          <img src={logo} alt="" />
        </a>
      </div>
      <button
        className="navbar-toggler collapsebtn1 d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleButton}
      >
        <div className="animated-icon1" id="animate-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        className="collapse navbar-collapse mb-0 align-items-center justify-content-around  "
        id="navbar"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
            <a href="#about">About Us</a>
          </li>
          <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
            <a href="#education">Education</a>
          </li>
          <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
            <a href="#faq">FAQ</a>
          </li>
          <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
            <a href="#assets">Assets</a>
          </li>
          <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
            <a href="#insights">Insights</a>
          </li>
        </ul>
        <div  >
          <button className="btn btn-light-btn mx-2 my-2 mx-md-3 "  >
            Log in
          </button>
          <button className="btn btn-blue-btn mx-2 my-2 mx-md-3   "  >
           Registration
          </button>
        </div>
      </div>
      

    </nav>
  );
};

