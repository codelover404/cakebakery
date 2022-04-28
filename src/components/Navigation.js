import React from "react";
import {NavLink} from 'react-router-dom'
 function Navigation({history}) {
  
console.log(history)
  return (
    <>
     <div className="container-fluid bg-light">
     <div className="container py-3">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span activeClassName="active" className="navbar-brand font-weight-bold" >
          BAKERY<span className="text-danger">IN</span>.
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
         
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/project">Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
     </div>
     </div>


    </>
  );
}

export default Navigation