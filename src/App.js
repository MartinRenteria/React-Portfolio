import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";

    function App() {
        return (
            <div>
            <Router>
            <Navbar />
                <Switch>
                 <Route component={Home} path='/Home' exact/>
                 <Route component={Portfolio} path='/Portfolio'/>
                 <Route component={ContactMe} path='/ContactMe' />
                </Switch>
            </Router>
            </div>
        )
    }

export default App;