import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {


  let location = useLocation();

  const handleLogout = ()=>{

    localStorage.removeItem('token')
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Home"?"active":""}`} aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  Link
                </Link>
              </li> */}
            </ul>
     
        {localStorage.getItem('token')? 
        <>
        <Link to="/" className="btn btn-primary d-flex" type="submit" onClick={handleLogout} >Logout</Link>
        </>
        :
        <>
         <Link to="/signup" className="btn btn-danger d-flex mx-2" type="submit">SignUp</Link>
        <Link to="/" className="btn btn-primary d-flex" type="submit">Login</Link></>
        }
       
 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
