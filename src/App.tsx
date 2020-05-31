import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
