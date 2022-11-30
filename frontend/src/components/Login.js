import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import logo from '../assets/logo.png'
import loginimg from '../assets/loginimg.jpg'
import Choose from './pages/Choose'
const Login = () => {

  const history= useNavigate()
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const handleLogin = async (e) =>{
    e.preventDefault();

    let result= await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,
        password
      }),
    });
    result = await result.json();
    console.warn(result)
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result));
      history("/choose")
    }else{
      alert("Enter Correct Details")
      history("/login")
    }
  }
  
  

  return (
    <div className='main-login'>
    <div className='login-contain'>
      <div className='left-side'>
        <div className='img-class'>
          <img src={logo} className='img-id' alt="Logo" />
        </div>
        <form method='POST'  >
          <label htmlFor='uname'>Username</label>
          <input type={'text'} placeholder='Enter Your Username' id='uname' value={username} onChange={(e) => setUsername(e.target.value)}  />
          <label htmlFor='pswrd'>Password</label>
          <input type={'password'} placeholder='Enter Your Password' id='pswrd' value={password} onChange={(e) => setPassword(e.target.value)}  />
          <Link to='/choose'>
          <input type={'submit'} className='sub_button' onClick={handleLogin}  />
          </Link>
          <div className='foot'>
            <h4>New User<Link to='/register' className='reg-link'>Click Here</Link></h4>
          </div>
        </form>

      </div>
      <div className='right-side'>
        <div className='welcome-note'>
          <h3>Welcome To Wheeler Dealers</h3>
        </div>
        <div className='welcome-img'>
          <img src={loginimg}  alt='Welcome Image' />
        </div>
      </div>

    </div>
  </div>
  )
}

export default Login