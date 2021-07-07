import React, { Suspense } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
const Privacy = React.lazy(()=>import("./Components/PrivacyPolicy"));
const Home = React.lazy(()=>import("./Components/Home"));

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/privacy-policy"><Privacy/></Route>
        <Route path="/"><Home/></Route>
        <Route path="*"><Home/></Route>
      </Switch>
    </Suspense>
    </Router>
  );
}

export default App;
