import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                 <Route exact path="/Home" component={Home}  />
                 <Route exact path='/Portfolio' component={Portfolio} />
                 <Route exact path='/ContactMe' component={ContactMe} />
                </Switch>
            </Router>
            </div>
        )
    }

export default App;