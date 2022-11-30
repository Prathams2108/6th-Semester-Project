import React, { useEffect, useState } from 'react'
import {Container, ListGroupItem} from 'react-bootstrap';
import Navbar from './Navbar';
import Products from './Products';
import {Row, Col, ListGroup, Button, Image} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
const ProductDetails = ({}) => {
    const products = useParams();
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [image, setImage] = useState('');
    const [desc,setDescription] = useState('');
    const [available,setAvailable] = useState('');
    const [usrname, setUsername] = useState('');
    useEffect(() => {
        getdetails();
    },[])

    const getdetails=async()=>{
        console.warn(products)
        let result = await fetch(`http://localhost:5000/products/${products.id}`);
        result=await result.json();
        console.warn(result);
        setName(result.productname);
        setCost(result.productcost);
        setImage(result.productimage);
        setDescription(result.productdescription);
        setAvailable(result.productAvailability);
    }

    

      

    
  return (
    <div>
        <Navbar />
        <Link to="/products" className='btn btn-light'>
          <i class="fas fa-arrow-left"></i>
          &nbsp; GO BACK
        </Link>
        <Row>
          <Col md={6}>
            <Image src={image} alt={name} />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem><h3>{name}</h3></ListGroupItem>
              <ListGroupItem><h3>{desc}</h3></ListGroupItem>
              <ListGroupItem><h3>{cost}</h3></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md= {3}>
            <ListGroupItem>
            <Row>
              <Col>STATUS:</Col>
              <Col>{available}</Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
              <input type={'text'} value={usrname} onChange={(e) => {setUsername(e.target.value)}} />
            </ListGroupItem>
            <ListGroupItem>
              <Link to={`/cart/${products.id}`}>
              <button className='btn-block' type='button'>ADD TO CART</button>
              </Link>
            </ListGroupItem>
            
          </Col>
        </Row>
    </div>
  )
}

export default ProductDetails