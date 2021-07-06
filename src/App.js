import React, { Suspense } from 'react';
const Navbar = React.lazy(()=>import("./Components/Navbar"));
const Slider = React.lazy(()=>import("./Components/Slider"));
const Values = React.lazy(()=>import("./Components/KeyValues"));
const Services = React.lazy(()=>import("./Components/Products"));
const HappyCustomers = React.lazy(()=>import("./Components/CustomersReach"));
const About = React.lazy(()=>import("./Components/About"));
const Price = React.lazy(()=>import("./Components/Price"));
const Showcase = React.lazy(()=>import("./Components/Showcase"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Slider/>
      <Values/>
      <Services/>
      <HappyCustomers/>
      <About/>
      <Price/>
      <Showcase/>
    </Suspense>
  );
}

export default App;
