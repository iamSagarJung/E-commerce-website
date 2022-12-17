import React from 'react'
import { NavLink } from 'react-router-dom'
 import "./Error.css"
const Error = () => {
  return <div className='hero  has-text-centered   is-justify-content-center ' style={{height:"90vh"}}>
   <section>
    <h1 className='title  is-size- error-page'>Oops!</h1>
    <p className='title has-text-weight-bold is-size-5'>404-PAGE NOT FOUND</p>
    <p>the page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
    <NavLink to="/home">
        <button className='button is-link mt-4'>go to homepage</button>
    </NavLink>
  </section>
  </div>
}

export default Error
