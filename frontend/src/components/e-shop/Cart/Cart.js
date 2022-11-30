import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar'
import PlaceOrder from './PlaceOrder'
import {Row, Col, ListGroup, Button, Image} from 'react-bootstrap'
import {Container, ListGroupItem} from 'react-bootstrap';

const Cart = () => {
    const [oitems,setItems] = useState('');
    const [ocost,setCost] = useState('');
    const [image,setImage] = useState('');

    const cart= useParams();

    useEffect(() => {
        getdetails();
    },[])

    const getdetails=async()=>{
        console.warn(cart)
        let result = await fetch(`http://localhost:5000/service/${cart.id}`);
        result=await result.json();
        console.warn(result);
        setItems(result.servicename);
        setCost(result.servicecost);
        setImage(result.serviceimage);
    }
  return (
    <>
    <Navbar />
    <div>
    <Row>
          <Col md={6}>
            <img src={image} alt={oitems} width="500" height="500"  />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem><h3>{oitems}</h3></ListGroupItem>
            </ListGroup>
           </Col> 
           <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem><h3>{ocost}</h3></ListGroupItem>
            </ListGroup>
           </Col>
    </Row>
        <PlaceOrder />
    </div>
    </>
  )
}

export default Cart