import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Customize = () => {

  const [cproducts, setCproducts] = useState([])

  const getCustomProducts = async() => {
    let result = await fetch('http://localhost:5000/customproducts');
    result = await result.json();
    setCproducts(result)
    console.warn(cproducts);
  }

  getCustomProducts();
  
  return (
    <>
        <Navbar />
        <div class="card text-bg-dark">
          <img src="https://www.autovista.in/assets/img/blog/Essential_Car_Accesories.JPG" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">BUY CAR ACCESSORIES</h5>
            <p class="card-text">YOUR ONE STOP SHOP FOR BUYING ALL THE CAR ACCESSORIES YOU NEED</p>
            <p class="card-text"></p>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          {
            cproducts.map((item) =>
              <div class="card h-100">
        <img src={item.customimage} class="card-img-top" alt=".." />
        <div class="card-body">
          <h5 class="card-title">{item.customname}</h5>
          <p class="card-text">{item.customdescription}<br />  
          <h6 class="card-text">COST:{item.customcost}</h6><br />
          AVAILABILITY:{item.customavailability}         
          </p>
          <center>
            <Link to={`/customproducts/${item._id}`}>
            <button class="btn btn-primary">BUY NOW</button>
            </Link>
          </center>
          
        </div>
      </div>
            )
  
}
  </div>

    </>
  )
}

export default Customize