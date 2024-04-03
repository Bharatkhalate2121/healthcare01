import React from 'react';
import {Link} from 'react-router-dom';
import './Logcomponent.css';

export default function Login (){

    return (
<>

        <div className="containerr">
  <div className="forms">
    <div className="form login">
      <Link to="/"><img src="Cross.svg" alt="" style={{objectFit:'contain',height:'30px',float:'right'}}/></Link>
      <span className="title">Login</span>
      <br/><br/>
      <div className="row">
      <input  type="radio" name="inlineRadioOptions" id="inlineRadio1" onclick="view1()" value="option1" required checked="checked"/><label className="form-check-label" for="inlineRadio1">IUser</label>
      <input  type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1" onclick="view2()" required/><label className="form-check-label" for="inlineRadio2">Doctor</label>
      <input  type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1" onclick="view3()" required/>
      <label className="form-check-label" for="inlineRadio3">Admin</label>
    </div>

    <div id="userlog">
        <form action="func.php" method="POST">
          <div className="input-field">
            <input type="text" name="email" className="form-control" placeholder="Email" required/>
            <i className="uil uil-user icon"></i>
          </div>
          <div className="input-field">               
            <input type="password" className="form-control" name="password2" placeholder="Password" required/>
            <i className="uil uil-lock icon"></i>
            <i className="uil uil-eye-slash showHidePw"></i>
          </div>
          <button type="submit" id="inputbtn" value="Login" className="input-field button" style={{backgroundColor:"#4070f4"}} name="patsub"><b>SUBMIT</b></button>
        </form>

        <div className="login-signup">
            <span className="text"
              >Not a member?
              <Link to="/Register" className="text">Signup Now</Link>
             
            </span>
          </div>
</div>

<div id="doclog" hidden="true">
        <form action="func1.php" method="POST" >
          <div className="input-field">
            
            <input type="text" className="form-control" placeholder="User Name Of Doctor *" name="username3" onkeydown="return alphaOnly(event);" required/>
            <i className="uil uil-user icon"></i>
          </div>
          <div className="input-field">               
            
            <input type="password" className="form-control" placeholder="Password *" name="password3" required/>
            <i className="uil uil-lock icon"></i>
            <i className="uil uil-eye-slash showHidePw"></i>
          </div>
          <button type="submit" className="input-field button" style={{backgroundColor: "#4070f4"}} name="docsub1" value="Login"><b>SUBMIT</b></button>
        </form>
</div>



<div id="adlog" hidden="true">
        <form action="func3.php" method="POST">
          <div className="input-field">
            
            <input type="text" className="form-control" placeholder="User Name of admin *" name="username1" onkeydown="return alphaOnly(event);" required/>
            <i className="uil uil-user icon"></i>
          </div>
          <div className="input-field">               
           
            <input type="password" className="form-control" placeholder="Password *" name="password2" required/>
            <i className="uil uil-lock icon"></i>
            <i className="uil uil-eye-slash showHidePw"></i>
          </div>
          <button type="submit" name="adsub" className="input-field button" style={{backgroundColor: "#4070f4"}} value="Login"><b>SUBMIT</b></button>
        </form>
</div>




          </div>
    </div>
  </div>


</>
    );
}