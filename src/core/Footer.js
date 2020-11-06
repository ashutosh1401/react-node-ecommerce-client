import React from "react"
import image1 from '../images/index.jpg'
import { FaFacebook, FaLinkedin,FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-section">
            <footer className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-center">
                    <div className="row row-bg">                   
                    <div className="col-md-4 mt-md-0 mt-3">
                        <div className="link-row">
                            <ul className="link-unstyled link-color">
                                <div className="flexicons-container">
                                    <div><a href="#"><FaFacebook /></a></div>
                                    <div><a href="#"><FaLinkedin /></a></div>
                                    <div><a href="#"><FaTwitter /></a></div>
                                    <div><a href="#"><FaEnvelope /></a></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-4 mb-md-0 mb-3">

                        <h5 className="text-uppercase"><b>Footer Links</b></h5>
                        <br />
                        <ul className="list-styled link-color text-left">
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <br />
                        <li>
                            <a href="#!">Privacy & Policy</a>
                        </li>
                        <br />
                        <li>
                            <a href="#!">Terms & Condition</a>
                        </li>
                        <br />
                        <li>
                            <a href="#!">Partner Program</a>
                        </li>
                        <br />
                        <li>
                            <a href="#!">Contact Us</a>
                        </li>
                        </ul>

                    </div> 

                    <hr className="clearfix w-100 d-md-none pb-3" />

                    
                    <div className="col-md-4 mb-md-0 mb-3">

                        <h5 className="text-uppercase"><b>RECENT POST</b></h5>

                        <ul className="list-unstyled link-color">
                        <li>
                            <img src={image1} width="52px" height="52px" /><a href="#!">How to Design effective arts?</a>
                            <p><span>Jan 03 - 2019</span></p>
                            <hr />
                        </li>
                        <li>
                            <img src={image1} width="52px" height="52px" /><a href="#!">How to Design effective arts?</a>
                            <p><span>Jan 03 - 2019</span></p>
                            <hr />
                        </li>
                        <li>
                            <img src={image1} width="52px" height="52px" /><a href="#!">How to Design effective arts?</a>
                            <p><span>Jan 03 - 2019</span></p>
                            <hr />
                        </li>
                        </ul>

                    </div>                    
                    </div>
                    <div className="row" style={{backgroundColor: "black", width: "auto", height: "50px"}}>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer