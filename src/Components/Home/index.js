import React from "react";
const Navbar = React.lazy(()=>import("../Navbar"));
const Slider = React.lazy(()=>import("../Slider"));
const Values = React.lazy(()=>import("../KeyValues"));
const Services = React.lazy(()=>import("../Products"));
const HappyCustomers = React.lazy(()=>import("../CustomersReach"));
const About = React.lazy(()=>import("../About"));
const Price = React.lazy(()=>import("../Price"));
const Showcase = React.lazy(()=>import("../Showcase"));
const Contact = React.lazy(()=>import("../ContactUs"));
const Footer = React.lazy(()=>import("../Footer"));

const Home = ()=>{
    return(
        <>
        <Navbar/>
        <Slider/>
        <Values/>
        <Services/>
        <HappyCustomers/>
        <About/>
        <Price/>
        <Showcase/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;