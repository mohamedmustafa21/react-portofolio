import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold " to="/">M.A Portofolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/skills' className="nav-link active " aria-current="page" >Skills</Link>
        </li>
        <li className="nav-item">
          <Link to='/projects' className="nav-link active " aria-current="page" >Projects</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="#">Contact</Link>
        </li>
        <li className="nav-item d-flex">
          <Link  to='https://github.com/mohamedmustafa21' className="nav-link active   me-2" aria-current="page" ><span><i  className="fa-brands fa-facebook-f"></i></span></Link>
          <Link className="nav-link active me-2" aria-current="page" to="#"><span><i className="fa-brands fa-github"></i></span></Link>
          <Link className="nav-link active   me-2" aria-current="page" to="#"><span><i className="fa-brands fa-linkedin-in"></i></span></Link>

        </li>
        

        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
