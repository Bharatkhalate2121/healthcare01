import React from 'react';

export default function Footer(){

    return(
        <>
        
       
		<footer id="footer" className="footer ">
			
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>About Us</h2>
								<p>We are dedicated to providing high-quality healthcare services tailored to your needs.</p>
								
								<ul className="social">
									<li><a href="/"><i className="icofont-facebook"></i></a></li>
									<li><a href="/"><i className="icofont-google-plus"></i></a></li>
									<li><a href="/"><i className="icofont-twitter"></i></a></li>
									<li><a href="/"><i className="icofont-vimeo"></i></a></li>
									<li><a href="/"><i className="icofont-pinterest"></i></a></li>
								</ul>
								
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer f-link">
								<h2>Quick Links</h2>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
											<li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
											<li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
											
											<li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
										</ul>
									</div>

								</div>
							</div>
						</div>
						
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>Newsletter</h2>
								<p>subscribe to our newsletter to get allour news in your inbox.</p>
								<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
									<input name="email" placeholder="Email Address" className="common-input" onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Your email address'" required="" type="email"/>
									<button className="button"><i className="icofont icofont-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>© Copyright 2024  |  All Rights Reserved by Team-X </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</footer>
        
        
        </>

    );
}