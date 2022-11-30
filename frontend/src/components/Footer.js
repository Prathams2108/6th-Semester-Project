import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">ABOUT US</a>
                  <a href="#">Our Services</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>
                Get Help
              </h4>
              <ul>
                <li>
                  <a href="#">Bengaluru</a>
                  <a href="#">Mumbai</a>
                  <a href="#">Chennai</a>
                  <a href="#">For More Enquiry Contact Us at wd55@gmail.com</a>
                  <a href="#">Call Us on 9087126789</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
      
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;