import React from 'react';
import './App.css';
import AdminRouter from './components/AdminRouter';
import Home from './components/Home';
import MainLogin from './components/MainLogin';
import MechanicRouting from './components/MechanicRouting';
import ReactRouter from './components/ReactRouter';
import UserRouting from './components/UserRouting';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       {/* <MainLogin  /> */}
       <Router>
    <Switch>
      <Route exact path="/" component={MainLogin}></Route>
      <Route path="/admin" component={AdminRouter}></Route>
      <Route path="/mechanic" component={MechanicRouting}></Route>
      <Route path="/user" component={UserRouting}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
