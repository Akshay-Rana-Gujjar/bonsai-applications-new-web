import React, { Suspense } from 'react';
const Navbar = React.lazy(()=>import("./Components/Navbar"));
const Slider = React.lazy(()=>import("./Components/Slider"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Slider/>
    </Suspense>
  );
}

export default App;
