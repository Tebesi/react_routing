import React from "react";
import "./App.css";
import UserForm from "./Form/UserForm";
import ControlledForm from "./ControlledForm";
import Counter from "./Counter";
import Logging from "./Logging";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Logging} />
          <Route path="/userform" component={UserForm} />
          <Route path="/form" component={ControlledForm} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
