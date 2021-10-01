import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound";
function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  
  );
}

export default App;
