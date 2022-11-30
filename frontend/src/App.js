import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer';
import About from './components/pages/About';
import { SliderData } from './components/home/SliderData';
import Choose from './components/pages/Choose';
import EHome from './components/e-shop/Ehome';
import Services from './components/e-shop/Services';
import Products from './components/e-shop/Products';
import Customize from './components/e-shop/Customize';
import Admin from './components/e-shop/Admin';
import Addproduct from './components/e-shop/Admin Functions/Addproduct';
import Cart from './components/e-shop/Cart/Cart';
import ProductDetails from './components/e-shop/ProductDetails';
import CustomizeDetails from './components/e-shop/CustomizeDetails';
import ServiceDetails from './components/e-shop/ServiceDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/choose' element={<Choose />} />
        <Route path='/ehome' element={<EHome />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customize' element={<Customize />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/customproducts/:id' element={<CustomizeDetails />} />
        <Route path='/service/:id' element={<ServiceDetails />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
