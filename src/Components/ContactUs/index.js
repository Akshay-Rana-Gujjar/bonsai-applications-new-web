import React from 'react';
import './style.css';
import Phone from "../../Images/contact/phone.svg";
import Email from "../../Images/contact/email.svg";
import Locate from "../../Images/contact/locate.svg";

const ContactUs = ()=>{
    return(
        <>
        <div className="contact_us" id="contact">
            <h1>Contact Us</h1>

            <div className="contact_address_sec">
                <div>
                    <h4>Bonsai Applications</h4>
                    <address>
                        Office 374, 3rd Floor,<br />
                        Cloud 9 Tower,<br />
                        Vaishali, Ghaziabad
                    </address>
                </div>
                <div>
                    <div className="contact_details">
                        <img src={Phone} alt="call" />
                        <p><a href="tel:+91-81307-56533">+91 81307 56533</a></p>
                    </div>
                    <div className="contact_details">
                        <img src={Email} alt="email" />
                        <p><a href="mailto:info@bonsaiapplications.com">info@bonsaiapplications.com</a></p>
                    </div>
                </div>
                <div>
                    <img src={Locate} alt="location" />
                </div>
            </div>
        </div>
        <ContactForm/>
        </>
    )
}

const ContactForm = ()=>{
    return(
        <>
        <div className="contact_form_sec">
            <h1>Or You Can Send Us A Mail</h1>

            <div className="form">
                <div className="two_inputs">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="text" placeholder="Enter Your Number"/>
                </div>
                <input type="email" className="email" placeholder="Enter Your Email" />
                <textarea cols="" rows="" placeholder="Enter Your Message"></textarea>
            </div>
            <button>Send Message</button>
        </div>
        </>
    )
}

export default ContactUs;