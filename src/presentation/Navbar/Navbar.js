import React from "react";
import TransLogo from "../../infrastructure/assets/images/translogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid wholeNavbar">
          <div className="bioLogo">
            <img src={TransLogo} className="logo" />
            <h1>BioOrganics</h1>
          </div>
          <div className="searchSection">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            <form className="d-flex form-control-large" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter CAT#, CAS#, Chemical Name or Mol Formula"
                  aria-label="Search"
                />
              </form>
              <div className="nav-items">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/corporate">
                      Corporate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">
                      Product
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/enquirylist">
                      Enquiry List
                    </Link>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
