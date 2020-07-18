import React, { useEffect } from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center">
        <a className="navbar-brand d-inline" href="">
          Brand
        </a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul className="navbar-nav mx-auto text-md-center text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
            <button className="btn btn-light d-none d-md-block">CONTACT US</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
