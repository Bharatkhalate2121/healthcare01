import React from "react";
import { Link } from "react-router-dom";















import "./Logcomponent.css";


export default function Register() {
    return (
        <>
            <div className="containerr active" style={{ paddingTop: "0%" }}>
                <div className="forms">
                    <div className="form signup">
                        <Link to="/">
                            <img
                                src="Cross.svg"
                                alt=""
                                style={{ objectFit: "contain", height: "30px", float: "right" }}
                            />
                        </Link>
                        <span className="title">Sign-up</span>
                        <form method="POST" action="">
                            <div id="veri">
                                <div className="input-field">
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        placeholder="Enter phone number"
                                        required
                                    />
                                    <i className="uil uil-envelope icon"></i>
                                </div>
                                <div className="input-field">
                                    <div id="recaptcha-container"></div>
                                </div>
                                <div className="input-field">
                                {/* eslint-disable-next-line */}
                                    <button type="button" className="input-field button" style={{width: "50%",height: "60%",backgroundColor: "#4070f4",}} onClick={phoneAuth}>
                                        Send Otp
                                    </button>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        id="verificationCode"
                                        placeholder="Enter received OTP"
                                    />
                                    <i className="uil uil-lock icon"></i>
                                </div>
                                <div className="input-field">
                                {/* eslint-disable-next-line */}
                                    <button type="button" className="input-field button" style={{ backgroundColor: "#4070f4" }} onClick={codeverify} >
                                        Verify code
                                    </button>
                                </div>
                            </div>
                            <div id="dat" hidden="true">
                                <div className="input-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name *"
                                        name="fname"
                                        onkeydown="return alphaOnly(event);"
                                        required
                                    />
                                    <i className="uil uil-user icon"></i>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name *"
                                        name="lname"
                                        onkeydown="return alphaOnly(event);"
                                        required
                                    />
                                    <i className="uil uil-user-md icon"></i>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email *"
                                        name="email"
                                    />
                                    <i className="uil uil-envelope icon"></i>
                                </div>
                                <div className="input-field">
                                    {/* eslint-disable-next-line no-undef */}
                                    <input type="password" className="form-control" placeholder="Password *" id="password" name="password" onKeyUp={check} required />
                                    <i className="uil uil-lock icon"></i>
                                </div>
                                <div className="maxl">
                                    <label className="radio inline">
                                        <input type="radio" name="gender" value="Male" checked />
                                        <span> Male </span>
                                    </label>
                                    <label className="radio inline">
                                        <input type="radio" name="gender" value="Female" />
                                        <span>Female </span>
                                    </label>
                                </div>
                                <div className="input-field">
                                {/* eslint-disable-next-line no-undef */}
                                    <button type="submit" className="input-field button" style={{ backgroundColor: "#4070f4" }} name="patsub1" onClick={checklen}>
                                        Submit
                                    </button>
                                </div>
                                <br />
                                <div className="login-signup">
                                    <span className="text">
                                        Already a member?
                                        <Link to="/" className="text">
                                            Login Now
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}
