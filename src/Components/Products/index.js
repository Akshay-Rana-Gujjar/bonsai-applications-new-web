import React from 'react';
import './style.css';
import Web from "../../Images/services/website.svg";
import Apps from "../../Images/services/apps.svg";
import Seo from "../../Images/services/seo.svg";
import Market from "../../Images/services/marketing.svg";
import Learn from "../../Images/services/learning.svg";
import Rental from "../../Images/services/rental.svg";
import Square from "../../Images/services/squares.svg";

const Products = ()=>{
    return(
        <>
        <div className="service-div-main" id="services">
            <h1>What do we offer</h1>
            <p>We also create rental APPLICATIONS.</p>
            <div className="services-div">
                <div className="service-item">
                    <img src={Web} alt="Website" title="Website" />
                    <h4>Website Developement</h4>
                </div>
                
                <div className="service-item">
                    <img src={Apps} alt="Apps" title="Apps" />
                    <h4>Application Developement</h4>
                </div>

                <div className="service-item">
                    <img src={Seo} alt="Seo" title="Seo" />
                    <h4>Ranking on Search Engine</h4>
                </div>

                <div className="service-item">
                    <img src={Market} alt="Marketing" title="Marketing" />
                    <h4>Digital Marketing</h4>
                </div>

                <div className="service-item">
                    <img src={Learn} alt="Learn" title="Learn" />
                    <h4>Apps-Websites Training Centre</h4>
                </div>

                <div className="service-item">
                    <img src={Rental} alt="Rental Apps" title="Rental Apps" />
                    <h4>Rental Applications</h4>
                </div>
            </div>
        </div>

        <div className="squares">
            <img src={Square} alt="Squares" />
        </div>
        </>
    )
}

export default Products;