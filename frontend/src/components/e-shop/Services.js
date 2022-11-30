import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Services = () => {

  const [service, setService] = useState([])

  const getServices = async() => {
    let result = await fetch('http://localhost:5000/service');
    result = await result.json();
    setService(result)
    console.warn(service);
  }

  getServices();
  return (
    <div>
        <Navbar />
        <div class="card text-bg-dark">
          <img src="http://images.dealersites.cardekho.com/2213/uploads/1675210248.jpg" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">CAR SERVICES</h5>
            <p class="card-text">WELCOME TO BOOKING YOUR CAR SERVICE</p>
            <p class="card-text"></p>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {
            service.map((item) =>
              <div class="card h-100">
        <img src={item.serviceimage} class="card-img-top" alt=".." />
        <div class="card-body">
          <h5 class="card-title">{item.servicename}</h5>
          <p class="card-text">{item.servicedescription}<br />  
          <h6 class="card-text">COST:{item.servicecost}</h6><br />
          AVAILABILITY:{item.serviceavailability}         
          </p>
          <center>
            <Link to={`/service/${item._id}`}>
            <button class="btn btn-primary">BUY NOW</button>
            </Link>
          </center>
          
        </div>
      </div>
            )
  
}
    </div>
    </div>
  )
}

export default Services