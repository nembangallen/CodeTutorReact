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


const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Login />
      </Switch>
    </Router>
    </div>

  )
}

export default App;
