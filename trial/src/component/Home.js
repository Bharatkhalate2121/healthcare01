import React from 'react';

export default function Home(){
    return(

        <>
        
        
		

        <section className="slider">
			<div className="hero-slider">
				
				<div className="single-slider" >
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
									<p>Caring for you, every step of the way. Providing compassionate healthcare services to meet your needs. </p>
									<div className="button">
										<a href="/" className="btn">Get Started</a>
										<a href="/" className="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>
		

		
		<section className="Feautes section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Are Always Ready to Help You & Your Family</h2>
							<img src="imgg/section-img.png" alt="#"/>
							<p>Cutting-edge medical technology for accurate diagnoses.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-12">
						
						<div className="single-features">
							<div className="signle-icon">
								<i className="icofont icofont-ambulance-cross"></i>
							</div>
							<h3>Emergency Help</h3>
							<p>24/7 emergency services for your peace of mind.</p>
						</div>
						
					</div>
					<div className="col-lg-4 col-12">
						
						<div className="single-features">
							<div className="signle-icon">
								<i className="icofont icofont-medical-sign-alt"></i>
							</div>
							<h3>Enriched Pharmecy</h3>
							<p>Personalized pharmaceutical solutions for your well-being.</p>
						</div>
						
					</div>
					<div className="col-lg-4 col-12">
					
						<div className="single-features last">
							<div className="signle-icon">
								<i className="icofont icofont-stethoscope"></i>
							</div>
							<h3>Medical Treatment</h3>
							<p>Expert team dedicated to your well-being.</p>
						</div>
						
					</div>
				</div>
			</div>
		</section>
		
		<section className="call-action overlay" data-stellar-background-ratio="0.5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="content">
							<h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
							<p>Urgent medical attention when every second counts.</p>
							<div className="button">
								<a href="/" className="btn">Contact Now</a>
								<a href="/" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		
		
		
		<section className="services section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src="imgg/section-img.png" alt="#"/>
							<p>Immediate care for sudden medical needs, anytime, anywhere.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-prescription"></i>
							<h4><a >Medicine Guide</a></h4>
							<p>Navigate your health journey with our informative Medicine Guide.</p>	
						</div>

					</div>
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-tooth"></i>
							<h4><a >General Treatment</a></h4>
							<p>Effective, personalized General Treatment.</p>	
						</div>
						
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-heart-alt"></i>
							<h4><a>Nearest Pharmacy</a></h4>
							<p>Trust us to provide you with quick and reliable access to the medications you need.  </p>	
						</div>
						
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-listening"></i>
							<h4><a >Quality Medicine</a></h4>
							<p>Trust in the excellence of our medicines.</p>	
						</div>
						
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-eye-alt"></i>
							<h4><a >Live Chat</a></h4>
							<p>Connect with us instantly through our live chat.</p>	
						</div>
						
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						
						<div className="single-service">
							<i className="icofont icofont-blood"></i>
							<h4>Same Day Delivery</h4>
							<p>Get your order today with our same-day delivery service.</p>	
						</div>

					</div>
				</div>
			</div>
		</section>
		
		<section className="pricing-table section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Provide You The Best Treatment In Resonable Price</h2>
							<img src="imgg/section-img.png" alt="#"/>
							<p>Experience top-quality treatment at affordable rates with us.</p>
						</div>
					</div>
				</div>
					
			</div>	
		</section>	
		<section className="newsletter section">
			<div className="container">
				<div className="row ">
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-text ">
							<h6>Sign up for newsletter</h6>
							<p className="">Stay informed, sign up for our newsletter today!</p>
						</div>
						
					</div>
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-form ">
							<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" className="common-input" onfocus="this.placeholder = ''"
									onblur="this.placeholder = 'Your email address'" required="" type="email"/>
								<button className="btn">Subscribe</button>
							</form>
						</div>
						
					</div>
				</div>
			</div>
		</section>
		






        
        </>
    );
}