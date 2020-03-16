import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// Import Pages

import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";

import Error from "./pages/Error";
// Import Component




function App() {
  return (
    <Router>
      {/* Add the Navbar to every single page without the search */}
      
      {/* Use Switch we need to display he first component only!*/}
      {/* It will render the first child that is matching the URL ! */}
      <Switch>
      {/* Second Route */}
    <Route exact path="/">
      <Overview />
    </Route>
    {/* Second Route */}
    <Route  exact path="/Repositories">
      <Repositories />
    </Route>
    {/* Third Route */}
        {/* Error path go to Error page */}
    <Route path="*">
      <Error />
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
