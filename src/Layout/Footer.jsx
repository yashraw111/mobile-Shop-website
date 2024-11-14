import React from "react";
// import logowhite from "../assets/image/logo-white.png";
import logo from '../assets/image/logo2.png'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container my- py-5">
        <div className="row">
          <div className="col-lg-4 logo-part ">
            <div className="d-flex flex-column">
              {/* <img src={logo} alt="logo" /> */}
              <h1 className="po">BRAHMANI</h1>
              <div className="mt-4 details">
                <p>
                  In nulla nibh, malesuada sit amet purus id, mollis auctor ex.
                  In sit amet venenatis eros. Curabitur sed convallis mauris.
                  Nam eget volutpat purus, ut egestas nulla. Nunc scelerisque
                  eros vitae lacus dictum dictum. Donec luctus ligula lectus, eu
                  auctor sem sollicitudin sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 com-menu-part">
            <h5>COMPANY</h5>
            <div className="menu mt-5 d-flex ">
              <div className="d-flex flex-column">
              <NavLink to="/HomePage">  <a href="#">Home</a></NavLink>
              <NavLink to="/Services">  <a href="#">Services</a></NavLink>
              <NavLink to="/Blog">  <a href="#">Blog</a></NavLink>
              </div>
              <div className="d-flex flex-column ms-5 ps-5 ">
              <NavLink to="/About">   <a href="#">About Us</a></NavLink>
              <NavLink to="/Contact">  <a href="#">Contact</a></NavLink>
              <NavLink to="/AllProduct">  <a href="#">AllProduct</a></NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-4 contact">
            <h5>CONTACTS</h5>
            <div className="address">
              <a href="#">
                <i class="fa-solid fa-phone"></i> +91-960-154-3844
              </a>
              <br />
              <a href="#">
                <i class="fa-solid fa-location-dot"></i> paldi(mithi) ,deodar-385330, b.k
              </a>
              <br />
              <a href="#">
                <i class="fa-solid fa-envelope"></i> brahmaniPhone@gmail.com
              </a>
            </div>
            <div className="social mt-4 ">
              <h5>FOLLOW US</h5>
              <div className="icons d-flex">
                <a href="#">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-google-plus"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-flickr"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
