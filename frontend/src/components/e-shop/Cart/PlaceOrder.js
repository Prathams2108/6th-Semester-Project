import React, { useState } from 'react'
import './Cart.css'

const PlaceOrder = () => {
    const [id, setOrderid] =useState('');
    const [ordereditems, setitems] = useState('')
    const [address, setAddress] =useState('');
    const [date, setDate] =useState('');
    const [total, setTotal] =useState('');
    const [name, setUsername] =useState('');
    const [status, setStatus] = useState('');

    const placeorder=async ()=>{
        console.warn();
        let result=await fetch("http://localhost:5000/addorder",{
          method:'post',
          body:JSON.stringify({id,name,address,ordereditems,total,date}),
          headers:{
            'Content-Type':'application/json'
          }
    
          });
          result= await result.json();
          console.warn(result);
        }
  
  return (
    <div>
        <form className='cart-form'>
            <div className='cart-header'>
                <h3>PLACE AND CONFIRM YOUR ORDER</h3>
            </div>
            <div className='cart-body'>
                <div className='form-group'>
                    <div className='form-body'>
                    <label className='label-title'>Order ID</label>
                        <input type={'text'} className='cart-input' value={id} onChange={(e) => setOrderid(e.target.value)} /><br/>
                    <label className='label-title'>Username</label>
                        <input type={'text'} className='cart-input' value={name} onChange={(e) => setUsername(e.target.value)} /><br/>
                        <label className='label-title'>Shipping Address</label>
                        <textarea className='cart-input' value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />
                        <label className='label-title'>Ordered Items</label>
                        <input type={'text'} className='cart-input' value={ordereditems} onChange={(e) => setitems(e.target.value)}/><br />
                        <label className='label-title'>Ordered Total</label>
                        <input type={'text'} className='cart-input' value={total} onChange={(e) => setTotal(e.target.value)} /><br />
                        <label className='label-title'>Delivery Date</label>
                        <input type={'date'} className='cart-input' value={date} onChange={(e) => setDate(e.target.value)} /><br />
                        <label className='label-title'>Order Staus</label>
                        <input type={'text'} className='cart-input' value={status} onChange={(e) => setStatus(e.target.value)} /><br />

                        <center>
                            <button className='cart-btn' type='button' onClick={placeorder}>
                                PLACE ORDER
                            </button>
                        </center>

                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PlaceOrder