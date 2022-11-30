import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  return (
    <div>
        <Navbar />
        <div class="card text-bg-dark">
          <img src="https://www.estechgroup.io/hs-fs/hubfs/Adding%20New%20Products%20to%20Your%20Store%20Featured%20Image.jpg?width=600&name=Adding%20New%20Products%20to%20Your%20Store%20Featured%20Image.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay">
                <h5 class="card-title">ADD NEW ACCESSORIES AND PRODUCTS</h5>
                <p class="card-text">ADD ANY AND AL NEW PRODUCTS EASILY AND WITH THE CLICK OF A BUTTON.</p>
                <Link to='/addproduct'>ADD NOW AND INCREASE YOUR STORE REACH</Link>
            </div>
        </div>


        <div class="card text-bg-dark">
          <img src="https://img.freepik.com/premium-vector/delivery-order-confirmation-online-delivery-shipping-service-box-icon-approved_100456-9823.jpg?w=2000" class="card-img" alt="..." />
            <div class="card-img-overlay">
                <h5 class="card-title">APPROVE ORDERS</h5>
                <p class="card-text">APPROVE THE ORDERS AND MAKE SURE YOUR CUSTOMERS RECEIVE THE ON TIME.</p>
                <Link to='/approveorders'>APPROVE NOW</Link>
            </div>
        </div>


    </div>
  )
}

export default Admin