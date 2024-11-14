import React from 'react';
// import logo from '../assets/image/logo-Header.png';
import logo from '../assets/image/logo2.png';
import { NavLink } from 'react-router-dom';
// import './Header.css'; // Ensure this CSS file is linked for custom styles

const Header = () => {
  return (
    <>
      <div className="top-header border-bottom border-1">
        <div className="container">
          <div className="d-flex  justify-content-between ">
            <div className="icons d-flex">
              <a href="#" className=""><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="times d-flex align-items-center">
              <p>Opening Time: Mon‑Fri 08:00‑18:00 Sat‑Sun 10:00‑17:00</p>
            </div>
            <div className="callNow d-flex align-items-center">
              <p>Call now: 1-888-777-55555</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bot-header">
        <nav className="navbar navbar-expand-lg  ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Phone Repair" height="100" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink exact to="/HomePage" activeClassName="active-link" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About" activeClassName="active-link" className="nav-link">About US</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink to="/Services" activeClassName="active-link" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink to="/AllProduct" activeClassName="active-link" className="nav-link">All Product</NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                    <li><NavLink to="/AllProduct" activeClassName="active-link" className="dropdown-item">All Product</NavLink></li>
                    <li><a className="dropdown-item" href="#">Cases</a></li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/Blog" activeClassName="active-link" className="nav-link">Blog</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" href="#" to="/Contact" id="contactsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contacts
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="contactsDropdown">
                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                    <li><a className="dropdown-item" href="#">Support</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;
