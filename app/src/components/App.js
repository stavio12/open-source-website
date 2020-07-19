import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Business from "./Business";
import HomePage from "./Homepage/HomePage";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Business />
      </Router>
    </>
  );
}

export default App;
