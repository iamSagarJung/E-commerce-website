import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/authentication/LoginForm'
import Footer from './components/Header/Footer'
import Navbar from './components/Header/Navbar'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProduct from './pages/ProductDetails'

const App = () => {
  return (
    <>
      {/* <LoginForm/> */}
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/product" element={<Shop/> }/>
        <Route path="/cart" element={<Cart/> }/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </>
  )
}

export default App
