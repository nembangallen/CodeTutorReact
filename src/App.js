import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./screen/Login";
import "antd/dist/antd.css";
import Dashboard from "./screen/Dashboard";


const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Dashboard/>
      </Switch>
    </Router>
    </div>

  )
}

export default App;
