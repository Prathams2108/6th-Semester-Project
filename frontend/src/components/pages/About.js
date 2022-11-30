import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>WHEELER DEALERS</h3>
					<p>We at wheeler dealers online car service and car shop aim to make it easy for the 
            users to book their services through the internet
            and also allow them to buy products and customize their car according all in
            a single website.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="https://previews.123rf.com/images/istinatali/istinatali1603/istinatali160300285/60097286-wheel-in-fire-flame-logo-vector.jpg" />
			</div>
		</div>
	</div> 
    </>
  )
}

export default About