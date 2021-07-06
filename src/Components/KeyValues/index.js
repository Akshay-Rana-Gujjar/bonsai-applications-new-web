import React from 'react';
import LeftDots from "../../Images/dots_left.png";
import RightDots from "../../Images/dots_right.png";
import PC from "../../Images/desktop.svg";
import Design from "../../Images/design-line.svg";
import Like from "../../Images/like.svg";
import "./style.css";

const KeyValue = ()=>{
    return(
        <>
        <div className="left-dots-div">
            <img src={LeftDots} className="left-dots" alt="dots"/>
        </div>

        <div className="values-div">
            <h1>Our Key Values</h1>
            <div className="values-cards">
                <div className="cards">
                    <div className="icon">
                        <img src={PC} alt="PC" title="Modern Website" />
                    </div>
                    <h4>Modern Websites</h4>
                    <p>Our website is very user friendly. You can find services or product very easily. If you have any problem then you can contact us. And we are available to you at all time.</p>
                </div>

                <div className="cards">
                    <div className="icon">
                        <img src={Design} alt="PC" title="Modern Website" />
                    </div>
                    <h4>Awesome Design</h4>
                    <p>Websites that will suits your business. We create awesome websites and applications for your business. You will love us as soon as you see it and you will come to us again & again.</p>
                </div>

                <div className="cards">
                    <div className="icon">
                        <img src={Like} alt="PC" title="Modern Website" />
                    </div>
                    <h4>Customer Satisfaction</h4>
                    <p>We are here to listen your queries any time because we want the customer to be satisfied.</p>
                </div>
            </div>
        </div>

        <div className="right-dots-div">
            <img src={RightDots} className="right-dots" alt="dots"/>
        </div>
        </>
    )
}

export default KeyValue;