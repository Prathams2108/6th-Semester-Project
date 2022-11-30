import React from 'react'
import Navbar from './Navbar'
import './Ehome.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='hero'>
        <div class="card bg-dark text-white border-0">
  <img src="https://www.carz.in/wp-content/uploads/2016/08/carz-electrical-and-mechanical.jpg" class="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title display-3 fw-bolder mb-0">BOOK YOUR CAR SERVICE ONLINE</h5>
    <p class="card-text">EASY TO BOOK AND YOU GET THE BEST TECHNICIANS WORKING ON YOUR CAR AT YOUR FINGERTIPS</p>
    <p class="card-text">FIRST SERVICE IS FREE</p>
  </div>
</div>
<div class="card bg-dark text-white border-0">
  <div class="card-img-overlay">
    <h5 class="card-title">BUY ACCESSORIES AND REPLACEABLE PARTS FOR YOUR CARS</h5>
    <p class="card-text"></p>
    <p class="card-text">FREE DELIVERY ON YOUR FIRST ORDER</p>
  </div>
  <img src="https://superfluousmart.com/wp-content/uploads/2022/07/MAIN-BANNER-2-aa_11zon_11zon.jpg" class="card-img" alt="..." />
</div>
<div class="card bg-dark text-white border-0">
  <img src="https://www.leithcars.com/blogs/1421/wp-content/uploads/2016/03/My_Ferrari_beautiful_whatsyourslike.png" class="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title">CUSTOMIZE YOUR CAR</h5>
    <p class="card-text">CUSTOMIZE YOUR CAR BY BUYING DECALS OR BY BUYING BODY KITS</p>
    <p class="card-text">FREE INSTALLATION FOR THE FIRST TIME</p>
  </div>
</div>
    </div>
    </>
  )
}

export default Home