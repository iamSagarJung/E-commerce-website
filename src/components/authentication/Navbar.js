import React from "react";
import { Link } from "react-router-dom";
import "../Header/Navbar.css";

const Navbar = () => {

  return  <div className="is-flex navbar has-background-grey-lighter is-justify-content-space-around py-4">
    <span className="logo is-size-3 has-text-weight-bold ">
    <Link to="/" className="has-text-dark">
    My<span>Deal</span>
    </Link>
    </span>
    <Link to="/login">
    <button className="button  is-link">Log In</button>
    </Link>
  </div>
};

export default Navbar;
