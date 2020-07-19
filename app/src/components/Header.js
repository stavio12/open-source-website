import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center">
        <Link to="/">
          <a className="navbar-brand d-inline">
            <img src="https://drive.google.com/file/d/11vEytiK5JA3L8zJrRSpGN0zVMgxiqY2I" alt="" />{" "}
          </a>
        </Link>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul className="navbar-nav mx-auto text-md-center text-center">
            <li className="nav-item">
              <Link to="/projects">
                <a className="nav-link">PROJECTS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link">CONTACT</a>
              </Link>
            </li>
          </ul>
          <Link to="/contact">
            <button className="btn btn-light d-none d-md-block">CONTACT US</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
