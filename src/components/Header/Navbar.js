import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useCartContext } from "../../store/context/cart-context";
import ConfirmModal from "../Portal/ConfirmModal";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { totalNoOfItems } = useCartContext();
  const [showModal,setShowModal]=useState(false)
  const toggleActive = () => {

    setActive(() => {
      return !active;
    });
  };
  return (
    <nav
      className="navbar has-background-grey-lighter"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand is-table">
        <span className="navbar-item ml-6  is-size-3" href="https://bulma.io">
          <NavLink to="/" className="logo navbar-item has-text-weight-bold">
            My<span>Deal</span>
          </NavLink>
        </span>

        <span
          role="button"
          className={
            active
              ? "navbar-burger is-active is-size-3 mt-3"
              : "navbar-burger is-size-3 mt-3"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleActive}
        >
          {active ? <GrClose /> : <AiOutlineMenu />}
        </span>
      </div>

      <div
        id="navbarBasicExample"
        className={active ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-end is-size-4">
          <NavLink
            to="/"
            className="navbar-item"
            onClick={() => setActive(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className="navbar-item"
            onClick={() => setActive(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar-item"
            onClick={() => setActive(false)}
          >
            Contact
          </NavLink>
          <div className="cart-icon navbar-item">
            <NavLink to="/cart" onClick={() => setActive(false)}>
              <i className="fas fa-shopping-cart has-text-dark "></i>
              <div className="cart-count">{totalNoOfItems}</div>
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to="/">
            <button className="button  has-background-danger" onClick={()=>setShowModal(true)}>Log out</button>
            </NavLink>
            {showModal && <ConfirmModal setShowModal={setShowModal}/> }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
