import React from "react";
import {Link} from "react-router-dom";
import './style.css';
import ListArrow from "../../Images/list-arrow.svg";

const Footer = ()=>{
    const cYear = new Date().getFullYear();
    return(
        <>
        <footer>
            <div className="footer_content">
                <div className="left_sec">
                    <h4>Quick Links</h4>
                    
                    <ul>
                        <li>
                            <img src={ListArrow} alt="Arrow"/>
                            <a href="#services">Service</a>
                        </li>
                        <li>
                            <img src={ListArrow} alt="Arrow"/>
                            <a href="#price">Price</a>
                        </li>
                        <li>
                            <img src={ListArrow} alt="Arrow"/>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <img src={ListArrow} alt="Arrow"/>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="right_sec">
                    <p>For more updates related to our offers and new services/products, subscribe our newsletter</p>
                    <input type="email" placeholder="Enter Your Email" />
                    <button>Subscribe for Newsletter</button>
                </div>
            </div>
            <p className="copyright">Copyright ©{cYear} All right reserved | Bonsai Applications Pvt. Ltd.</p>
        </footer>
        </>
    )
}

export default Footer;