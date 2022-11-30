import React, { useEffect, useState } from 'react'
import {Container, ListGroupItem} from 'react-bootstrap';
import Navbar from './Navbar';
import Customize from './Products';
import {Row, Col, ListGroup, Button, Image} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

const CustomizeDetails = () => {
  const customproducts = useParams();
    const [cname, setName] = useState('');
    const [ccost, setCost] = useState('');
    const [cimage, setImage] = useState('');
    const [cdesc,setDescription] = useState('');
    const [cavailable,setAvailable] = useState('');
    const [cusrname, setUsername] = useState('');
    useEffect(() => {
        getdetails();
    },[])

    const getdetails=async()=>{
        console.warn(customproducts)
        let result = await fetch(`http://localhost:5000/customproducts/${customproducts.id}`);
        result=await result.json();
        console.warn(result);
        setName(result.customname);
        setCost(result.customcost);
        setImage(result.customimage);
        setDescription(result.customdescription);
        setAvailable(result.customAvailability);
    }
  return (
    <div>
        <Navbar />
        <Link to="/customize" className='btn btn-light'>
          <i class="fas fa-arrow-left"></i>
          &nbsp; GO BACK
        </Link>
        <Row>
          <Col md={6}>
            <Image src={cimage} alt={cname} />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem><h3>{cname}</h3></ListGroupItem>
              <ListGroupItem><h3>{cdesc}</h3></ListGroupItem>
              <ListGroupItem><h3>{ccost}</h3></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md= {3}>
            <ListGroupItem>
            <Row>
              <Col>STATUS:</Col>
              <Col>{cavailable}</Col>
            </Row>
            </ListGroupItem>
            <ListGroupItem>
              <input type={'text'} value={cusrname} onChange={(e) => {setUsername(e.target.value)}} />
            </ListGroupItem>
            <ListGroupItem>
              <Link to={`/cart/${customproducts.id}`}>
              <button className='btn-block' type='button'>ADD TO CART</button>
              </Link>
            </ListGroupItem>
            
          </Col>
        </Row>
        </div>
  )
}

export default CustomizeDetails