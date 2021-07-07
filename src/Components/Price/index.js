import React from "react";
import "./style.css";

const Price = () => {
  return (
    <>
      <div className="price-section" id="price">
        <h1>Our best Offers/Prices</h1>
        <PriceCard />
      </div>
    </>
  );
};

const PriceCard = () => {
  return (
    <>
      <div className="price-cards">
        <div className="card-item">
          <div>
            <h5>Basic</h5>
            <h2>Rs.10,000*</h2>
            <hr />
            <p>Service 1</p>
            <hr />
            <p>Service 2</p>
            <hr />
            <p>Service 3</p>
            <hr />
          </div>
          <a href="tel:+9181-307-56533">Call Us Now</a>
        </div>
        <div className="card-item">
          <div>
            <h5>Professional</h5>
            <h2>Rs.25,000*</h2>
            <hr />
            <p>Service 1</p>
            <hr />
            <p>Service 2</p>
            <hr />
            <p>Service 3</p>
            <hr />
          </div>
          <a href="tel:+9181-307-56533">Call Us Now</a>
        </div>
        <div className="card-item">
          <div>
            <h5>Master</h5>
            <h2>Rs.50,000*</h2>
            <hr />
            <p>Service 1</p>
            <hr />
            <p>Service 2</p>
            <hr />
            <p>Service 3</p>
            <hr />
          </div>
          <a href="tel:+9181-307-56533">Call Us Now</a>
        </div>
      </div>
    </>
  );
};
export default Price;
