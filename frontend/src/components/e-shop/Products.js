import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Cart from './Cart/Cart'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([]);
  const [productname, setName] = useState('');
  const [productcost, setCost] = useState('');
 
    
  

  const getProducts = async() => {
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result)
    console.warn(products);
  }

  getProducts();
  


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
        products.map((item) => 
          
        
        <div class="card h-100">
        <img src={item.productimage} class="card-img-top" alt=".." />
        <div class="card-body">
          <h5 class="card-title">{item.productname}</h5>
          <p class="card-text">{item.productdescription}<br />  
          <h6 class="card-text">COST:{item.productcost}</h6><br />
          AVAILABILITY:{item.productAvailability}         
          </p>
          <center>
            <Link to={`/product/${item._id}`}>
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

export default Products