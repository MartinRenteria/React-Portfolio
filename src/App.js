import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";



    function App() {
        return (
            <BrowserRouter>
            <Navbar />
                <Switch>
                 <Route component={Home} path='/' exact/>
                 <Route component={About} path='/about' />
                 <Route component={Portfolio} path='/portfolio' />
                 <Route component={Resume} path='/resume' />
                 <Route component={ContactMe} path='/contactme' />
                </Switch>
            </BrowserRouter>
        )
    }

export default App;