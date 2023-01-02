import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCartX} from "react-icons/bs"

const EmptyCartMsg = () => {
  return <div className='has-text-centered' style={{height:"100v"}}> 
    <div className="notification is-primary is-light">
        <div className='py-6 has-text-dark'>
        <BsCartX className='fa-9x'/>
        <h3 className="title is-3">Your cart is empty</h3>
    <p>Head to the shop to add some items to your cart.</p> 
        </div>
    <br/>
    <NavLink to="/product"className="button is-link" href="/shop">return to Shop</NavLink>
  </div>
  </div>
}

export default EmptyCartMsg
