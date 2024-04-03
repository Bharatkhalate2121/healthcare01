import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(mng){
   
return(

	<>

	
		<header className="header" >
			
			<div className="header-inner">
				<div className="container">
					<div className="inner">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-12">
								<div className="logo">
									<Link to="/"><img src="imgg/logo.png" alt="/"/></Link>
								</div>
								
								<div className="mobile-nav"></div>
							</div>
							<div className="col-lg-7 col-md-9 col-12">
								<div className="main-menu">
									<nav className="navigation">
										<ul className="nav menu">
										<li ><Link to="/">Home <i ></i></Link></li>
										<li ><Link to="https://mediafiles.botpress.cloud/189ef158-0e57-427c-8e14-17970d02a012/webchat/bot.html" target='_blank'>MediAssist AI <i ></i></Link></li>
										
												
											
											
				
											
											
										<li><a href="http://localhost/main/project/services.html">Services</a></li>
										<li><a href="http://192.168.192.54:8501">MediGuide</a></li>
										</ul>
									</nav>
								</div>
								
							</div>
							<div className="col-lg-2 col-12">
								<div className="get-quote">
									<Link to="http://localhost/main/project/index.php" className="btn">Get Started</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</header>
	</>	
)


      
}