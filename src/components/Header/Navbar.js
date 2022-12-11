import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {AiOutlineMenu} from "react-icons/ai"
import {GrClose} from "react-icons/gr"


const Navbar = () => {
  const [active,setActive]=useState(false) 

  const toggleActive=()=>{
    setActive(()=>{
      return !active
    })
  }
  return ( <nav
      className="navbar has-background-grey-lighter"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <span className="navbar-item ml-6  is-size-3" href="https://bulma.io">
          <NavLink to="/home" className="logo navbar-item has-text-weight-bold">
            My<span>Deal</span>
          </NavLink>
        </span>

        <span
          role="button"
          className={active?"navbar-burger is-active is-size-3 mt-3":"navbar-burger is-size-3 mt-3"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleActive}
        >
        { active?<GrClose/>:<AiOutlineMenu/>}
        </span>
      </div>

      <div id="navbarBasicExample" className={active?"navbar-menu is-active":"navbar-menu"}>
        <div className="navbar-end is-size-4">
          <NavLink to="/home" className="navbar-item">
            Home
          </NavLink>
          <NavLink to="/shop" className="navbar-item">
            Shop
          </NavLink>
          <NavLink to="/contact" className="navbar-item">
            Contact
          </NavLink>
          <div className="cart-logo navbar-item mr-5">
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <p className="items-number">1</p>
          </div>
          <div className="navbar-item">
            <button className="button  has-background-danger">Log out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
