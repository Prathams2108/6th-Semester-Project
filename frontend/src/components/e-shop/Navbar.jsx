import React from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import { FaSignOutAlt, FaShoppingCart } from 'react-icons/fa' 
import '../e-shop/Ehome'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="/ehome">WHEELER DEALERS<AiOutlineCar /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ehome">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Book Service</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/products">Buy Accessories and Parts</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/customize">Customize</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin only</a>
        </li>
      </ul>
      <div className="buttons">
        <button className="btn">
            <a href='/' className='btn btn-outline-dark'>
            <FaSignOutAlt className='ms-2' /> Logout
            </a>
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar