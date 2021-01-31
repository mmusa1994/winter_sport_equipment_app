import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import { Dashboard } from "./features/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Counter />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
