import React, { useState } from 'react'
import Logo from '../assets/logo.webp'
import Regimg from '../assets/registerimg.png'
import { Link } from 'react-router-dom'
import './register.css'
const Register = () => {
  const [name,setname]= useState("");
  const [mobile,setmobile]= useState("");
  const [email,setemail]= useState("");
  const [username,setusername]= useState("");
  const [password,setpassword]= useState("");
  const [dob,setdob]=useState("");
  const [dl,setdl]=useState("");
  const collectData=async ()=>{
    console.warn(name,mobile,email,username,password,dob,dl);
    let result=await fetch("http://localhost:5000/register",{
      method:'post',
      body:JSON.stringify({name,mobile,email,username,password,dob,dl}),
      headers:{
        'Content-Type':'application/json'
      }

      });
      result= (await result).json;
      console.warn(result);
    }
  return (
    <>
        <div className='main-register'>
      <div className='r-left-side'>
        <div className='r-header'>
          <img src={Logo} className='r-logo-img' alt="Logo" />
        </div>

        <div className='r-body'>
          <img src={Regimg} className='reg-img' alt='RegisterImage' />
          <p>Welcome To Wheeler Dealers An Online Car Service Website Sign Up And Get Strted Today</p>
        </div>
      
      </div>

      <div className='r-right-side'>
        <div className='top-right'>
          <h5>Already Have an Account?<Link to='/login' className='login-link'>Click Here</Link></h5>
        </div>

        <div className='body-right'>
          <div className='r-contain'>
            <form>
              <h1>Register Today</h1>
            <div className='input-group'>
              <label htmlFor='first name'>
                Name
              </label>
              <input type={'text'} name='fname' id='fname' placeholder='Enter Your Full Name' value={name} onChange={(e) =>{setname(e.target.value)}}/>
            </div>
            <div className='input-group'>
              <label htmlFor='last name'>
                Mobile No.
              </label>
              <input type={'text'} name='lname' id='lname' value={mobile} onChange={(e) =>{setmobile(e.target.value)}} />
            </div>
            <div className='input-group'>
              <label htmlFor='email-id'>
                Email-id
              </label>
              <input type={'email'} name='email' id='email' value={email} onChange={(e) =>{setemail(e.target.value)}} />
            </div>
            <div className='input-group'>
              <label htmlFor='username'>
                Username
              </label>
              <input type={'text'} name='uname' id='uname' required='true' value={username} onChange={(e) =>{setusername(e.target.value)}} />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>
                Password
              </label>
              <input type={'password'} name='pswd' id='pswd' required='true' />
            </div>
            <div className='input-group'>
              <label htmlFor='confirm password'>
                Confirm Password
              </label>
              <input type={'password'} name='cpswd' id='cpswd' required='true' value={password} onChange={(e) =>{setpassword(e.target.value)}} />
            </div>
            <div className='input-group'>
              <label htmlFor='date of birth'>
                Date Of Birth
              </label>
              <input type={'date'} name='dob' id='dob' value={dob} onChange={(e) =>{setdob(e.target.value)}} />
            </div>
            <div className='input-group'>
              <label htmlFor='driving license'>
                Driving License Number
              </label>
              <input type={'text'} name='dl' id='dl' required='true' value={dl} onChange={(e) =>{setdl(e.target.value)}}/>
            </div>
              <Link to='/login'>
              <input type={'submit'} onClick={collectData} id='sbtn' value="Register" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  

    </>
  )
}

export default Register