import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <>
    <Carousel fade={true} pause={false} variant='dark'>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src='https://media.istockphoto.com/vectors/car-service-infographics-vector-id1182439949'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 color='black' >WELCOME TO WHEELER DEALERS</h3>
          <p color='black'>THE ONE STOP SITE TO BOOK YOUR CAR SERVICE, BUY ACCESSORIES AND CUSTOMIZE YOUR CAR</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src='https://i.pinimg.com/736x/f9/2a/ad/f92aada474eedcaf0d7de1bae37dd950.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>ABOUT US</h3>
          <p><Link to='/About' ><button type={'submit'}>About</button></Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src='https://i.ytimg.com/vi/OKSpCet_O1c/maxresdefault.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>BOOK YOUR SERVICE NOW</h3>
          <p>CLICK ON THE BUTON BELOW AND GET STARTED WITH US<Link to='/login' ><button type={'submit'}>Sign-In</button></Link></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Home