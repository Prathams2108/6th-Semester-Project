import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'
import './Product.css'

const Addproduct = () => {
    const [id, setId] = useState('');
    const[name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [availability, setAvailability] = useState('');
    const [cost, setCost] = useState('');
    const [productimage, setImage] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

    const formData = new FormData();

    formData.append("productid", id);
    formData.append("productname", name);
    formData.append("productcost", cost);
    formData.append("productAvailability", availability);
    formData.append("productdescription", description);
    formData.append("productimage", productimage);
    
    axios
    .post("http://localhost:5000/addproducts", formData)
    .then((res) => console.warn(res))
    .catch((err) => {
        console.log(err);
    });
};
  return (
    <>
        <Navbar />
        <div className='col sm-6 offset sm-3'><br />
        <form onSubmit={onFormSubmit} encType="mulitipart/form-data">
        Product Id<input type={'text'} name='productid' className='form-control' placeholder='Product ID' value={id} onChange = {(e) => {setId(e.target.value)}} /><br />
        Product Name<input type={'text'} name='productname' className='form-control' placeholder='Product Name' value={name} onChange = {(e) => {setName(e.target.value)}} /><br />
        Product Cost<input type={'text'} name='product cost' className='form-control' placeholder='Product Cost'  value={cost} onChange = {(e) => {setCost(e.target.value)}}  /><br />
        Product Availability<input type={'text'} name='productAvailabilty' className='form-control' placeholder='Product Availabiltiy'  value={availability} onChange = {(e) => {setAvailability(e.target.value)}} /><br />
        Product Description<textarea name='productdescription' className='form-control' placeholder='Product Description'  value={description} onChange = {(e) => {setDescription(e.target.value)}}  /><br />
        
       
       
        Product Image<input type={'text'}  className='form-control-file' value={productimage} onChange={(e) => {setImage(e.target.value)}}  /><br />
        <Link to=''><input type={'submit'} className='btn btn-primary' value='ADD' onClick={onFormSubmit} /> </Link>
        </form>
        </div>
    </>
  )
}

export default Addproduct