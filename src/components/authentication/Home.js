import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return<section className="notification is has-background-info-light " >
  <div className="container has-text-centered py-6 my-6" style={{height:'100vh',maxWidth:"80%",margin:"auto"}}>
    <h1 className="title is-2 has-text-weight-bold ">Welcome to world's most <span className='has-text-link'>imaginative</span> marketplace</h1>
    <h3 className="subtitle is-5 has-text-success  has-text-weight-semibold" style={{width:'70%',margin:"auto"}}>
        Explore the vast collection of handcrafted goods and unique art pieces by logging in below
      </h3>
 
 <Link to="/login">
      <button className="button is-dark  mt-4">Go to login page</button>
      </Link>
  </div>
</section>
}

export default Home
