import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/NavBar/Navbar";

    function App() {
        return (
            <div>
            <Navbar />
            <Home />
            <Router>
                <Switch>
                 <Route exact path='/Portfolio' component={Portfolio} />
                 <Route exact path='/ContactMe' component={ContactMe} />
                </Switch>
            </Router>
            </div>
        )
    }

export default App;